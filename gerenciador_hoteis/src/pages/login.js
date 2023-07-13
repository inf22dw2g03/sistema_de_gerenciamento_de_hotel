import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import {useRouter} from 'next/router';

 

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

 

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password,
      });

 

      const { token } = response.data;
      // Aqui você pode salvar o token em algum lugar (ex: local storage) para usar nas próximas requisições
      localStorage.setItem('token', token);
      console.log(token);
      // Exemplo de redirecionamento após o login
      router.push('/');
      const token1 = localStorage.getItem('token');
      console.log(token1);
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.mensagem);
      } else {
        setMessage("Erro: Tente novamente mais tarde!");
      }
    }
  }

 

  return (
<div>
<Link href={"/"}><button type="button">Listar</button> </Link>
<h2>Login</h2>

 

      {message && <p>{message}</p>}

 

      <label>
        Email:
<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
</label>

 

      <label>
        Password:
<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
</label>

 

      <button onClick={handleLogin}>Login</button>
</div>
  );
}