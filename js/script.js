

function encodeTex() {

    let text2Encode = document.getElementById("input-text").value;
    let text2Decode = document.getElementById("output-text");
    let btnCopy = document.getElementById("btn-copy");
    let btn2Encode = document.getElementById("btn-encode");
    let txtInput = [];
    let txtEncode =[];
    const vowelCode = new Map();
    vowelCode.set("a","ai");
    vowelCode.set("e","enter");
    vowelCode.set("i","imes");
    vowelCode.set("o","ober");
    vowelCode.set("u","ufat");
    const code = {a:"ai", e:"enter", i:"imes", o:"ober" ,u:"ufat"};

    btnCopy.style.display="flex";
    text2Encode=text2Encode.trim().split(/\s+/g);
    text2Encode.forEach(value => txtInput.push(value.split("")));
   
    text2Decode.value="";    for (const txt of txtInput) {
        for (let i = 0; i < txt.length; i++) {

            if(txt[i]=='a' || txt[i]=='e' || txt[i]=='i' || txt[i]=='o' || txt[i]=='u') {

                txtEncode.push(vowelCode.get(txt[i]));
            }
            else {

                txtEncode.push(txt[i]);

            }       
        }  
        txtEncode.push(" ");
    }
    text2Decode.value+=txtEncode.join("");



    //vowelCode.forEach((value, key, map) => {console.log(key,value);} );
    
     
    
}

function decodeTex(){

}

function isValid(text) {
    return  text.length>1 ? !/[^a-z\sñ]/.test(text): "ok";
}
let encodeText = document.getElementById("btn-encode");
 encodeText.onclick = encodeTex;
 