import "./arquivadas.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Storage from 'local-storage'
import { useEffect, useState } from "react";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { ConsultarArquivadas, FiltrarArquivadasPorCPF } from "../../api/consultaApi";


export default function Archived() {
  const [consultas, setConsultas] = useState([]);
  const [filtro, setFiltro] = useState('');

  const navigate = useNavigate();


    useEffect(() => {
      if (!Storage('usuario-logado')) {
          navigate('/');  
      } 
     
    }, [])

    function  sairClick () {
        Storage.remove('usuario-logado');
        navigate('/login');
    }

    async function filtrar() {
      const resp = await FiltrarArquivadasPorCPF(filtro)
      setConsultas(resp);
    }

    async function ConsultarTodasArquivadas() {
      const resp = await ConsultarArquivadas();
      setConsultas(resp);
    }

    useEffect(() => {
      ConsultarTodasArquivadas();
    }, [])
  
  return (


    <main className="page-archived">
      <div className="mae">
        <header className="menu">
          <Link to="/">
           
          <img
            className="logos"
            src="/images/logo-hori.png"
            alt=""
          />
          
          </Link>
          <Link className="buttons" to="/marcadas">
            Marcadas
          </Link>

          <Link className="buttons" to="/marcar">
            Marcar Consulta
          </Link>

          <button  onClick={sairClick} className="buttons" to="/">
          <img src="/images/logout.png" style={ {width: "1.2em"} }
            /> &nbsp; Sair
          </button>
        </header>

        <div className="info">
          <div className="pesquisa">
            <div className="pesquisa-elements">
              <input type="text" placeholder="Pesquisar consulta (CPF)"  value={filtro} onChange={e => setFiltro(e.target.value)}/>
              <img className="lupa" src = '/images/icone-loupe-gris.png' onClick={filtrar}/>
            </div>
          </div>
          <div className="arquivadas">
            <h2>Consultas Arquivadas</h2>

              {consultas.map(item => 
                <Link className="azulzin" to={`/anotacoes/${item.consulta}`}>
                <div>
                  <p>{item.nome}</p>
                  <p>{item.cpf}</p>
                </div>
                <div>
                  <p>Data: {item.data.substr(0, 10)}</p>
                  <p>Horário: {item.horario.substr(0, 5)}</p>
                </div>
                </Link>
              )}

          </div>
        </div>
        <footer className="rodape">
          <img
            className="logos"
            src="/images/logo-hori.png"
            alt=""
          />
          <p>
            “Viva cada dia o seu mal e cada dia como se fosse o último,
            aproveite cada sorriso, cada momento pois eles passam e só nos resta
            lembranças.”
          </p>
        </footer>
      </div>
    </main>
  );
}
