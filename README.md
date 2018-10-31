# My Reads (myreads-project)

Programa Nanodegree Desenvolvedor React Udacity - Projeto I : MyReads: uma aplicação de registro de livros

# Sobre o projeto

O projeto consiste em uma aplicação de estante de livros que permite selecionar e classificar os livros que você já leu, está lendo ou quer ler. O projeto enfatiza o uso de React para criar a aplicação e fornece um servidor de API e uma biblioteca cliente, que será usada para armazenar informações à medida que o usuário interage com a aplicação.

# Funcionalidades da aplicação

Na aplicação desenvolvida, a página principal exibe uma lista de "estantes" (ou seja, categorias), cada uma das quais contém uma série de livros. As três estantes são: Currently Reading (lendo atualmente), Want to Read (quer ler) e Read (já leu).

Cada livro tem um controle que permite selecionar uma estante para ele. Ao selecionar uma prateleira diferente, o livro é movido para lá. 

A página principal possui um link para /search, uma página de pesquisa que permite que o usuário encontre livros para adicionar à sua biblioteca. A página de pesquisa possui uma entrada de texto que pode ser usada para encontrar livros. À medida que o valor da entrada de texto muda, os livros que correspondem a essa consulta são exibidos na página, juntamente a um controle que permite adicionar o livro à sua biblioteca.

A página de pesquisa também possui um link para / (a URL raiz), que leva de volta à página principal.

São sugeridos os seguintes termos para pesquisa: 

'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'

# Instalação e Inicialização

A aplicação foi criada com o create-react-app, sendo necessário que o usuário possua o <a href="https://nodejs.org/en/">Node.js</a> para inicialização.

O usuário deve acessar o diretório que deseja armazenar a aplicação e, em seguida, executar os seguintes passos:

1. Clone do projeto no diretório escolhido:
<pre>git clone https://github.com/danubiadias/myreads-project.git </pre>

2. Instalação de dependências para o aplicativo
<pre>npm install </pre>

3. Inicialização da aplicação
<pre>npm start </pre> 
 ou 
<pre>yarn start </pre> 

Caso queira usar o yarn, é necessário consultar sua <a href="https://yarnpkg.com/en/">documentação</a> para realizar as instalações necessárias.

# Aplicação

Caso os passos acima sejam executados corretamente, uma nova janela do navegador deverá abrir automaticamente exibindo a aplicação My Reads. Caso isto não ocorra automaticamente, é possível acessar o aplicativo através do endereço <a href="http://localhost:3000/">http://localhost:3000/</a> em seu navegador.
