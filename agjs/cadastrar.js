/convertendo o texto e adicionando em tela;
function converterParaDomElement(str) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(str, 'text/html');
    return doc.body;
  };
  
  //pegando os dados do formulário
  async function CapturarDadosPessoa(){
    let nome = document.querySelector('#nome').value;  
    console.log(nome);
    let cpf = document.querySelector('#cpf').value;  
    console.log(cpf);
    let dataNascimento = document.querySelector('#dataNascimento').value;  
    console.log(dataNascimento);
    let telefone = document.querySelector('#telefone').value;  
    console.log(telefone);
    let rua = document.querySelector('#rua').value;  
    console.log(rua);
    let numero = document.querySelector('#numero').value;  
    console.log(numero);
    let cidade = document.querySelector('#cidade').value;  
    console.log(cidade);
    let bairro = document.querySelector('#bairro').value;  
    console.log(bairro);
    let referencia = document.querySelector('#referencia').value;  
    console.log(referencia);
    
    let cliente = {
      nome,
      cpf,
      dataNascimento,
      telefone,
      rua,
      numero,
      cidade,
      bairro,
      referencia
    };
    let SalvarClienteModel = {
      cliente
    };
  
    console.log(SalvarClienteModel);
  
    let response = await EnviarApi(SalvarClienteModel);
    console.log(response);
  }
  
  //função para fazer uma request na api;
  async function EnviarApi(viewmodel){
    
    //opções/dados para fazer a request;
    const options = {
      //método, se é um post, get etc..
      method: 'POST',
      headers:{'content-type':'application/json'},
      //converte o objeto em um Json real;
      body: JSON.stringify(viewmodel) 
    };
  
    //TODO: mudar a url para o seu localhost.
    const req =  await fetch('https://localhost:44345/cliente/salvar2', options)
    //caso a request dê certo, retornará a resposta;
      .then(response => {      
          response.text()
          .then(data=>  {
            console.log(data);
            return data;
          });
      }) 
    //caso dê erro, irá retornar o erro e mostrar no console
      .catch(erro => {
          console.log(erro);
          return erro;
      });
  
      return req;
  }