import { login } from '../../api/usuarioApi'


import "./Login.scss";
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";

import Storage from 'local-storage'
import LoadingBar from 'react-top-loading-bar'
import { useState, useRef, useEffect } from "react";
export default function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  const navigate = useNavigate();
  const ref = useRef();

  useEffect(() => {
    if(Storage('usuario-logado')) {
      navigate('/marcadas');
    }
  }, [])

  async function entrarClick() {
    
    ref.current.continuousStart();
    setCarregando(true);
    
    try {
      const r = await login (email, senha);
      Storage('usuario-logado', r);

      setTimeout(() => {
        navigate('/marcadas');
      }, 3000)

    }
    catch (err) {
      ref.current.complete();
      setCarregando(false);
      if (err.response.status === 401) {
        setErro(err.response.data.erro);
      }
    }

  }

  document.addEventListener("keypress", function  (e) {
    if(e.key === "Enter"){
        const btn = document.querySelector("#send");
        btn.click();
    }
  })
  


  return (
    <main className="page-login">
         
      <LoadingBar color='#2E939C' ref={ref} />
      <section>

        <Link to="/" className="button-return">
          <p>Página Inicial</p>
        </Link>

        <img src="/images/logo-tela-login.png" className="logo-login" alt="logo-login" />

        <div className='nao-autorizado'>
          {erro}
        </div>
        <div className="login-psicologo">
          <label for="email">
            <b>E-mail:</b>
          </label>

          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="text"
            placeholder="email-psi@hotmail.com"
            name="email"
            required
          />

          <label for="psw">
            <b>Palavra-passe</b>
          </label>

          <input value={senha}
            onChange={e => setSenha(e.target.value)}
            type="password" placeholder="Senha" name="senha" required />

          <button onClick={entrarClick} disabled={carregando} type="submit" id="send" className="button-submit">
            Entrar
          </button>

        </div>
      </section>
    </main>
  );
}
