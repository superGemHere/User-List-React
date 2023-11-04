const baseUrl = 'http://localhost:3030/jsonstore/users';

export const getAll = async() =>{
    try {
        const response = await fetch(baseUrl);
        const result = await response.json();

        const data = Object.values(result)
        console.log(data);
        

        return data;
    } catch (error) {
        alert(error)
    }
}