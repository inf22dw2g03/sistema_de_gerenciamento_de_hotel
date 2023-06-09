import Head from 'next/head';
import { useState } from 'react';
//Biblioteca para conectar com a api
import axios from 'axios';
import Link from 'next/link';

export default function Cadastrar() {
  
  //Declarar uma nova variavel dados com state e atribuir o objeto
  const [data, setData] = useState({
    name: '',
    address: '',
    email: '',
    password: '',
    type_user: ''
  });

  //Declarar a variavel para receber a mensagen
  const [message, setMessage] = useState("");

  //Receber os dados dos campos do formulario
  const valueInput = (e) => setData({ ...data, [e.target.name]: e.target.value});
  
  //Executar a função quando o usuario clicar no botão do formulario
  const addUser = async (e) => {

    //Bloquear o recarregamento da pagina
    e.preventDefault();

    //Manipular os dados recebidos, por exemplo, enviar dados para api
    
    // console.log("Enviar para API");
    // console.log("Nome do usuario:" + data.name);
    // console.log("Endereco do usuario:" + data.address);
    // console.log("Email do usuario:" + data.email);
    // console.log("Passe do usuario:" + data.password);
    // console.log("Tipo do usuario:" + data.type_user);

    //criar a constante com os dados do cabeçalho
    const headers = {
      'headers': {
        //Indicar que sera enviado os dados em formato de objeto
        'Content-Type': 'application/json'
      }
    };

    //Fazer a requisição parao servidor utilizando axios, indicando o metodo 
    //da requisição, o endereco, enviar os dados do formulario e o cabeçalho
    await axios.post('http://localhost:3000/usuario', data, headers)
      .then((response) => { //Acessa o then quando a API retornar status 200 
        //Atribuir a mensagen no state message
        //console.log(response.data.mensagem);
        setMessage(response.data.mensagem);
        // Limpar os dados do state e os dados dos campos do formulario
          setData({
            name: '',
            address: '',
            email: '',
            password: '',
            type_user: ''
          })
        }).catch((err) => { //acessao catch quando a API retornar erro
          //console.log(err.response.data.mensagem);
          if(err.response){
            setMessage(err.response.data.mensagem);
          }else{
            setMessage("Erro: Tente novamente mais tarde ou entre em contato com Zidane Furtado!");
          }
        });
    }

  return (
    <>
      <Head>
        <title>Sistema de gestão de hoteis</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
      <Link href={"./"}><button type="button">Listar</button> </Link>

       <h2>Cadastrar Usuario</h2>

       {message ? <p>{message}</p> : ""}

       <form onSubmit={addUser}>
        <label>Nome: </label>
        <input type="text" name="name" placeholder='Digite o nome' onChange={valueInput} value={data.name} /> <br/>
        <br/>
        <label>Address: </label>
        <input type="text" name="address" placeholder='Digite o endereco' onChange={valueInput} value={data.address} /> <br/>
        <br/>
        <label>E-mail: </label>
        <input type="email" name="email" placeholder='Digite o email' onChange={valueInput} value={data.email} /> <br/>
        <br/>
        <label>Password: </label>
        <input type="password" name="password" placeholder='Digite a palavra-passe' onChange={valueInput} value={data.password} /> <br/>
        <br/>
        <label>Type_user: </label>
        <input type="text" name="type_user" placeholder='Digite o tipo de usuario' onChange={valueInput} value={data.type_user} /> <br/>
        <br/>
        <button type="submit">Enviar</button><br/>
        <br/>
       </form>
      </main>
    </>
  )
}
