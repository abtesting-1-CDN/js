/* Version: A_01 - 17.01. 2023 - 15:59:26 */


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
div.setAttribute("id", "id_kts_A_26");
document.querySelector("#regexDivId").insertAdjacentElement("afterend", div);
    
console.log("imab push id_kts_A: id_kts_A_26 name: id 26");
document.querySelector("#id_kts_A_26").innerHTML = "
        <div class="box_js boxKts" contenteditable="true">console.log('box_js')</div>
<div class="box_css boxKts" contenteditable="true">#regexDivId{color:green !importatn}</div>
<div class="box_html boxKts" contenteditable="true">&lt;span style="color:blue"&gt;Test box_html&lt;/span&gt;</div>    ";

    
    }
    
}
        
else{
//not necessary
}

//lenght: 1