

const token = 'Bearer 605d07a8c9a61e1dfe51b7a7acce37ebb1a46a51b7681c2e6fcf42272c0d2993180f3027ed04196882941e65adc81d69fc6c75b0cb40eb3c2b0f0696bcc5dc19208d159e204f7a09342ebd8debfb89fb3298f9d35f533c7183bb7787c325b7882b57b5e8f895b1cde99f12a37615724a34e92b53e4aa3cd5f01ee924d13eb70f';
// @ts-ignore
export const SetupInterceptors = http => {

  http.interceptors.request.use(
  // @ts-ignore
    config => {
      config.headers['Authorization'] = token
      config.headers['content-type'] = 'application/json'
      return config
    },
    // @ts-ignore
    error => {
      return Promise.reject(error)
    }
  )
}