import axios from 'axios'


const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function NovaConsulta(nome, nascimento, cpf, horario, data, preco, contato, id) {
    const resposta = await api.post('/usuario/marcar', {
        
        nome: nome,
        cpf: cpf,
        nascimento: nascimento,
        preco: preco,
        data: data,
        horario: horario,  
        contato: contato,
        id: id
        })

    return resposta.data;
}

export async function alterarConsulta(consulta, nome, nascimento, cpf, horario, data, preco, contato, id) {
    const resposta = await api.put(`/alterarConsulta/${consulta}`, {
        
        nome: nome,
        cpf: cpf,
        nascimento: nascimento,
        preco: preco,
        data: data,
        horario: horario,  
        contato: contato,
        id: id
        })

    return resposta.data;
}


export async function ConsultarMarcadas() {
    const resposta = await api.get('/consultarMarcadas');
    return resposta.data;
}
 ////////////////////Adicionadas depois////////////////////////////////
export async function ConsultarArquivadas() {
    const resposta = await api.get('/consultarArquivadas');
    return resposta.data;
}

export async function FiltrarArquivadasPorCPF(cpf) {
    const resposta = await api.get(`/filtrarArquivadasPorCPF?cpf=${cpf}`);
    return resposta.data;
}
//////////////////////////////////////////////////////////////////////
export async function FiltrarPorCPF(cpf) {
    const resposta = await api.get(`/filtrarPorCPF?cpf=${cpf}`);
    return resposta.data;
}

export async function removerConsulta(consulta) {
    const resp = await api.delete(`/deletarConsulta/${consulta}`);
    return resp.status;
}

export async function buscarPorConsulta(consulta) {
    const resposta = await api.get(`/consulta/${consulta}`);
    return resposta.data;
}

export async function incluirAnotacoes(consulta, anotacoes) {
    const resposta = await api.put(`/incluirAnotacoes/${consulta}`, {
        anotacoes : anotacoes
    })
    return resposta.data;
}