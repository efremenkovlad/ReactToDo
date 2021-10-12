const URL_ADDRESS = 'http://localhost:4000/users'

async function signUp (email, password) {

    const res = await fetch(URL_ADDRESS + '/signup', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    })
    if (res.ok) {
        const data = await res.json();
        return data
    }
}

async function signIn(email, password) {

    const res = await fetch(URL_ADDRESS + '/login', {
        method: 'POST',
        headers: { 'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    })
    if (res.ok) {
        const data = await res.json()
        return data
    } 

}





export { signUp, signIn}



