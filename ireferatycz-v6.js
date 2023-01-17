/* Version: A_01 - 17.01. 2023 - 18:42:02 */


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

if(imAbRandomNumber < 0.5){
    
    if(imHbMbIsMobile.any()){}else{
    
var div = document.createElement("div");
div.setAttribute("id", "js_id_kts_A_26");
document.querySelector("#regexDivId").insertAdjacentElement("beforeend", div);
console.log("imab push js_id_kts_A: js_id_kts_A_26 name: id 26");
var imJsElem = document.createElement("script");
imJsElem.type = "text/javascript";
imJsElem.id = "jscript_id_kts_A_26";
imJsElem.innerHTML = "console.log(\"box_js green\")";
document.querySelector("#js_id_kts_A_26").appendChild(imJsElem);

var div = document.createElement("div");
div.setAttribute("id", "css_id_kts_A_26");
document.querySelector("#regexDivId").insertAdjacentElement("beforeend", div);
    
console.log("imab push css_id_kts_A: css_id_kts_A_26 name: id 26");
    

var imAbStyleNode;
var imAbContentStyleTop = "#regexDivId span{font-size: 30px}";
if((imAbStyleNode = document.createElement("style")).id = "cssscript_id_kts_A_26", imAbStyleNode.type = "text/css", window.attachEvent && !window.opera){ 
    imAbStyleNode.styleSheet.cssText = imAbContentStyleTop;
}else{
    var imAbStyleText = document.createTextNode(imAbContentStyleTop);
    imAbStyleNode.appendChild(imAbStyleText)
}

//document.querySelector("#css_id_kts_A_26").innerHTML += "<sty"+"le>#regexDivId span{font-size: 30px}</sty"+"le>";
document.querySelector("#css_id_kts_A_26").appendChild(imAbStyleNode);   

var div = document.createElement("div");
div.setAttribute("id", "html_id_kts_A_26");
document.querySelector("#regexDivId").insertAdjacentElement("beforeend", div);
    
console.log("imab push html_id_kts_A: html_id_kts_A_26 name: id 26");
document.querySelector("#html_id_kts_A_26").innerHTML += "<span style=\"color:green\">Green test box_html (font 30px)</span>";

    
    }
    
}
        
else if(imAbRandomNumber < 1){
    
    if(imHbMbIsMobile.any()){}else{
    
var div = document.createElement("div");
div.setAttribute("id", "js_id_kts_A_31");
document.querySelector("#regexDivId").insertAdjacentElement("beforeend", div);
console.log("imab push js_id_kts_A: js_id_kts_A_31 name: id 31");
var imJsElem = document.createElement("script");
imJsElem.type = "text/javascript";
imJsElem.id = "jscript_id_kts_A_31";
imJsElem.innerHTML = "console.log(\"box_js red\")";
document.querySelector("#js_id_kts_A_31").appendChild(imJsElem);

var div = document.createElement("div");
div.setAttribute("id", "css_id_kts_A_31");
document.querySelector("#regexDivId").insertAdjacentElement("beforeend", div);
    
console.log("imab push css_id_kts_A: css_id_kts_A_31 name: id 31");
    

var imAbStyleNode;
var imAbContentStyleTop = "#regexDivId span{font-size: 60px}";
if((imAbStyleNode = document.createElement("style")).id = "cssscript_id_kts_A_31", imAbStyleNode.type = "text/css", window.attachEvent && !window.opera){ 
    imAbStyleNode.styleSheet.cssText = imAbContentStyleTop;
}else{
    var imAbStyleText = document.createTextNode(imAbContentStyleTop);
    imAbStyleNode.appendChild(imAbStyleText)
}

//document.querySelector("#css_id_kts_A_31").innerHTML += "<sty"+"le>#regexDivId span{font-size: 60px}</sty"+"le>";
document.querySelector("#css_id_kts_A_31").appendChild(imAbStyleNode);   

var div = document.createElement("div");
div.setAttribute("id", "html_id_kts_A_31");
document.querySelector("#regexDivId").insertAdjacentElement("beforeend", div);
    
console.log("imab push html_id_kts_A: html_id_kts_A_31 name: id 31");
document.querySelector("#html_id_kts_A_31").innerHTML += "<span style=\"color:red\">Red test box_html (font 60px)</span>";

    
    }
    
}
        
else{
//not necessary
}

//lenght: 2