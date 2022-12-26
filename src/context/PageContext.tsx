import { createContext, useContext, useEffect, useState } from 'react'
import { webApiService } from '../Services/Index'

export const PagesContext = createContext<any | null>(null)

export const PagesContextProvider = ({ children }: any) => {
  const { data, setData } = useProviderStore()

  const loadData = async () => {
    setData({ ...data, loading: true })
    webApiService.getAllCharaters().then((response) => {
      console.log('response', response)
      setData({ ...data, loading: false, dataResult: response.results, informations: response.info })
    })
  }

  useEffect(() => {
    loadData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log('data context', data)

  return (
    <PagesContext.Provider value={{
      data,
      setData
    }}
    >{children}
    </PagesContext.Provider>
  )
}

export const useProviderStore = () => {
  const [data, setData] = useState<{loading: boolean, dataResult: any[], informations: any}>({ loading: false, dataResult: [], informations: [] })

  return {
    data,
    setData
  }
}

export const usePagesContext = () => {
  const context = useContext(PagesContext)
  if (context === undefined) {
    throw new Error('PagesContext must be used within a app-rickyandmortin')
  }
  return context
}
