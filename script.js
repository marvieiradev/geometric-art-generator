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

const boxes = document.querySelectorAll(".container div");

//Função para gerar as formas geometricas aleatoriamente
let generatePattern = () => {
    boxes.forEach((box) => {
        box.className = "";
        let i = Math.floor(Math.random() * shapes.length);
        let j = Math.floor(Math.random() * colors.length);
        box.classList.add(shapes[i]);
        box.style.backgroundColor = colors[j];
    })
}

//Função para fazer download / salvar a imagem
function downloadImage(imageName) {
    var container = document.querySelector(".container");
    html2canvas(container, { allowTaint: true }).then(function (canvas) {
        var link = document.createElement("a");
        document.body.appendChild(link);
        link.download = imageName;
        link.href = canvas.toDataURL();
        link.target = "_blank";
        link.click();
    });
}

btnDownload.addEventListener("click", () => {
    downloadImage('geometric-image.png');
})

//Gera a imagem
btnGenerate.addEventListener("click", generatePattern);
window.addEventListener("load", generatePattern);


