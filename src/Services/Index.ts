import axios from 'axios'

export const urlBase = 'https://rickandmortyapi.com/api/'

const headers = { 'Content-Type': 'application/json; charset=utf-8' }

export const webApiService = {
  getAllCharaters: async () => {
    const url = `${urlBase}character`
    return await axios(url, { method: 'GET', headers }).then((res: any) => res.data)
  }
}
