/* Version: A_01 - 05.04. 2023 - 08:21:27 */


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
div.setAttribute("id", "html_id_kts_A_43");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
    
console.log("imab push html_id_kts_A: html_id_kts_A_43 name: Google");
document.querySelector("#html_id_kts_A_43").innerHTML += "<span data-ab=\"Google-No-Mobile\" style=\"display:none\"></span>";

var div = document.createElement("div");
div.setAttribute("id", "css_id_kts_A_43");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
    
console.log("imab push css_id_kts_A: css_id_kts_A_43 name: Google");
    

var imAbStyleNode;
var imAbContentStyleTop = "#imAbGooPassbackBox{position:fixed; width:100%; height:auto; bottom:0px; left:0px; z-index:1000} #imAbGooPassbackClose{border-top-left-radius:15px;width:auto;min-width:100px;cursor:pointer;min-height:30;position:absolute;right:0px;bottom:29px;z-index:100001;padding:0px 10px;background:rgba(0,0,0,0.8);color:rgb(255,255,255);font-weight:normal;font-family:arial,sans-serif!important;font-size:12px!important;text-shadow:none!important;line-height:30px!important;display:block} #imAbGooPassbackBox iframe{float: right;}#imAbGoo-passback > div {float:right}";
if((imAbStyleNode = document.createElement("style")).id = "cssscript_id_kts_A_43", imAbStyleNode.type = "text/css", window.attachEvent && !window.opera){ 
    imAbStyleNode.styleSheet.cssText = imAbContentStyleTop;
}else{
    var imAbStyleText = document.createTextNode(imAbContentStyleTop);
    imAbStyleNode.appendChild(imAbStyleText)
}

//document.querySelector("#css_id_kts_A_43").innerHTML += "<sty"+"le>#imAbGooPassbackBox{position:fixed; width:100%; height:auto; bottom:0px; left:0px; z-index:1000} #imAbGooPassbackClose{border-top-left-radius:15px;width:auto;min-width:100px;cursor:pointer;min-height:30;position:absolute;right:0px;bottom:29px;z-index:100001;padding:0px 10px;background:rgba(0,0,0,0.8);color:rgb(255,255,255);font-weight:normal;font-family:arial,sans-serif!important;font-size:12px!important;text-shadow:none!important;line-height:30px!important;display:block} #imAbGooPassbackBox iframe{float: right;}#imAbGoo-passback > div {float:right}</sty"+"le>";
document.querySelector("#css_id_kts_A_43").appendChild(imAbStyleNode);   

var div = document.createElement("div");
div.setAttribute("id", "js_id_kts_A_43");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
console.log("imab push js_id_kts_A: js_id_kts_A_43 name: Google");
var imJsElem = document.createElement("script");
imJsElem.type = "text/javascript";
imJsElem.id = "jscript_id_kts_A_43";
imJsElem.innerHTML = "var imReloadingPocetCyklu = 5;var imReloadingDobaCyklu = 50;var imZoneId = 290196;var imReloadingSetInterval;var imReloadingCyklus = 0;function imReloadingTimer() {    console.log('go imReloadingTimer');    imReloadingCyklus = imReloadingCyklus+1;    if(imReloadingCyklus <= imReloadingPocetCyklu){        console.log('imReloadingCyklus/imReloadingPocetCyklu: '+imReloadingCyklus+'/'+imReloadingPocetCyklu);        checkSizeOfAd();    }else{        console.log('stop imReloadingSetInterval');        clearInterval(imReloadingSetInterval);    }}function checkingCorrectImAbMbView(){    console.log('Start checkingCorrectImAbMbView');    var scaleFloor;    var screenWidth = window.innerWidth;    var screenHeight = window.innerHeight;    console.log('!! screenWidth/screenHeight: '+screenWidth+'/'+screenHeight);    var imAbMbGooIframe = document.querySelector('#imAbGooPassbackBox iframe');    var imAbMbGooIframeWidth = parseInt(imAbMbGooIframe.width.replace('px', ''),10);    var imAbMbGooIframeHeight = parseInt(imAbMbGooIframe.height.replace('px', ''),10);    console.log('imAbMbGooIframeWidth/imAbMbGooIframeHeight: '+imAbMbGooIframeWidth+'/'+imAbMbGooIframeHeight);    var imAbMbButtonMargin = imAbMbGooIframeHeight;    if(imAbMbGooIframeWidth > screenWidth){        console.log('imAbMbGooIframeWidth > screenWidth');        scaleFloor = Math.floor((screenWidth / imAbMbGooIframeWidth)*100)/100;        console.log(\"scaleFloor: \"+scaleFloor);        imAbMbGooIframe.style.transform = \"scale(\"+scaleFloor+\")\";        imAbMbGooIframe.style.transformOrigin = \"bottom right\";        imAbMbButtonMargin = scaleFloor * imAbMbGooIframeHeight;         if((imAbMbGooIframeHeight*scaleFloor) > (screenHeight*0.5)){            scaleFloor = Math.floor(((screenHeight*0.5) / (imAbMbGooIframeHeight*scaleFloor))*100)/100;            console.log(\"scaleFloor: \"+scaleFloor);            imAbMbGooIframe.style.transform = \"scale(\"+scaleFloor+\")\";            imAbMbGooIframe.style.transformOrigin = \"bottom right\";            imAbMbButtonMargin = scaleFloor * imAbMbGooIframeHeight;         }    }else{        console.log('else imAbMbGooIframeWidth > screenWidth');        console.log('screenHeight: '+screenHeight);        if(imAbMbGooIframeHeight > (screenHeight*0.5)){            console.log('imAbMbGooIframeHeight > (screenHeight*0.1)');            scaleFloor = Math.floor(((screenHeight*0.5) / imAbMbGooIframeHeight)*100)/100;            console.log(\"scaleFloor: \"+scaleFloor);            imAbMbGooIframe.style.transform = \"scale(\"+scaleFloor+\")\";            imAbMbGooIframe.style.transformOrigin = \"top right\";            imAbMbButtonMargin = scaleFloor * imAbMbGooIframeHeight;         }    }    console.log(\"imAbMbButtonMargin: \"+\"-\"+imAbMbButtonMargin+\"px\");    document.querySelector('#imAbGooPassbackClose').style.bottom = imAbMbButtonMargin+\"px\";}imAbGooPassIsMobile = {    Android: function() {        return navigator.userAgent.match(/Android/i);    },    BlackBerry: function() {        return navigator.userAgent.match(/BlackBerry/i);    },    iOS: function() {        return navigator.userAgent.match(/iPhone|iPad|iPod/i);    },    Opera: function() {        return navigator.userAgent.match(/Opera Mini/i);    },    Windows: function() {        return navigator.userAgent.match(/IEMobile/i);    },    any: function() {        return (imAbGooPassIsMobile.Android() || imAbGooPassIsMobile.BlackBerry() || imAbGooPassIsMobile.iOS() || imAbGooPassIsMobile.Opera() || imAbGooPassIsMobile.Windows());    }};if(imAbGooPassIsMobile.any()){     imAbGooPassOnlyMobile();}else{     document.body.setAttribute(\"AB\", \"Google-No-Mobile\");}function imAbGooPassOnlyMobile(){document.body.setAttribute(\"data-mobilniBranding-closeMbCappingPageBrowsing\", \"stop-MbReloadingAds\");document.body.setAttribute(\"AB\", \"Google\");document.querySelector(\"#html_id_kts_A_43\").innerHTML = '<div id=\"imAbGooPassbackBox\"><div id=\"imAbGooPassbackClose\" onclick=\"imAbGooPassbackClose()\" style=\"\">Zav&#345;&iacute;t reklamu</div><div id=\"imAbGoo-passback\"></div></div>';var selection = document.querySelector(\"#imAbGoo\") !== null;if (selection) {    document.querySelector(\"#imAbGoo\").remove();}var imAbGoo= document.createElement(\"script\");imAbGoo.id = \"imAbGoo\";imAbGoo.src = \"https://securepubads.g.doubleclick.net/tag/js/gpt.js\";document.querySelector(\"#html_id_kts_A_43\").appendChild(imAbGoo);setTimeout(function(){var imAbGptScript = document.createElement(\"script\");imAbGptScript.type = \"text/javascript\";imAbGptScript.id = \"imAbGptScript \";imAbGptScript.innerHTML = \"window.googletag = window.googletag || {cmd: []};googletag.cmd.push(function() { googletag.defineSlot('/96856532/TT-In-pocasi-CW-Nestandard-Mobile', [[970, 280], [990, 100], [980, 200], [970, 250], [200, 200], [998, 200], [180, 150], [216, 36], [970, 210], [120, 30], [970, 350], [980, 100], [970, 100], [970, 240], [300, 150], [300, 100], [728, 90], [970, 180], [168, 42], [300, 120], [300, 300], [240, 400], [300, 75], [216, 54], [980, 90], [168, 28], [980, 120], [990, 200], [300, 50], [300, 160], [234, 60], [970, 120], [980, 250], [120, 240], [970, 90], [970, 200], [300, 250], [120, 20], [990, 110], [990, 250], [970, 310]], 'imAbGoo-passback').addService(googletag.pubads()); googletag.enableServices(); googletag.pubads().addEventListener('slotRenderEnded',function(event) {if( event.slot.W == imAbMbGoogleAdSlot.W ){ console.log('imAbMbGoogleAdSlot is ready'); checkingCorrectImAbMbView();}}); googletag.display('imAbGoo-passback');});\";document.querySelector(\"#imAbGoo-passback\").appendChild(imAbGptScript );},500);}function imAbGooPassbackClose(){document.querySelector(\"#imAbGooPassbackBox\").style.display=\"none\";}     function checkSizeOfAd(){    googletag.cmd.push(function() { googletag.pubads().refresh(); });    checkingCorrectImAbMbView();}imReloadingSetInterval = setInterval(imReloadingTimer, (imReloadingDobaCyklu*1000));var imAbHbMaster = document.createElement(\"script\");imAbHbMaster.type = \"text/javascript\";imAbHbMaster.id = \"imHbMaster\";imAbHbMaster.src = \"https://cdn.jsdelivr.net/gh/HB-2-CDN/js/1570.js\";document.getElementsByTagName('head')[0].appendChild(imAbHbMaster );";
document.querySelector("#js_id_kts_A_43").appendChild(imJsElem);

    

    
}
        
else{
//not necessary
}

//lenght: 1