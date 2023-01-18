/* Version: A_01 - 18.01. 2023 - 16:25:20 */


//masterString



var imHbMbIsMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (imHbMbIsMobile.Android() || imHbMbIsMobile.BlackBerry() || imHbMbIsMobile.iOS() || imHbMbIsMobile.Opera() || imHbMbIsMobile.Windows());
    }
};

//targeting definitions

//setTimeout(function(){
var imAbRandomNumber = Math.random();
console.log("imAbRandomNumber: "+imAbRandomNumber);

if(imAbRandomNumber < 1){
    
    
var div = document.createElement("div");
div.setAttribute("id", "html_id_kts_A_39");
document.querySelector("body").insertAdjacentElement("beforeend", div);
    
console.log("imab push html_id_kts_A: html_id_kts_A_39 name: Performax");
document.querySelector("#html_id_kts_A_39").innerHTML += "";

var div = document.createElement("div");
div.setAttribute("id", "css_id_kts_A_39");
document.querySelector("body").insertAdjacentElement("beforeend", div);
    
console.log("imab push css_id_kts_A: css_id_kts_A_39 name: Performax");
    

var imAbStyleNode;
var imAbContentStyleTop = "";
if((imAbStyleNode = document.createElement("style")).id = "cssscript_id_kts_A_39", imAbStyleNode.type = "text/css", window.attachEvent && !window.opera){ 
    imAbStyleNode.styleSheet.cssText = imAbContentStyleTop;
}else{
    var imAbStyleText = document.createTextNode(imAbContentStyleTop);
    imAbStyleNode.appendChild(imAbStyleText)
}

//document.querySelector("#css_id_kts_A_39").innerHTML += "<sty"+"le></sty"+"le>";
document.querySelector("#css_id_kts_A_39").appendChild(imAbStyleNode);   

var div = document.createElement("div");
div.setAttribute("id", "js_id_kts_A_39");
document.querySelector("body").insertAdjacentElement("beforeend", div);
console.log("imab push js_id_kts_A: js_id_kts_A_39 name: Performax");
var imJsElem = document.createElement("script");
imJsElem.type = "text/javascript";
imJsElem.id = "jscript_id_kts_A_39";
imJsElem.innerHTML = "var imAbPer= document.createElement(\"script\");imAbPer.id = \"imAbPer\";imAbPer.src = \"https://cdn.performax.cz/yi/adsbypx/px_autoads.js\";document.getElementsByTagName(\"head\")[0].appendChild(imAbPer); ";
document.querySelector("#js_id_kts_A_39").appendChild(imJsElem);

    

    
}
        
else{
//not necessary
}

//lenght: 1