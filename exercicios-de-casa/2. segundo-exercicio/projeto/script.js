import { get } from 'axios'

const dogs = document.querySelector('#dogs')

get('https://dog.ceo/api/breeds/image/random')
  .then(resposta => {
    dogs.src = resposta.data.mensagem
  })
  .catch(erro => console.error(erro))
