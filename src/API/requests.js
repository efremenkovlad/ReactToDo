import { func } from "prop-types";


const URL_ADDRESS = 'http://localhost:4000/tasks'

async function getList () {

    const res = await fetch( URL_ADDRESS + '/', {
        method: 'GET',

        headers: {
            "Content-Type": "text/plain"
        }
    });
        
    if (res.ok) {
        const data = await res.json();
        return data;
    } else {
        throw new Error(res);}
}

async function addTask (task) {
    const isCompleted = false

    const res = await fetch (URL_ADDRESS + '/', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'},
        body: JSON.stringify({task, isCompleted})
    });
    
    if (res.ok) {
        const data = await res.json();
        return data
    }
}

async function changeState(id) {

    const res = await fetch (URL_ADDRESS + '/' + id, {
        method: 'PUT',
        mode: 'cors',
        headers: { 'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'},
        body: JSON.stringify({id})
    })
    if (res.ok) {
        const data = await res.json();
        return data;
    }
}
 
async function getTask (id) {

    const res = await fetch (URL_ADDRESS + '/' + id, {
        method: 'GET',
        headers: {
            "Content-Type": "text/plain"
        }
    })
    if (res.ok) {
        const data = await res.json();
        return data;
    } 
} 

async function clearCompleted (listId) {

    const res = await fetch (URL_ADDRESS + '/delete', {
        method: 'DELETE',
        mode: 'cors',
        headers: { 'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'},
        body: JSON.stringify({listId})
    })
    if (res.ok) {
        const data = listId
        return data;
    }
}

async function changeStateAll(list) {

    console.log(list)
    const res = await fetch (URL_ADDRESS + '/all', {
        method: 'PUT',
        mode: 'cors',
        headers: { 'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'},
        body: JSON.stringify({list})
    })
    if (res.ok) {
        const data = await res.json();
        return data;
    }
}

export {getList, addTask, changeState, getTask, clearCompleted, changeStateAll}

