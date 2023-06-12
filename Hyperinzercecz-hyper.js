/* Version: A_01 - 12.06. 2023 - 17:52:13 */


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
div.setAttribute("id", "html_id_kts_A_77");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
    
console.log("imab push html_id_kts_A: html_id_kts_A_77 name: HB");
document.querySelector("#html_id_kts_A_77").innerHTML += "";

var div = document.createElement("div");
div.setAttribute("id", "css_id_kts_A_77");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
    
console.log("imab push css_id_kts_A: css_id_kts_A_77 name: HB");
    

var imAbStyleNode;
var imAbContentStyleTop = "";
if((imAbStyleNode = document.createElement("style")).id = "cssscript_id_kts_A_77", imAbStyleNode.type = "text/css", window.attachEvent && !window.opera){ 
    imAbStyleNode.styleSheet.cssText = imAbContentStyleTop;
}else{
    var imAbStyleText = document.createTextNode(imAbContentStyleTop);
    imAbStyleNode.appendChild(imAbStyleText)
}

//document.querySelector("#css_id_kts_A_77").innerHTML += "<sty"+"le></sty"+"le>";
document.querySelector("#css_id_kts_A_77").appendChild(imAbStyleNode);   

var div = document.createElement("div");
div.setAttribute("id", "js_id_kts_A_77");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
console.log("imab push js_id_kts_A: js_id_kts_A_77 name: HB");
var imJsElem = document.createElement("script");
imJsElem.type = "text/javascript";
imJsElem.id = "jscript_id_kts_A_77";
imJsElem.innerHTML = "console.log('AB NO stop-MbReloadingAds' );  document.body.setAttribute(\"AB\", \"HB\");var imAbHbMaster = document.createElement(\"script\");imAbHbMaster.type = \"text/javascript\";imAbHbMaster.id = \"imHbMaster\";imAbHbMaster.src = \"https://cdn.jsdelivr.net/gh/HB-2-CDN/js/1608.js\";document.getElementsByTagName('head')[0].appendChild(imAbHbMaster );";
document.querySelector("#js_id_kts_A_77").appendChild(imJsElem);

    

    
}
        
else{
//not necessary
}

//lenght: 1