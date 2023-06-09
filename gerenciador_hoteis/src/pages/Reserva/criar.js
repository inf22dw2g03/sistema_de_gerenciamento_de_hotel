import Head from 'next/head';
import { useState } from 'react';
//Biblioteca para conectar com a api
import axios from 'axios';
import Link from 'next/link';

export default function Criar() {
  
  //Declarar uma nova variavel dados com state e atribuir o objeto
  const [data, setData] = useState({
    data_check_in: '',
    data_check_out: '',
    numero_pessoas: '',
    numero_quarto: '',
    preco: '',
    status_reserva: ''
  });

  //Declarar a variavel para receber a mensagen
  const [message, setMessage] = useState("");

  //Receber os dados dos campos do formulario
  const valueInput = (e) => setData({ ...data, [e.target.name]: e.target.value});
  
  //Executar a função quando o usuario clicar no botão do formulario
  const addReserva = async (e) => {

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
    await axios.post('http://localhost:3000/reserva', data, headers)
      .then((response) => { //Acessa o then quando a API retornar status 200 
        //Atribuir a mensagen no state message
        //console.log(response.data.mensagem);
        setMessage(response.data.mensagem);
        // Limpar os dados do state e os dados dos campos do formulario
          setData({
            data_check_in: '',
            data_check_out: '',
            numero_pessoas: '',
            numero_quarto: '',
            preco: '',
            status_reserva: ''
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
      <Link href={"./listar_reserva"}><button type="button">Listar</button> </Link>

       <h2>Criar Reserva</h2>

       {message ? <p>{message}</p> : ""}

       <form onSubmit={addReserva}>
        <label>Numero de Pessoas: </label>
        <input type="text" name="numero_pessoas" placeholder='Digite o numero de pessoas' onChange={valueInput} value={data.numero_pessoas} /> <br/>
        <br/>
        <label>Numero de Quarto: </label>
        <input type="text" name="numero_quarto" placeholder='Digite o numero de quarto' onChange={valueInput} value={data.numero_quarto} /> <br/>
        <br/>
        <label>Preço: </label>
        <input type="text" name="preco" placeholder='Digite o preço' onChange={valueInput} value={data.preco} /> <br/>
        <br/>
        <label>Estado da Reserva: </label>
        <input type="text" name="status_reserva" placeholder='Digite o estado da reserva' onChange={valueInput} value={data.status_reserva} /> <br/>
        <br/>
        <button type="submit">Enviar</button><br/>
        <br/>
       </form>
      </main>
    </>
  )
}
