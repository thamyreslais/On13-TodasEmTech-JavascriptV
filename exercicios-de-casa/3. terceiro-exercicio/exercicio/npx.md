# NPX - O que é?

NPX é um executor de pacote do NPM. Ele executa as bibliotecas que podem ser baixadas do site npmjs. Essas bibliotecas ficam em um 
banco de dados chamado NPM Registry, que também podem ser baixadas via CLI com npm ou yarn e com pnx. 

O NPM é um gerenciador de pacotes que é usado junto com o Node.js. Com NPM instalamos e desinstalamos as bibliotecas de um projeto ou da máquina.

Se o NPM é um gerenciador de pacotes, o NPX é um executor, por isso o X no final da sigla.

# Como funciona?

Quando se executa um pacote usando o NPX, ele procura o pacote no registro local e global e em seguida, executa o pacote. 

Se o pacote ainda não estiver instalado, o NPX baixa os arquivos do pacote e instala o pacote, mas apenas armazenará os arquivos em cache em vez de salva-los.

# Quais os motivos para utiliza-lo?

Existem várias maneiras de instalar pacotes do Node.js, você pode colocá-los localmente (local para o projeto) ou instalar globalmente (no ambiente do usuário).

As vezes, você pode quere apenas experimentar uma lista de pacotes, pois pode não saber exatamente o que precisa. 

Nesses casos, em vez de instalar localmente ou globalmente, você pode ir direto para a execução desses pacotes com NPX.

# Comandos básicos do npx;
Alguns exemplos de comandos de bibliotecas que podemos instalar com o npx:
- npx cowsay
- npx yo
- npx create-react-app
- npx npm-check



