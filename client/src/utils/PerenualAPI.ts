
//API call
export const searchPerenualAPI = (token: any, query: any) => {
        return fetch(`https://perenual.com/api/species-list?key=${token}&q=${query}`, {            
        method: 'GET'
    })
}

