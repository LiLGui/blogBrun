let dataEndPage = new Date();
let menuMobile = document.getElementById('MenuRetratil');
const botao = document.getElementById('botao');
const iAlterado = document.getElementById('i_altera');
const contatoBotao = document.getElementById('contato');
const contatoToo = document.getElementById('contatoToo');
const send_buton = document.getElementById('send_buton');
const fechaView = document.getElementById('fechaView');
const view = document.getElementById('view')
const pause = document.getElementById('pause');
// send_buton.addEventListener('click', () =>{
//     alert("Dados Foram enviados com sucesso.");
// })

document.getElementById("Date").innerText = dataEndPage.getFullYear();
function abre() {
    menuMobile.style.marginTop = "0px";
    botao.setAttribute("onclick", "fecha()");
}

function fecha() {
    menuMobile.style.marginTop = "-400px";
    botao.setAttribute("onclick", "abre()");
}

const closeContato = document.getElementById('close_contact');
closeContato.addEventListener('click', () => {
    document.getElementById('screen_contato').style.display = 'none'
})

contatoBotao.addEventListener('click', () => {
    document.getElementById('screen_contato').style.display = "block";
});


contatoToo.addEventListener('click', () => {
    document.getElementById('screen_contato').style.display = "block";
})



const lista = {
    LinkVideo01: '<iframe src="https://www.youtube.com/embed/rtAWPMLYMpQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    TitleVideo01: "Brazil’s Lula da Silva, explained",
    DescriptionVideo01: "On October 2, 2022, Brazilians voted in the first round of their presidential election. The top two finishers were current president Jair Bolsonaro and former president Luiz Inácio Lula da Silva. Both candidates will face each other in a run-off on October 30. Lula is considered likely to win. ",

    LinkVideo02: '<iframe src="https://www.youtube.com/embed/njqQyuLgIlo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    TitleVideo02: "Title Video 02",
    DescriptionVideo02: "Video02 Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptate aspernatur earum nostrum laboriosam eum iure unde magnam aperiam animi!",

    LinkVideo03: '<iframe src="https://www.youtube.com/embed/c-LkldUmW64" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    TitleVideo03: "Title Video 03",
    DescriptionVideo03: "Video03 Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptate aspernatur earum nostrum laboriosam eum iure unde magnam aperiam animi!",

    LinkVideo04: '<iframe src="https://www.youtube.com/embed/XiJLwdq6qTA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    TitleVideo04: "Glossário político: o que é ser comunista?",
    DescriptionVideo04: 'A "lista de novos comunistas" é atualizada quase diariamente nas redes sociais brasileiras: Rede Globo, Leonardo DiCaprio, Supremo Tribunal Federal, MBL, The Economist, Bill Gates'
}

const title_video = document.getElementById('title_video');
const descption_video = document.getElementById('descption_video');
const LinkVideo = document.getElementById('linkVideo');








function OpenView(valu) {
    view.style.display = "flex";
    switch (valu){
        case 1:
            title_video.innerText = lista.TitleVideo01;
            descption_video.innerText = lista.DescriptionVideo01;
            LinkVideo.innerHTML = lista.LinkVideo01;
            break
        case 2:
            title_video.innerText = lista.TitleVideo02;
            descption_video.innerText = lista.DescriptionVideo02;
            LinkVideo.innerHTML = lista.LinkVideo02;
            break
        case 3:
            title_video.innerText = lista.TitleVideo03;
            descption_video.innerText = lista.DescriptionVideo03;
            LinkVideo.innerHTML = lista.LinkVideo03;
            break
        case 4: 
            title_video.innerText = lista.TitleVideo04;
            descption_video.innerText = lista.DescriptionVideo04;
            LinkVideo.innerHTML = lista.LinkVideo04;
            break
    }
}

fechaView.addEventListener('click', () => {
    view.style.display = "none";
    pause.setAttribute('class', "embed off");
})