import Head from 'next/head';
import { useEffect, useState } from 'react';
//Biblioteca para conectar com a api
import axios from 'axios';
import Link from 'next/link';
import { serviceDelete } from './service/serviceDelete';

export default function Home() {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');


  const fetchUsuarios = async () => {
    try {
      const response = await axios.get('http://localhost:3000/reserva', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      setData(response.data.reserva);
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.mensagem);
      } else {
        setMessage("Erro: Tente novamente mais tarde!");
      }
    }
  };
  useEffect(() => {
    fetchUsuarios();
  }, []);

  const deleteUser = async (reservaid) => {
    console.log(reservaid);
    const response = await serviceDelete('http://localhost:3000/reserva/' + reservaid);
    setMessage(response);
    fetchUsuarios();
  };

  return (
    <>
      <Head>
        <title>Sistema de gestão de hoteis</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Link href={"/cadastrar"}><button type="button">Cadastrar</button> </Link>
        <Link href={"/login"}><button type="button">Login</button> </Link>
        <Link href={"/"}><button type="button">usuario</button> </Link>
        <Link href={"/listar_hotel"}><button type="button">hotel</button> </Link>
        <Link href={"/listar_quartos"}><button type="button">quartos</button> </Link>
        <Link href={"/listar_reserva"}><button type="button">reserva</button> </Link>
        <h2>Listar reservas</h2>

        {message ? <p>{message}</p> : ""}
        {data.map(reserva => (
          <div key={reserva.id}>
            <span>ID: {reserva.id}</span><br />
            <span>data_check_in: {reserva.data_check_in}</span><br />
            <span>data_check_out: {reserva.data_check_out}</span><br />
            <span>numero_pessoas: {reserva.numero_pessoas}</span><br />
            <span>numero_quarto: {reserva.numero_quarto}</span><br />
            <span>preco: {reserva.preco}</span><br />
            <span>status_reserva: {reserva.status_reserva}</span><br />
            <Link href={`/visualizar/${reserva.id}`}> <button type="button">Visualizar</button></Link>{" "}
            <Link href={`/editar/${reserva.id}`}> <button type="button">Editar</button></Link>{" "}
            <button type="button" onClick={()=> deleteUser(reserva.id)}>Apagar</button>{" "}
            <hr />
          </div>
        ))}

        <br />
        <br />
        <br />
        <br />
      </main>
    </>
  )
}
