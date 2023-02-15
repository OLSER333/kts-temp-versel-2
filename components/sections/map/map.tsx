// @ts-nocheck
import { useYMaps } from "@pbe/react-yandex-maps";
import {
  List,
  Tabs,
  Title,
  WrapperInfo,
  TabWrapper,
  CardWrapper,
  CardTitle,
  CardSubTitle,
  CardButtons,
  CardButton,
  CardSubButton,
  MapWrapper,
  MapSectionWrapper,
  StyledMap,
  TabList,
  ListItem,
  Checkbox,
  CountCity,
  SelectedSortText,
  MobileSectionTabs,
  SrctionTab, MapSectionOuterWrapper,
} from "./map.style";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ENavLinks } from "../../common/nav-header/nav-header";

const Card = ({ title, subTitle, onClick, isSelected }) => (
  <CardWrapper>
    <CardTitle>{title}</CardTitle>
    <CardSubTitle>{subTitle}</CardSubTitle>
    <CardButtons>
      {isSelected ? (
        <CardSubButton>Показать на карте</CardSubButton>
      ) : (
        <CardButton onClick={onClick}>Показать на карте</CardButton>
      )}
    </CardButtons>
  </CardWrapper>
);

const TabCheckbox = ({ children, onChange, list = [] }) => {
  const [ selected, setSelected ] = useState([]);
  const [ listOpen, setListOpen ] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (listOpen) {
        setListOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ listOpen ]);

  return (
    <TabWrapper
      onClick={(e) => {
        e.stopPropagation();
        setListOpen((p) => !p);
      }}
    >
      {children}
      {selected.length ? <CountCity>{selected.length}</CountCity> : null}
      {listOpen && (
        <TabList onClick={(e) => e.stopPropagation()}>
          {list.map((title) => (
            <ListItem
              key={title}
              onClick={() =>
                setSelected((p) => {
                  const newC =
                    p.indexOf(title) !== -1 ? p.filter((item) => item !== title) : [ ...p, title ];
                  onChange(newC);

                  return newC;
                })
              }
              isActive={selected.indexOf(title) !== -1}
            >
              <Checkbox isActive={selected.indexOf(title) !== -1}/>
              <span>{title}</span>
            </ListItem>
          ))}
        </TabList>
      )}
    </TabWrapper>
  );
};

const TabRadio = ({ children, onChange, list = [] }) => {
  const [ selected, setSelected ] = useState(false);
  const [ listOpen, setListOpen ] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (listOpen) {
        setListOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ listOpen ]);

  return (
    <TabWrapper
      onClick={(e) => {
        e.stopPropagation();
        setListOpen((p) => !p);
      }}
    >
      {selected ? (
        <SelectedSortText>{list.find(({ id }) => id === selected).title}</SelectedSortText>
      ) : (
        children
      )}
      {listOpen && (
        <TabList onClick={(e) => e.stopPropagation()}>
          {list.map(({ title, id }) => (
            <ListItem
              key={id}
              onClick={() => {
                setSelected(id);
                onChange(id);
              }}
              isActive={selected === id}
            >
              <Checkbox isRadio={true} isActive={selected === id}/>
              <span>{title}</span>
            </ListItem>
          ))}
        </TabList>
      )}
    </TabWrapper>
  );
};

export const MapSection = ({ filialies = [] }) => {
  const mapRef = useRef(null);
  const ymaps = useYMaps([ "Map", "Placemark", "templateLayoutFactory", "Clusterer", "Balloon" ]);
  const [ map, setMap ] = useState(null);
  const cards = filialies;
  const [ selectedCard, setSelected ] = useState(cards[0].id);
  const [ selectedCities, setSelectedCities ] = useState([]);
  const [ selectedSort, setSelectedSort ] = useState(null);
  const [ clientCoords, setClientCoords ] = useState(null);
  const listRef = useRef(null);
  const [ mobileTab, setMobileTab ] = useState("map");

  useEffect(() => {
    if (!ymaps || !mapRef.current) {
      return;
    }

    const myMap = new ymaps.Map(mapRef.current, {
      center: [ cards[0].attributes.latitude, cards[0].attributes.longitude ],
      zoom: 3,
    });

    setMap(myMap);

    const myPlacemarks = cards.map(
      ({ attributes, id }) =>
        new ymaps.Placemark(
          [ attributes.latitude, attributes.longitude ],
          {},
          {
            // balloonContentLayout: "BalloonContentLayout",
            iconLayout: "default#image",
            iconImageHref: "/point.svg",
            iconImageSize: [ 30, 40 ],
            iconImageOffset: [ -15, -20 ],
            id,
          }
        )
    );

    myPlacemarks.forEach((myPlacemark) => {
      myPlacemark.events.add([ "click" ], function (e) {
        setSelected(e.originalEvent.target.options._options.id);
        listRef.current.scrollTop = listRef.current.querySelector(
          `#id-${e.originalEvent.target.options._options.id}-card`
        ).offsetTop;
      });
      myMap.geoObjects.add(myPlacemark);
    });
  }, [ ymaps ]);

  const radio = useMemo(
    () => [
      {
        title: "Ближе ко мне",
        id: 1,
        fn: (cards) => {
          navigator.geolocation?.getCurrentPosition((e) => {
            !clientCoords && setClientCoords([ e.coords.latitude, e.coords.longitude ]);
          });

          const sortedCards = clientCoords
            ? cards.sort((a, b) => {
              const firstRange = getDistanceFromLatLonInKm(
                a.attributes.latitude,
                a.attributes.longitude,
                clientCoords[0],
                clientCoords[1]
              );
              const secondRange = getDistanceFromLatLonInKm(
                b.attributes.latitude,
                b.attributes.longitude,
                clientCoords[0],
                clientCoords[1]
              );

              return firstRange - secondRange;
            })
            : cards;

          return sortedCards;
        },
      },
      {
        title: "По алфавиту а-я",
        id: 2,
        fn: (cards) =>
          cards.sort((a, b) => {
            if (a.attributes.city < b.attributes.city) {
              return -1;
            }
            if (a.attributes.city > b.attributes.city) {
              return 1;
            }
            return 0;
          }),
      },
      {
        title: "По алфавиту я-а",
        id: 3,
        fn: (cards) =>
          cards.sort((a, b) => {
            if (a.attributes.city > b.attributes.city) {
              return -1;
            }
            if (a.attributes.city < b.attributes.city) {
              return 1;
            }
            return 0;
          }),
      },
    ],
    [ setClientCoords, clientCoords ]
  );

  const cities = useMemo(
    () => Array(...new Set(cards.map((card) => card.attributes.city))),
    [ cards ]
  );

  const cityFilter = useCallback(
    (cards) => {
      const isActive = !!selectedCities.length;

      if (isActive) {
        return cards.filter((card) => selectedCities.indexOf(card.attributes.city) !== -1);
      }
      return cards;
    },
    [ selectedCities ]
  );

  const sortFn = useCallback(
    (cards) => {
      if (selectedSort) {
        return radio.find(({ id }) => id === selectedSort).fn(cards);
      }

      return cards;
    },
    [ radio, selectedSort ]
  );

  const sortFiltredCards = useMemo(() => sortFn(cityFilter(cards)), [ sortFn, cityFilter, cards ]);

  return (
    <MapSectionOuterWrapper id={ENavLinks.CONTACTS}>
      <Title onMobile={true} >Все филиалы</Title>
      <MapSectionWrapper >
        <MobileSectionTabs>
          <SrctionTab isActive={mobileTab === "map"} onClick={() => setMobileTab("map")}>
            Картой
          </SrctionTab>
          <SrctionTab isActive={mobileTab === "info"} onClick={() => setMobileTab("info")}>
            списком
          </SrctionTab>
        </MobileSectionTabs>
        <WrapperInfo isActive={mobileTab === "info"}>
          <Title onPc={true} >Все филиалы</Title>
          <Tabs>
            <TabRadio onChange={setSelectedSort} list={radio}>
              Сортировка
            </TabRadio>
            <TabCheckbox onChange={setSelectedCities} list={cities}>
              Город
            </TabCheckbox>
          </Tabs>
          <List ref={listRef}>
            {sortFiltredCards.map(({ attributes, id }) => (
              <li id={"id-" + id + "-card"} key={id}>
                <Card
                  isSelected={selectedCard === id}
                  title={attributes.name}
                  onClick={() => {
                    map?.setCenter([ attributes.latitude, attributes.longitude ]);
                    map?.setZoom(11);
                    setSelected(id);
                    setMobileTab("map");
                  }}
                  subTitle={attributes.address}
                />
              </li>
            ))}
          </List>
        </WrapperInfo>
        <MapWrapper isActive={mobileTab === "map"}>
          <StyledMap onMouseDown={() => setSelected(null)} ref={mapRef}/>
        </MapWrapper>
      </MapSectionWrapper>
    </MapSectionOuterWrapper>
  );
};

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
