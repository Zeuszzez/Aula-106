//https://teachablemachine.withgoogle.com/models/L89qIzlld/

function Iniciar(){
    navigator.mediaDevices.getUserMedia({
        audio: true
    })
    classFier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/L89qIzlld/model.json", acessarModelo)
}

function acessarModelo(){
    classFier.classify(obterResultados)
}

function obterResultados(error, results){
    console.log("funcaoObterResultadosAcionada")
}