import "./marcadas.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Storage from 'local-storage'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { FiltrarPorCPF, ConsultarMarcadas, removerConsulta} from '../../api/consultaApi'





export default function Scheduled() {


    const [filtro, setFiltro] = useState('');
    const [consultas, setConsultas] = useState([]);
    
   

    function editarConsulta(consulta) {
        navigate(`/alterar/${consulta}`);
    }

    async function removerConsultaClick(consulta, nome) {

      confirmAlert({
          title:'Remover agendamento',
          message:`Deseja remover o agendamento de ${nome} ?`,
          buttons:[
              {
                  label:'Sim',
                  onClick: async () => {
              const resposta = await removerConsulta(consulta, nome);
                  if(filtro  === '')
                            carregarTodasConsultas();
                  else
                          filtrar();
                                  toast.success('Agendamento removido com sucesso')
                  }
                  
              },
              {
                  label:'Não'
              }
          ]
      })
  }

    async function filtrar() {
      const resp = await FiltrarPorCPF(filtro);
      setConsultas(resp);
    }
    async function carregarTodasConsultas() {
      const resp = await ConsultarMarcadas();
      
      setConsultas(resp);
    }

  
    const navigate = useNavigate();
    
    

    useEffect(() => {
      carregarTodasConsultas();
      if (!Storage('usuario-logado')) {
          navigate('/');  
      }
    
    }, [])

    function  sairClick () {
        Storage.remove('usuario-logado');
        navigate('/login');
    }

    document.addEventListener("keypress", function  (e) {
      if(e.key === "Enter"){
          const btn = document.querySelector("#send");
          btn.click();
      }
  })


  return (
    <main className="page-scheduled">
      <ToastContainer />
      <section className="mae">
        <header className="menu">
          <Link to="/">
          <img
            className="logos"
            src="/images/logo-hori.png"
            alt=""
          />
        
          </Link>
          <Link className="buttons" to="/arquivadas">
            Arquivadas
          </Link>

          <Link className="buttons" to="/marcar">
            Marcar Consulta
          </Link>

          <button onClick={sairClick} className="buttons" to="/">
            <img src="/images/logout.png" style={{ width: "1.2em" }}
            /> &nbsp; Sair
          </button>
        </header>

        <div className="info">
          <div className="pesquisa">
            <div className="pesquisa-elements">
              <input type="text" placeholder="Pesquisar consulta (CPF)"  value = {filtro} onChange={e => setFiltro(e.target.value)}/>
              <img className="lupa" src = '/images/icone-loupe-gris.png' type="submit" id="send"  onClick={filtrar}/>
            </div>
          </div>
          <div className="marcadas">
            <h2>Consultas Marcadas</h2>

            {consultas.map(item => 
              <div className="azulzin" >
              <div>
                <p>{item.nome}</p>
                <p>CPF : {item.cpf}</p>
              </div>
              <div>
                <p>Data: {item.data.substr(0,10)}</p>
                <p>Horário : {item.horario.substr(0,5)}</p>
              </div>
              <div className="icons">
                
                  
                  <img src="/images/edit.png" className="icones"
                    alt="editar" onClick={() => editarConsulta(item.consulta)} />
                
                
                  
                  <img src="/images/trash.png" className="icones"
                    alt="remover" onClick={() => removerConsultaClick(item.consulta, item.nome)} />
                
              </div>
            </div>
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
      </section>
    </main>
  );
}
