

export const searchPerenualAPI = (token: any, query: any) => {
    console.log(`https://perenual.com/api/species-list?key=${token}&q=${query}`);
        return fetch(`https://perenual.com/api/species-list?key=${token}&q=${query}`, {
            
        method: 'GET'
    })
}

