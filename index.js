let contador = document.getElementsByClassName("contador-de-negoes")[0];

onload = (event) => {
    console.log(Date.now())
    contador.innerText = Math.floor((Date.now() - 1693359064026) / 60000) + " negoes"
};