function loading() {
    const carregamento = document.querySelector('#loading')
    const container = document.querySelector('main')
        setTimeout(() => {
            carregamento.style.display = 'none'
            container.style.display = 'flex'

        }, 3000)
}

loading();


const entrar = document.getElementById('entrar')
    entrar.addEventListener('click', ()=> {
  const login = document.getElementById('login');
const senha = document.getElementById('senha');

    if(login.value == 'chunin' || senha.value == '1234') {
        alert('Login autorizado')

        document.getElementById('formulario').style.display = 'none'
        document.querySelector('section').style.display = 'flex'
            document.querySelector('section').style.transform = 'scale(1)'



    } else {
        alert('Usuario não registrado')
    }
    })

    tippy('#copiar', {
  content: "Copiar",
});

const search = document.getElementById('search')
    search.addEventListener('click', () =>{



        let cep = document.getElementById('ceep').value

        if(cep.length == 0){
            alert('Digite um CEP válido')
            return;
        }

        let api = `https://brasilapi.com.br/api/cep/v1/${cep}`

            fetch(api)
                .then(response => {
                    return response.json();
                })
                    .then(data => {
                      const a =  document.getElementById('cepres').innerHTML = data.cep;
                      const b =  document.getElementById('estadores').innerHTML = data.state;
                      const c =   document.getElementById('cidaderes').innerHTML = data.city;
                      const d =   document.getElementById('bairrores').innerHTML = data.neighborhood;
                      const e =  document.getElementById('ruares').innerHTML = data.street;
                    })

                    document.querySelector('#copiar').style.display = 'flex'
                    document.querySelector('#ressss').style.display = 'flex'
                    
    })

    

    let btn = document.querySelector('#copiar')
        btn.addEventListener('click', ()=> {
            const texto = `Função ilustrativa, os dados não serão copiados por questão de segurança.`
    
    // Copia o texto para a área de transferência
    navigator.clipboard.writeText(texto)
            alert('Copiado com Sucesso')
        })