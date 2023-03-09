import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import { useEffect, useMemo, useState } from "react"

const useDebounce = function (
  requestData: AxiosRequestConfig,
  delay: number = 1000
): { res: AxiosResponse | undefined; isLoading: boolean; isError: boolean } {
  const [res, setRes] = useState<AxiosResponse>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  useEffect(
    function () {
      const axiosSource = axios.CancelToken.source()
      setIsLoading(() => true)
      setIsError(() => false)
      const timeId = setTimeout(function () {
        axios({ ...requestData, cancelToken: axiosSource.token })
          .then((res) => {
            setRes(res)
          })
          .then(() => {
            setIsLoading(() => false)
            setIsError(() => false)
          })
          .catch((err) => {
            console.log(err)
            setIsLoading(() => false)
            setIsError(() => true)
          })
      }, 1000)
      return () => {
        clearTimeout(timeId)
        axiosSource.cancel()
      }
    },
    [requestData]
  )
  return {
    res,
    isLoading,
    isError,
  }
}

export default useDebounce
