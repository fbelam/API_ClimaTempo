const bodyHTML = document.querySelector("body");

var temperatura;

const obterTemp = () =>{

    let chave = '777fd6c175f16899b669ab9b22be7638'

    let valorinput = document.getElementById('cidade').value;

    console.log(valorinput)

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${valorinput}&lang=pt_br&appid=${chave}&units=metric`

    fetch(url)
        .then(resposta =>{
          // console.log(resposta)
          return resposta.json()
        })
          .then(dados =>{
            console.log(dados)

            

            let temperatura = dados.main.temp;

            let novoh1 = document.createElement("h1");
            novoh1.innerText = `Está é a temperatura ${temperatura}`;

            bodyHTML.appendChild(novoh1);


          })
          .catch(erro => {
            console.log(erro)
          })
        
 }