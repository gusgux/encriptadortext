

function encodeTex() {

    let text2Encode = document.getElementById("input-text").value;
    let text2Decode = document.getElementById("output-text");
    let btnCopy = document.getElementById("btn-copy");
    let txtInput = [];
    let txtEncode =[];
    const vowelCode = new Map();
    vowelCode.set("a","ai");
    vowelCode.set("e","enter");
    vowelCode.set("i","imes");
    vowelCode.set("o","ober");
    vowelCode.set("u","ufat");
    const code = ["enter","imes","ober","ufat","ai"];
    const uncode =["e","i","o","u","a"];

    
    text2Encode=text2Encode.trim().replaceAll(/\s+/g," ");
    
    //text2Encode=text2Encode.trim().split(/\s+/g);
    //text2Encode.forEach(value => txtInput.push(value.split("")));
    
    text2Decode.value="";   

    if(isChecked(text2Encode)){
        document.getElementById("text-right").style.display="none";
        btnCopy.style.display="flex";
        text2Decode .style.background="none";

        for (let i = 0; i<uncode.length; i++){

            text2Encode=text2Encode.replaceAll(uncode[i],code[i]);
            
        }
        text2Decode.value+=text2Encode;
    }else{
        text2Decode.value+="";
        alert("solo minusculas sin acentos o simbolos");

    }
    /*for (const txt of txtInput) {

        for (let i = 0; i < txt.length; i++) {

            if(txt[i]=='a' || txt[i]=='e' || txt[i]=='i' || txt[i]=='o' || txt[i]=='u') {

                txtEncode.push(vowelCode.get(txt[i]));
            }
            else {

                txtEncode.push(txt[i]);

            }       
        }  
        txtEncode.push(" ");
    }*/
  


    //vowelCode.forEach((value, key, map) => {console.log(key,value);} );
    
     
    
}

function decodeTxt(){
    let encodeTex = document.getElementById("input-text").value;
    let decodeTex = document.getElementById("output-text");
    let btnCopy = document.getElementById("btn-copy");
    const uncode =["a","e","i","o","u"];
    const code = ["ai","enter","imes","ober","ufat"];
    decodeTex.value="";   

    encodeTex=encodeTex.trim().replaceAll(/\s+/g," ");
    
    if (isChecked(encodeTex)) {
        document.getElementById("text-right").style.display="none";
        btnCopy.style.display="flex";
        decodeTex.style.background="none";
        for (let i = 0; i<uncode.length; i++){
        
            encodeTex=encodeTex.replaceAll(code[i],uncode[i]);
    
    
        }
        decodeTex.value+=encodeTex;
    } else {
        decodeTex.value+="";
        alert("solo minusculas sin acentos o simbolos");
    }





    console.log(encodeTex);
    //console.log(encodeTex);


  



}

function copy(){
    let encodeTex = document.getElementById("input-text");
    let decodeTex = document.getElementById("output-text");
    encodeTex.value="";
    decodeTex.select();
    document.execCommand('copy');
    encodeTex.value+=decodeTex.value;
    alert("Copiado!");






}
function isChecked(text) {
    return  !/[^a-z\sñ]/.test(text);    
}
let encodeInput = document.getElementById("btn-encode");
encodeInput.onclick = encodeTex;

let decodeoutput = document.getElementById("btn-decode");
decodeoutput .onclick = decodeTxt;

let btn_Copy= document.getElementById("btn-copy");
btn_Copy.onclick = copy;

 