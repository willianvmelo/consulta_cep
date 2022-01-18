var submitButton = document.querySelector("#app form button")
var zipcodeField = document.querySelector("#app form input")
var content = document.querySelector("#app main")

submitButton.addEventListener('click',run)

function run(event){
    event.preventDefault()
    var zipcode = zipcodeField.value

    zipcode = zipcode.replace(' ','')
    zipcode = zipcode.replace('.','')
    zipcode = zipcode.trim()

    console.log(zipcode)
}