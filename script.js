const textArea = document.querySelector(".text-area");
const mensajeFinal = document.querySelector(".mensaje");
const copiar = document.querySelector(".btn-copiar");
const fotoMuñeco = document.querySelector(".muñeco");
const derechaInformacion = document.querySelector(".derecha-informacion")
const derecha = document.querySelector(".derecha");








//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensajeFinal.value = textoEncriptado
    textArea.value = "";
} 


function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
         stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])  
        }
        fotoMuñeco.style.display = "none"  
        derechaInformacion.style.display = "none"
        copiar.style.display = "block"
        derecha.classList.add("ajustar");
        mensajeFinal.classList.add("ajustar");
        copiar.style.display = "block"
    }
    return stringEncriptada
}








function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensajeFinal.value = textoEncriptado
    textArea.value = "";
}




function desencriptar(stringDesencriptada){
    let matrizCodigo =[["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"],];
    


    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])  
        }
    }
    return stringDesencriptada
}
copiar.addEventListener("click", e => {
    let texto = mensajeFinal;
    texto.select();
    document.execCommand("copy")
})
