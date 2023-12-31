const btnGenerate = document.getElementById("btn");
const btnDownload = document.getElementById("download");
const image = document.querySelector(".container")
const canvas = document.querySelector(".canvas")

//Formas que podem ser geradas
const shapes = [
    "quad-circle-1",
    "quad-circle-2",
    "quad-circle-3",
    "quad-circle-4",
    "triangle-1",
    "triangle-2",
    "triangle-3",
    "triangle-4",
    "circle"
];

//Cores disponíveis para as formas
const colors = [
    "#01d2fd",
    "#ffc700",
    "#fe9f12",
    "#06d8c7",
    "#66ff66",
    "#33ff33"
];

//Cores disponíveis para o fundo da imagem
const bgcolors = [
    "#171717",
    "#0B0E39",
    "#00021A",
    "#0A0A0A",
    "#000000"
];

const boxes = document.querySelectorAll(".container div");

//Função para gerar as formas geometricas aleatoriamente
let generatePattern = () => {
    boxes.forEach((box) => {
        box.className = "";
        let i = Math.floor(Math.random() * shapes.length);
        let j = Math.floor(Math.random() * colors.length);
        let k = Math.floor(Math.random() * bgcolors.length);
        box.classList.add(shapes[i]);
        box.style.backgroundColor = colors[j];
        image.style.backgroundColor = bgcolors[k];
    })
}

//Função para fazer download / salvar a imagem usando a biblioteca "DomToImage"
function downloadImage(imageName) {
    domtoimage.toJpeg(document.querySelector('.container'),
        { quality: 0.99 },
        { style: "transform:(scale(50,50))" })
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = imageName;
            link.href = dataUrl;
            link.click();
        });
}

btnDownload.addEventListener("click", () => {
    downloadImage('geometric-image.jpg');
})

//Gera a imagem
btnGenerate.addEventListener("click", generatePattern);
window.addEventListener("load", generatePattern);


