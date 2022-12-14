import useSWR from 'swr'

const fetcher = (...args: any[]) => fetch(...args).then(res => res.json())

const BASE_URL="https://dev2.wakita.id/api"

const token="c6d2fbedb0f9409412aaec716687b9e856c7fc3a"

function AuthServices() {
    const { data, error, isLoading }:any = useSWR(`${BASE_URL}/overviews_list`, fetcher)
  
    return {
      user: data,
      isLoading,
      isError: error
    }
  }