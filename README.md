# Projeto Food Explorer interface

O Food Explorer representa a conclusão do curso Explorer da Rocketseat, sendo um aplicativo de pedidos de comida que pode ser utilizado em um restaurante.

# Funcionalidades Principais:
- Cadastro e login com autenticação por tokens.
- Adição de itens ao pedido com quantidades desejadas.
- Opção de favoritar pratos e lista de favoritos.
- Inclusão de itens no carrinho.
- Finalização do pedido com simulação de pagamento.

# Tipos de Usuários:
O sistema possui dois tipos de usuários:
- Administrador (role: admin)
- Usuário Comum (role: customer)

O administrador tem a capacidade de adicionar novos pratos, editar os existentes ou excluí-los, além disso, é responsável por atualizar o status dos pedidos, desde a confirmação e entrega.

# Tecnologias Utilizadas:
- React (vite)
- axios
- styled-components.


Execução do projeto:

clonar projeto em:

  git https://github.com/limarod/food-app-front


Instalar dependências:
```bash
npm install
```

Iniciar o servidor:
```bash
npm run dev
```

Servidor vai inicializar em:
    http://localhost:5173/


# deploy BackEnd
O Deploy do back end foi feito utilizando o RENDER conforme URL abaixo:
https://food-app-back-5b83.onrender.com

# deploy Front
O Deploy Front-end foi feito utilizando o Netlify conforme URL abaixo:
https://foodapprocket.netlify.app

# Cadastro de usuários:
Utilizar uma API client (como postman ou insomnia) para cadastrar um user ADMIN enviando objeto JSON com a role 'admin' , ou
utilizar um gerenciador database como SQL Server ou Beekeeper Studio para alteração da role manualmente.

O cadastro de usuários na interface se dará apenas para users comuns (Customer).
