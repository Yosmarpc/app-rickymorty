import axios from 'axios'
import { headers, urlBase } from '../Constants/constants'

export const webApiService = {
  getAllCharaters: async () => {
    const url = `${urlBase}character`
    return await axios(url, { method: 'GET', headers }).then((res: any) => res.data)
  },
  getAllPaginations: async (urlPage: string) => {
    const url = urlPage
    return await axios(url, { method: 'GET', headers }).then((res: any) => res.data)
  }
}
