type InputRangePropsT = {
  onChange?: (e: React.FormEvent<HTMLInputElement>) => string
}
export const InputRange:React.FC = () => {
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
  }
  return (
    <div>123</div>
  );
};