const btn=document.querySelector('#btn')

let name = "Oussama"
let email = "oussama@masri.com"
btn.addEventListener('click',submitData(name,email))

function submitData(fname, emailAddress) {
const person={
    name:fname,
    email:emailAddress
}
    const configureObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( person )
    }
    
    return fetch('http://localhost:3000/users', configureObject )
      .then( response => {
        return response.json()
      } )
      .then( data => {
        document.body.innerHTML = data[ "id" ]
      } )
      .catch( err => {
        document.body.innerHTML = err.message
      } )
  }
