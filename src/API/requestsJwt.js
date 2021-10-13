

const URL_ADDRESS_JWT = 'http://localhost:4000/users/jwt'



async function getJWT () {

    const res = await fetch( URL_ADDRESS_JWT, {
        method: 'GET',

        headers: {
            "Content-Type": "text/plain"
        }
    });        
    if (res.ok) {
        const data = await res.json();
        return data;
    } else {console.log(res)};
}

export default getJWT