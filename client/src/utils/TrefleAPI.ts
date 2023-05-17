



export const searchTrefleAPI = (token: any, query: any) => {
    // console.log(`https://trefle.io/api/v1/plants?token=${token}&q=${query}`);
    console.log(`https://perenual.com/api/species-list?page=1&key=${token}&type=${query}`);
    // return fetch(`https://trefle.io/api/v1/plants?token=${token}&q=${query}`, {
        return fetch(`https://perenual.com/api/species-list?page=1&key=${token}&type=${query}`, {
            
        method: 'GET'
    })
}

