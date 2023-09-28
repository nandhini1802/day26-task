import { mockApi } from "./config";

// Read 

export const getUser = async()=> {
    const response = await fetch(`${mockApi}/students`);
    const users = await response.json();
    return users;
}


// getSingleUser
export const getSingleUser = async(id)=> {
    const response = await fetch(`${mockApi}/students/${id}`);
    const user = await response.json();
    return user
}




// Create users
export const createUser = async(data)=> {
    const response = await fetch(`${mockApi}/students`, {
        method : 'POST',
        body : JSON.stringify(data),
        headers : {
            'Content-Type' : 'application/json'
        }
    });
    const users = await response.json()
    return users;
}




// updateUser
export const updateUser = async(data, id)=> {
    const response = await fetch(`${mockApi}/students/${id}`, {
        method : 'PUT',
        body : JSON.stringify(data),
        headers : {
            'Content-Type' : 'application/json'
        }
    });
    const users = await response.json()
    return users;
}



// deleteUser
export const deleteUser = async(id)=> {
    const response = await fetch(`${mockApi}/students/${id}`, {
        method : 'DELETE'
    });
    const user = await response.json();
    return user
}