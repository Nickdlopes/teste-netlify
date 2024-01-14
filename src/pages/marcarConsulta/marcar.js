import "./marcar.scss";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Storage from 'local-storage'
import { useEffect, useState } from "react";
import { NovaConsulta, alterarConsulta, buscarPorConsulta } from "../../api/consultaApi";
import { useParams } from 'react-router-dom'
import InputMask from 'react-input-mask'

function Mark() {

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [nascimento, setNascimento] = useState(0);
  const [preco, setPreco] = useState(0);
  const [data, setData] = useState(0);
  const [horario, setHorario] = useState(0);
  const [contato, setContato] = useState('');
  const [consulta, setConsulta] = useState(0);

  const { consultaParam } = useParams();

  useEffect(() => {
    if (consultaParam) {
      carregarConsulta();
    }
  }, [])

  async function carregarConsulta() {
    const resposta = await buscarPorConsulta(consultaParam);
    setNome(resposta.nome);
    setCpf(resposta.cpf);
    setNascimento(resposta.nascimento.substr(0, 10));
    setPreco(resposta.preco);
    setData(resposta.data.substr(0, 10));
    setHorario(resposta.horario);
    setContato(resposta.contato);
    setConsulta(resposta.consulta);
  }

  async function marcarClick() {
    try {
      const usuario = Storage('usuario-logado').id;

      // let idConsulta = 0;

      if (consulta === 0) {
        const r = await NovaConsulta(nome, nascimento, cpf, horario, data, preco, contato, usuario);

        setConsulta(r.consulta);
        toast('Nova consulta marcada com sucesso.');
      }
      else {
        await alterarConsulta(consulta, nome, nascimento, cpf, horario, data, preco, contato, usuario);
        toast('Consulta alterada com sucesso.');
      }



      
    } catch (err) {
      console.log(err);
      toast(err.response.data.erro);
    }
  }

  function novoClick() {
    setConsulta(0);
    setNome('');
    setNascimento(0);
    setCpf('');
    setHorario(0);
    setData(0);
    setPreco(0);
    setContato('');
  }

  return (
    <main className="page-mark">
      <ToastContainer />
      <div className="info">
        <h1 className="h1" style={{ color: " font-size: 2.3em; font-family: 'Quicksand', sans-serif;" }}>
          MARCAR CONSULTA
        </h1>

        <div className="registro">
          <div className="nome-paciente">
            <label for="">Nome do paciente</label>
            <input
              type="text"
              placeholder="Ex: Urias Conceição da Silva"
              value={nome} onChange={e => setNome(e.target.value)}
            />
          </div>
          <div className="formulario-1">
            <div className="paciente">
              <label for="">Data de nascimento</label>
              <input type="date" value={nascimento} onChange={e => setNascimento(e.target.value)}
              />
            </div>
            <div className="paciente">
              <label for="">CPF do paciente</label>
              <InputMask mask="999.999.999-99" type="text" value={cpf} onChange={e => setCpf(e.target.value)}
              />
            </div>
          </div>
          <div className="formulario-2">
            <div className="paciente">
              <label for="">Horário</label>
              <input type="time" value={horario} onChange={e => setHorario(e.target.value)}
              />
            </div>
            <div className="paciente">
              <label for="">Data de consulta</label>
              <input type="date" value={data} onChange={e => setData(e.target.value)}
              />
            </div>
          </div>
          <div className="formulario-3">
            <div className="paciente">
              <label for="">Preço</label>
              <input type="number" value={preco} onChange={e => setPreco(e.target.value)}
              />
            </div>
            <div className="paciente">
              <label for="">Contato</label>
              <input type="text" value={contato} onChange={e => setContato(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="botoes">
          <button onClick={marcarClick} className="a" to="/marcadas">{consulta === 0 ? 'Marcar' : 'Alterar'} </button> &nbsp; &nbsp;
          <button onClick={novoClick} className="a">Novo</button>
        </div>
        <Link className="a1" to="/marcadas">Voltar</Link>
      </div>
    </main>
  );
}

export default Mark;