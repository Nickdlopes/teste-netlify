import "./Notes.scss";
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';   
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from "react-router-dom";  
import { useEffect, useState } from "react";
import { buscarPorConsulta, incluirAnotacoes } from '../../api/consultaApi'
 
export default function Notes() {

  const [arquivada, setArquivada] = useState({});
  const [anotacoes, setAnotacoes] = useState('');
 
 
  const { consultaParam } = useParams();
 
  useEffect(() => {
    CarregarArquivada(); 
  }, []);
 
    async function CarregarArquivada () {
        const resposta = await buscarPorConsulta(consultaParam);
        
        setAnotacoes(resposta.anotacoes);
        setArquivada(resposta);
    }


    async function concluirClick() {
      try {
          const r = await incluirAnotacoes(consultaParam, anotacoes)
          setAnotacoes(r.anotacoes);
        
          toast('Anotação concluída.');
      } catch (err) {
          toast(err.response.data.erro);
      }
    }
  return (
    <main className="page-notes">
       <ToastContainer />
      <header className="menu">
        <Link to = "/">
        <img className="logos"src="/images/logo-hori.jpg"
        alt="logo"/>
        </Link>
        <Link className="a" to="/arquivadas">Voltar</Link>
      </header>

      <div className="info">
        <div className="branquin">
          <div className="text">
            <p>{arquivada.nome}</p>
            <p>Data de nascimento:{String(arquivada.data).substr(0,10)}</p>
          </div>
          <div className="text">
            <p>CPF:{arquivada.cpf}</p>
            <p>Data: {String(arquivada.data).substr(0,10)}</p>
          </div>
        </div>

        <div className="anotacoes">
          <h1 style={{color: "#2F5457; margin: 0px;"}}>Anotações</h1>

          <textarea name="" id="" cols="30" rows="13" value={anotacoes} onChange={e => setAnotacoes(e.target.value)}></textarea>
        </div>

        <div className="button">
          <button className="a" onClick={concluirClick}>
            Concluir
          </button>
        </div>
      </div>

      <footer className="rodape">
        <img
            className="logos"
           src="/images/logo-hori.jpg"
          alt="logo"
        />
        <p style={{width: "42em; text-align: center;"}}>
          “Viva cada dia o seu mal e cada dia como se fosse o último, aproveite
          cada sorriso, cada momento pois eles passam e só nos resta
          lembranças.”
        </p>
      </footer>
    </main>
  );
}
