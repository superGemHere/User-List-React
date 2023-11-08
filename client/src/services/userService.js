const baseUrl = 'http://localhost:3030/jsonstore/users';

export const getAll = async() =>{
 
        const response = await fetch(baseUrl);
        const result = await response.json();

        const data = Object.values(result)
        console.log(data);
        

        return data;

}

export const createUser = async (data) => {
    const body = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        imageUrl: data.imageUrl,
        phoneNumber: data.phoneNumber,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        address: {
            coutry: data.coutry,
            city: data.city,
            street: data.street,
            streetNumber: data.streetNumber
        }
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }

    const response = await fetch(baseUrl, options);

    const result = await response.json();
    console.log(result);

    return result;
}

export const getOne = async(userId) => {
    const userUrl = `${baseUrl}/${userId}`;
    // console.log(userUrl)

   const response =  await fetch(userUrl);
   const result = await response.json();
//    console.log(result)
   return result;


}

export const deleteOne = async(userId) => {
    const response = await fetch(`${baseUrl}/${userId}`, {
        method: 'DELETE'
    })

    const result = await response.json();

    return result;
}

export const updateOne = async(userId, updatedBody) => {
    const response = await fetch(`${baseUrl}/${userId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updatedBody)
    });

    const result = await response.json();

    return result;
}