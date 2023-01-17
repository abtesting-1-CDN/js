/* Version: A_01 - 17.01. 2023 - 16:46:24 */


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

if(imAbRandomNumber < 0.25){
    
    if(imHbMbIsMobile.any()){}else{
    
var div = document.createElement("div");
div.setAttribute("id", "js_id_kts_A_26");
document.querySelector("#regexDivId").insertAdjacentElement("afterend", div);
    
console.log("imab push js_id_kts_A: js_id_kts_A_26 name: id 26");
document.querySelector("#js_id_kts_A_26").innerHTML += "<scr"+"ipt>console.log('box_js')</scr"+"ipt>";

var div = document.createElement("div");
div.setAttribute("id", "css_id_kts_A_26");
document.querySelector("#regexDivId").insertAdjacentElement("afterend", div);
    
console.log("imab push css_id_kts_A: css_id_kts_A_26 name: id 26");
document.querySelector("#css_id_kts_A_26").innerHTML += "<sty"+"le>#regexDivId{color:green !importatn}</sty"+"le>";

var div = document.createElement("div");
div.setAttribute("id", "html_id_kts_A_26");
document.querySelector("#regexDivId").insertAdjacentElement("afterend", div);
    
console.log("imab push html_id_kts_A: html_id_kts_A_26 name: id 26");
document.querySelector("#html_id_kts_A_26").innerHTML += "<span style=\"color:blue\">Test box_html</span>";

    
    }
    
}
        
else{
//not necessary
}

//lenght: 1