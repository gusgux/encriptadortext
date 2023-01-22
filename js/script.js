

function getText() {

    let text2Encode = document.getElementById("input-text").value;
    let text2Decode = document.getElementById("output-text");
    let txInput = [];
    let btnCopy = document.getElementById("btn-copy");
    let btn2Encode = document.getElementById("btn-encode");
    let btn2Decode = document.getElementById("btn-Decode");

    const vowelCode = new Map();
    vowelCode.set("a","ai");
    vowelCode.set("e","enter");
    vowelCode.set("i","imes");
    vowelCode.set("o","ober");
    vowelCode.set("u","ufat");
    const code = {a:"ai", e:"enter", i:"imes", o:"ober" ,u:"ufat"};

    //`"gato" => "gaitober"`
    btnCopy.style.display="flex";
    //text2Decode.value+=text2Encode;
    text2Encode=text2Encode.trim().split(/\s+/g);
    text2Encode.forEach(text => txInput.push(text.split("")));
    let txtEncode=[];
    for (let i = 0; i < txInput.length; i++) {

        if(txInput[i]=="e") {

            txtEncode.push(vowelCode.get(txInput[i]));
            //console.log("if ", txInput[i]);

        }
        else {
            txtEncode.push(txInput[i]);
            //console.log("else "+vowelCode.get(txInput[i]));
        }       
        
    
    }    
    //console.log(txInput);
    console.log(txtEncode);
    text2Decode.value+=txtEncode;

    //text2Encode.forEach(element => console.log(element));
    //code.forEach(element => console.log(element));

    //vowelCode.forEach((value, key, map) => {console.log(key,value);} );
    
     
    
}

function isValid(text) {
    return  text.length>1 ? !/[^a-z\sñ]/.test(text): "ok";
}
let encodeText = document.getElementById("btn-encode");
 encodeText.onclick = getText;
 