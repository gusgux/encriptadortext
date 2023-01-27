let rawtext = document.getElementById("input-text");
let outputText  = document.getElementById("output-text");
let btnCopy = document.getElementById("btn-copy");
let noteLeft = document.getElementById("text-moving");
let noteRight = document.getElementById("text-right");
let encodeInput = document.getElementById("btn-encode");
let decodeoutput = document.getElementById("btn-decode");
const code = ["enter","imes","ober","ai","ufat"];
const uncode = ["e","i","o","a","u"];


function encodeTex() {

    let text = rawtext.value.trim().replaceAll(/\s+/g," ");
    let decodeTex = outputText;

    

    if(isChecked(text)){
        decodeTex.value="";   
        noteLeft.className="";
        noteRight.style.display="none";
        btnCopy.style.display="flex";
        decodeTex.className="right-textarea";
        for (let i = 0; i<uncode.length; i++){

            text=text.replaceAll(uncode[i],code[i]);
            
        }
        decodeTex.value+=text;
    }else{
        text.value="";
        noteLeft.className="show";
        alert("solo minusculas sin acentos o simbolos");

    }
}

function decodeTxt(){
    let encodeTex = rawtext.value.trim().replaceAll(/\s+/g," ");
    let decodeTex = outputText;

    
    
    if (isChecked(encodeTex)) {
        decodeTex.value="";
        noteLeft.className=""; 
        noteRight.style.display="none";
        btnCopy.style.display="flex";
        decodeTex.className="right-textarea";
        for (let i = 0; i<uncode.length; i++){
        
            encodeTex=encodeTex.replaceAll(code[i],uncode[i]);
    
    
        }
        decodeTex.value=encodeTex;
    } else {
        decodeTex.value="";
        noteLeft.className="show";

        alert("solo minusculas sin acentos o simbolos");
    }

}

function copy(){
    let encodeTex = rawtext;
    let decodeTex = outputText;

    encodeTex.value="";
    decodeTex.select();
    document.execCommand('copy');
    encodeTex.value=decodeTex.value;
    alert("Copiado!");
}
function isChecked(text) {
    return  !/[^a-z\sñ]/.test(text);    
}


encodeInput.addEventListener("click",encodeTex);
decodeoutput.addEventListener("click",decodeTxt);
btnCopy.addEventListener("click",copy);


 