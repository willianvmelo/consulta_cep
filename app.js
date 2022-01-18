var submitButton = document.querySelector("#app form button")
var zipcodeField = document.querySelector("#app form input")
var content = document.querySelector("#app main")

submitButton.addEventListener('click',run)

function run(event){

    event.preventDefault() // Previne o comportamento padrão evitanndo que a página recarregue.

    var zipcode = zipcodeField.value

    zipcode = zipcode.replace(' ','')
    zipcode = zipcode.replace('.','')
    zipcode = zipcode.trim()

    axios.get('https://viacep.com.br/ws/'+zipcode+'/json/')
    .then(function(response){

        //Tratando erro de cep inválido
        if (response.data.erro){
            throw new Error('CEP inválido')
        }

        content.innerHTML = '' // Limpa a linha e evita que empilhe os dados buscados.

        createLine(response.data.logradouro)
        createLine('Bairro '+response.data.bairro)
        createLine(response.data.localidade+'/'+response.data.uf)
        
    
    })
    .catch(function (error){
        content.innerHTML = '' // Limpa a linha e evita que empilhe os dados buscados.
        console.log(error)
        createLine('Ops, algo deu errado!')
        createLine('Verifique se o CEP está correto.')
    })
    
}

// Função que cria uma nova linha de elemento HTML

function createLine(text){
    var line = document.createElement('p')
    var text = document.createTextNode(text)
    line.appendChild(text)
    content.appendChild(line)
}