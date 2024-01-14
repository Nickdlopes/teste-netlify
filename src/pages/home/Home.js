import "./Home.scss";
import "../../index.scss"

import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="page-home">
      <header>
        <img src="/images/logo-hori.png" alt="" />

        <Link className="buttons" to="/login">
          Área administrativa
        </Link>
      </header>
      <div></div>

      <section className="content">
        <div className="content-container1" style={ {backgroundImage: 'url(/woman-ct1.jpg)'} }>
          <div className="container1-espacamento">
            <p className="espacamento-text">
              “Uma vida sem pensamento é possível, mas ela fracassa em fazer
              desabrochar sua própria essência – ela não é apenas sem sentido,
              ela não é totalmente viva” 
               (Hannah Arendt)
            </p>
          </div>
        </div>

        <div className="content-container2">
          <img src="/images/Psico-logo.jpg" alt="" />

          <p className="ct2-text">
          Fisioterapia é uma ciência da saúde aplicada ao estudo, diagnóstico, prevenção e tratamento de disfunções cinéticas funcionais de órgãos e sistemas. Ela estuda, diagnostica, previne e trata os distúrbios, entre outros, cinético-funcionais (da biomecânica e funcionalidade humana) decorrentes de alterações de órgãos e sistemas humanos.
          </p>
        </div>

        <div className="content-container3">
          <div className="boxes">
            <h2>
              O que é
              Fisioterapia?
            </h2>
            <p>
            Fisioterapia é uma ciência da saúde aplicada ao estudo, diagnóstico, prevenção e tratamento de disfunções cinéticas funcionais de órgãos e sistemas. Ela estuda, diagnostica, previne e trata os distúrbios, entre outros, cinético-funcionais decorrentes de alterações de órgãos e sistemas humanos.
            </p>
          </div>

          <div className="boxes">
            <h2>
              Para que serve a
              Fisioterapia?
            </h2>
            <p>
            Ela é amplamente utilizada para tratar lesões musculoesqueléticas, distúrbios neurológicos, respiratórios e cardíacos, por exemplo. Mas sempre visando melhorar a função física, aliviar a dor, restaurar a mobilidade e otimizar a qualidade de vida dos pacientes.
            </p>
          </div>

          <div className="boxes">
            <h2>
              Quando ir
              ao fisioterapeuta?
            </h2>
            <p>
            Vale ressaltar que o fisioterapeuta pode ser requerido não só para tratar alguma condição, como também para prevenir lesões, fraturas e outros problemas. Como você pode perceber, a fisioterapia é uma área ampla, que oferece muitas possibilidades de tratamento para diversos problemas.
            </p>
          </div>
        </div>

        <div className="content-container4">
          <img className="visible-xs" src="/images/psicologa.png" />
          <img className="ct4-psicologo" src="/images/zyro-image.png" alt=""/>

          <div className="container4-text">
            <h1>Sobre mim</h1>
            <p>
              Trabalho com a abordagem sistêmica, que me permite olhar para o
              indivíduo como fruto de suas relações onde está inserido, buscando
              compreender os sistemas, sejam eles familiares, entre amigos,
              relacionamentos amorosos ou empregatícios.
              <p>Estou aqui para juntos construirmos um vínculo onde será permitido
              que o sujeito compreenda e administre melhor os seus conflitos,
              sentimentos, emoções e comportamentos.</p>
              <p>Esse caminho faz parte do meu trabalho enquanto profissional da
              psicologia, me proporcionando realização em poder acolher o
              sofrimento do outro e ir em busca de novas possibilidades e
              significados na sua vida.</p>
            </p>
          </div>
        </div>

        <div className="content-container5">
          <h3>
            Depoimentos
          </h3>

          <h2>
            Opinião dos pacientes
          </h2>

          <div className="container5-texts">
            <div className="container5-text1">
              <div></div>

              <p>
                “Profissional competente, objetivo, dedicado, demonstrando
                sempre que gosta muito de sua profissão.”
                <p className="depoimento" >(Priscila Vianna)</p>
              </p>

              
              <div></div>
              <p>
                “Excelente Profissional, excelente pessoa, excelente espaço de
                atendimento, eu recomendo, com muita
                segurança.” 
                <p className="depoimento" >(Vitória Gonçalvez)</p>
              </p>
            </div>

            <div className="container5-text1">
            <div></div>  

              <p>
                “Experiência muito agradável, profissional dedicado e muito
                focado no trabalho, eu recomendo.”
                <p className="depoimento" >(Juliano Pistori)</p>
              </p>

              <div></div>

              <p>
                “Experiência única, super recomendo, profissional excelente
                super atencioso e o ambiente é aconchegante”
                <p className="depoimento">(Monique Pimenta)</p>
              </p>
            </div>
          </div>
        </div>


      </section>
      <footer>
          <div className="footer">
            <div className="footer-container2">
              <img className="logos" src="/images/logo-hori.png" alt="" />
              <p>CRP: 02/22222</p>
            </div>

            <div className="footer-container3">
              <p>(11) 99999-9999</p>
              <p>(11) 5555-5555</p>
              <p>@roses.dra_dri</p>
              <p>adripsicologa@marcarconsulta.com</p>
            </div>

            <div className="footer-container3">
              <p>Av. Leôncio de Magalhães, 1004, conj. 95, 9o andar - Jardim São
              Paulo - São Paulo -SP - 02042-001 - (ao lado do metrô Jd. São Paulo)</p>
              
              <p>Zona Norte | proximidades: Tucuruvi, Parada Inglesa, Santana,
              Imirim, Casa Verde, Mandaqui.</p>
            </div>
          </div>
        </footer>
    </main>
  );
}

export default Home;
