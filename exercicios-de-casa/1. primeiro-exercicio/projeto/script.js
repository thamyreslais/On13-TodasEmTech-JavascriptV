async function getApi () {
  const myheaders = new Headers()

  const myInit = {
    method: 'GET',
    headers: myheaders
  }

  const resposta = await this.fetch(
    'https://jsonplaceholder.typicode.com/posts/'
  )
  const resultado = await resposta.json();
  
  let container = document.getElementById('container');

  resultado.map((dado)=> {
        
    let card = document.createElement('div');
    let title = document.createElement('h2');
    let body = document.createElement('p');

    title.textContent = dado.title
    body.textContent = dado.body
    container.appendChild(card)
    card.appendChild(title)
    card.appendChild(body)

  })

  return resultado;
}

window.addEventListener('load', getApi)





