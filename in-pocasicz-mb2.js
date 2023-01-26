/* Version: A_01 - 26.01. 2023 - 13:35:33 */


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

if(imAbRandomNumber < 0.01){
    
    
var div = document.createElement("div");
div.setAttribute("id", "html_id_kts_A_33");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
    
console.log("imab push html_id_kts_A: html_id_kts_A_33 name: Google");
document.querySelector("#html_id_kts_A_33").innerHTML += "<div id=\"imAbGooPassbackBox\"><div id=\"imAbGooPassbackClose\" onclick=\"imAbGooPassbackClose()\" style=\"\">Zav&#345;&iacute;t reklamu</div><div id=\"imAbGoo-passback\"></div></div>";

var div = document.createElement("div");
div.setAttribute("id", "css_id_kts_A_33");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
    
console.log("imab push css_id_kts_A: css_id_kts_A_33 name: Google");
    

var imAbStyleNode;
var imAbContentStyleTop = "#imAbGooPassbackBox{position:fixed; width:100%; height:auto; bottom:0px; left:0px; z-index:1000} #imAbGooPassbackClose{border-top-left-radius:15px;width:auto;min-width:100px;cursor:pointer;min-height:30;position:absolute;right:0px;bottom:29px;z-index:100001;padding:0px 10px;background:rgba(0,0,0,0.8);color:rgb(255,255,255);font-weight:normal;font-family:arial,sans-serif!important;font-size:12px!important;text-shadow:none!important;line-height:30px!important;display:block} #imAbGooPassbackBox iframe{float: right;}#imAbGoo-passback > div {float:right}";
if((imAbStyleNode = document.createElement("style")).id = "cssscript_id_kts_A_33", imAbStyleNode.type = "text/css", window.attachEvent && !window.opera){ 
    imAbStyleNode.styleSheet.cssText = imAbContentStyleTop;
}else{
    var imAbStyleText = document.createTextNode(imAbContentStyleTop);
    imAbStyleNode.appendChild(imAbStyleText)
}

//document.querySelector("#css_id_kts_A_33").innerHTML += "<sty"+"le>#imAbGooPassbackBox{position:fixed; width:100%; height:auto; bottom:0px; left:0px; z-index:1000} #imAbGooPassbackClose{border-top-left-radius:15px;width:auto;min-width:100px;cursor:pointer;min-height:30;position:absolute;right:0px;bottom:29px;z-index:100001;padding:0px 10px;background:rgba(0,0,0,0.8);color:rgb(255,255,255);font-weight:normal;font-family:arial,sans-serif!important;font-size:12px!important;text-shadow:none!important;line-height:30px!important;display:block} #imAbGooPassbackBox iframe{float: right;}#imAbGoo-passback > div {float:right}</sty"+"le>";
document.querySelector("#css_id_kts_A_33").appendChild(imAbStyleNode);   

var div = document.createElement("div");
div.setAttribute("id", "js_id_kts_A_33");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
console.log("imab push js_id_kts_A: js_id_kts_A_33 name: Google");
var imJsElem = document.createElement("script");
imJsElem.type = "text/javascript";
imJsElem.id = "jscript_id_kts_A_33";
imJsElem.innerHTML = "var imAbGoo= document.createElement(\"script\");imAbGoo.id = \"imAbGoo\";imAbGoo.src = \"https://securepubads.g.doubleclick.net/tag/js/gpt.js\";document.querySelector(\"#html_id_kts_A_33\").appendChild(imAbGoo);setTimeout(function(){var imAbGptScript = document.createElement(\"script\");imAbGptScript .type = \"text/javascript\";imAbGptScript .id = \"imAbGptScript \";imAbGptScript .innerHTML = \"    window.googletag = window.googletag || {cmd: []};    googletag.cmd.push(function() {    imAbMbGoogleAdSlot = googletag.defineSlot('/96856532/TT-In-pocasi-CW-Nestandard-Mobile', [[300, 150], [500, 200], [300, 50], [320, 100], [970, 210], [745, 200], [745, 100], [1000, 200], [750, 200], [300, 100], [320, 150], [980, 200], [300, 120], [320, 50], [970, 200], [970, 310]], 'imAbGoo-passback').addService(googletag.pubads());    googletag.enableServices();    googletag.pubads().addEventListener('slotRenderEnded',function(event) {if( event.slot.W == imAbMbGoogleAdSlot.W ){ console.log('imAbMbGoogleAdSlot is ready'); checkingCorrectImAbMbView();}});         googletag.display('imAbGoo-passback');    });\";document.querySelector(\"#imAbGoo-passback\").appendChild(imAbGptScript );},500);function imAbGooPassbackClose(){document.querySelector(\"#imAbGooPassbackBox\").style.display=\"none\";} function checkingCorrectImAbMbView(){    console.log('Start checkingCorrectImAbMbView');    var scaleFloor;    var screenWidth = window.innerWidth;    var screenHeight = window.innerHeight;    console.log('!! screenWidth/screenHeight: '+screenWidth+'/'+screenHeight);    var imAbMbGooIframe = document.querySelector('#imAbGooPassbackBox iframe');    var imAbMbGooIframeWidth = parseInt(imAbMbGooIframe.width.replace('px', ''),10);    var imAbMbGooIframeHeight = parseInt(imAbMbGooIframe.height.replace('px', ''),10);    console.log('imAbMbGooIframeWidth/imAbMbGooIframeHeight: '+imAbMbGooIframeWidth+'/'+imAbMbGooIframeHeight);    var imAbMbButtonMargin = imAbMbGooIframeHeight;    if(imAbMbGooIframeWidth > screenWidth){        console.log('imAbMbGooIframeWidth > screenWidth');        scaleFloor = Math.floor((screenWidth / imAbMbGooIframeWidth)*100)/100;        console.log(\"scaleFloor: \"+scaleFloor);        imAbMbGooIframe.style.transform = \"scale(\"+scaleFloor+\")\";        imAbMbGooIframe.style.transformOrigin = \"bottom right\";        imAbMbButtonMargin = scaleFloor * imAbMbGooIframeHeight;         if((imAbMbGooIframeHeight*scaleFloor) > (screenHeight*0.5)){            scaleFloor = Math.floor(((screenHeight*0.5) / (imAbMbGooIframeHeight*scaleFloor))*100)/100;            console.log(\"scaleFloor: \"+scaleFloor);            imAbMbGooIframe.style.transform = \"scale(\"+scaleFloor+\")\";            imAbMbGooIframe.style.transformOrigin = \"bottom right\";            imAbMbButtonMargin = scaleFloor * imAbMbGooIframeHeight;         }    }else{        console.log('else imAbMbGooIframeWidth > screenWidth');        console.log('screenHeight: '+screenHeight);        if(imAbMbGooIframeHeight > (screenHeight*0.5)){            console.log('imAbMbGooIframeHeight > (screenHeight*0.1)');            scaleFloor = Math.floor(((screenHeight*0.5) / imAbMbGooIframeHeight)*100)/100;            console.log(\"scaleFloor: \"+scaleFloor);            imAbMbGooIframe.style.transform = \"scale(\"+scaleFloor+\")\";            imAbMbGooIframe.style.transformOrigin = \"top right\";            imAbMbButtonMargin = scaleFloor * imAbMbGooIframeHeight;         }    }    console.log(\"imAbMbButtonMargin: \"+\"-\"+imAbMbButtonMargin+\"px\");    document.querySelector('#imAbGooPassbackClose').style.bottom = imAbMbButtonMargin+\"px\";}";
document.querySelector("#js_id_kts_A_33").appendChild(imJsElem);

    

    
}
        
else if(imAbRandomNumber < 0.02){
    
    
var div = document.createElement("div");
div.setAttribute("id", "html_id_kts_A_35");
document.querySelector("body").insertAdjacentElement("beforeend", div);
    
console.log("imab push html_id_kts_A: html_id_kts_A_35 name: Sklik");
document.querySelector("#html_id_kts_A_35").innerHTML += "<div id=\"ssp-zone-290196\" class=\"im-ssp-box\"><div class=\"sspBoxClose\" onclick=\"sspBoxClose()\" style=\"border-top-left-radius:15px;width:auto;min-width:100px;cursor:pointer;min-height:30;position:absolute;right:0px;top:-29px;z-index:100001;padding:0px 10px;background:rgba(0,0,0,0.8);color:rgb(255,255,255);font-weight:normal;font-family:arial,sans-serif!important;font-size:12px!important;text-shadow:none!important;line-height:30px!important;display:none\">Zav&#345;Ã­t reklamu</div></div>";

var div = document.createElement("div");
div.setAttribute("id", "css_id_kts_A_35");
document.querySelector("body").insertAdjacentElement("beforeend", div);
    
console.log("imab push css_id_kts_A: css_id_kts_A_35 name: Sklik");
    

var imAbStyleNode;
var imAbContentStyleTop = ".im-ssp-box{position: fixed;z-index: 1000000;bottom: 0px;right: 0px; /*display: none;*/} #html_id_kts_A_35{position: fixed;z-index: 10000000;bottom: 0px;width:100%}";
if((imAbStyleNode = document.createElement("style")).id = "cssscript_id_kts_A_35", imAbStyleNode.type = "text/css", window.attachEvent && !window.opera){ 
    imAbStyleNode.styleSheet.cssText = imAbContentStyleTop;
}else{
    var imAbStyleText = document.createTextNode(imAbContentStyleTop);
    imAbStyleNode.appendChild(imAbStyleText)
}

//document.querySelector("#css_id_kts_A_35").innerHTML += "<sty"+"le>.im-ssp-box{position: fixed;z-index: 1000000;bottom: 0px;right: 0px; /*display: none;*/} #html_id_kts_A_35{position: fixed;z-index: 10000000;bottom: 0px;width:100%}</sty"+"le>";
document.querySelector("#css_id_kts_A_35").appendChild(imAbStyleNode);   

var div = document.createElement("div");
div.setAttribute("id", "js_id_kts_A_35");
document.querySelector("body").insertAdjacentElement("beforeend", div);
console.log("imab push js_id_kts_A: js_id_kts_A_35 name: Sklik");
var imJsElem = document.createElement("script");
imJsElem.type = "text/javascript";
imJsElem.id = "jscript_id_kts_A_35";
imJsElem.innerHTML = "var imAbS= document.createElement(\"script\");imAbS.id = \"imAbS\";imAbS.src = \"https://ssp.seznam.cz/static/js/ssp.js\";document.querySelector(\"#html_id_kts_A_35\").appendChild(imAbS);var imReloadingPocetCyklu = 5;var imReloadingDobaCyklu = 50;var imZoneId = 290196;var imReloadingSetInterval;var imReloadingCyklus = 0;/* nÃ¡sledujÃ­cÃ­ blok vloÅ¾te do strÃ¡nky kamkoli za pÃ¸ipojenÃ­ vÃ½dejovÃ©ho a mÃ¬Ã¸icÃ­ho *//* skriptu a definici reklamnÃ­ch zÃ³n (elementy pro reklamu musÃ­ v okamÅ¾iku volÃ¡nÃ­ *//* metody getAds() ve zdrojovÃ©m kÃ³du strÃ¡nky fyzicky existovat) *//* metoda getAds() zajiÅ¡ uje zÃ­skÃ¡nÃ­ reklamy z reklamnÃ­ho systÃ©mu a jejÃ­ vykreslenÃ­ *//* do strÃ¡nky; parametry jednotlivÃ½ch zÃ³n jsou definovanÃ© v nÃ­Å¾e uvedenÃ©m poli, *//* kterÃ© je argumentem tÃ©to metody */var screenAvailWidth= screen.availWidth;var screenAvailHeight = screen.availHeight;console.log('!! screenAvailWidth/screenAvailHeight: '+screenAvailWidth+'/'+screenAvailHeight);var imIsMobile = {    Android: function() {        return navigator.userAgent.match(/Android/i);    },    BlackBerry: function() {        return navigator.userAgent.match(/BlackBerry/i);    },    iOS: function() {        return navigator.userAgent.match(/iPhone|iPad|iPod/i);    },    Opera: function() {        return navigator.userAgent.match(/Opera Mini/i);    },    Windows: function() {        return navigator.userAgent.match(/IEMobile/i);    },    any: function() {        return (imIsMobile.Android() || imIsMobile.BlackBerry() || imIsMobile.iOS() || imIsMobile.Opera() || imIsMobile.Windows());    }};function sspBoxClose(){     document.querySelector('.im-ssp-box').style.display = 'none';    clearInterval(imReloadingSetInterval);}function checkSizeOfAd(){    setTimeout(function(){         var scaleFloor;        var screenWidth = screen.width;        var screenHeight = screen.height;        console.log('!! screenWidth/screenHeight: '+screenWidth+'/'+screenHeight);        var sspBox = document.querySelector('.im-ssp-box');        var sspBoxWidth = parseInt(sspBox.style.width.replace('px', ''),10);        var sspBoxHeight = parseInt(sspBox.style.height.replace('px', ''),10);        console.log('sspBoxWidth/sspBoxHeight: '+sspBoxWidth+'/'+sspBoxHeight);        if(sspBoxWidth > screenWidth){            console.log('sspBoxWidth > screenWidth');            scaleFloor = Math.floor((screenWidth / sspBoxWidth)*100)/100;            console.log(\"scaleFloor: \"+scaleFloor);            sspBox.style.transform = \"scale(\"+scaleFloor+\")\";            sspBox.style.transformOrigin = \"bottom right\";            if((sspBoxHeight*scaleFloor) > (screenHeight*0.25)){                scaleFloor = Math.floor(((screenHeight*0.25) / (sspBoxHeight*scaleFloor))*100)/100;                console.log(\"scaleFloor: \"+scaleFloor);                sspBox.style.transform = \"scale(\"+scaleFloor+\")\";                sspBox.style.transformOrigin = \"bottom right\";            }        }else{            console.log('else sspBoxWidth > screenWidth');            if(sspBoxHeight > (screenHeight*0.25)){                console.log('sspBoxHeight > (screenHeight*0.1)');                scaleFloor = Math.floor(((screenHeight*0.25) / sspBoxHeight)*100)/100;                console.log(\"scaleFloor: \"+scaleFloor);                sspBox.style.transform = \"scale(\"+scaleFloor+\")\";                sspBox.style.transformOrigin = \"bottom right\";            }        }    }, 1000);}function imReloadingTimer() {    console.log('go imReloadingTimer');    imReloadingCyklus = imReloadingCyklus+1;    if(imReloadingCyklus <= imReloadingPocetCyklu){        console.log('imReloadingCyklus/imReloadingPocetCyklu: '+imReloadingCyklus+'/'+imReloadingPocetCyklu);        var sspBox = document.querySelector('.im-ssp-box');        sspBox.innerHTML = '<div class=\"sspBoxClose\" onclick=\"sspBoxClose()\" style=\"border-top-left-radius:15px;width:auto;min-width:100px;cursor:pointer;min-height:30;position:absolute;right:0px;top:-29px;z-index:100001;padding:0px 10px;background:rgba(0,0,0,0.8);color:rgb(255,255,255);font-weight:normal;font-family:arial,sans-serif!important;font-size:12px!important;text-shadow:none!important;line-height:30px!important; display:block\">ZavÃ¸Ã­t reklamu</div>';        sspBox.style.transform = \"scale(1)\";        console.log('MB ze seznamu');        sssp.getAds([{            \"zoneId\": imZoneId,			/* unikÃ¡tnÃ­ identifikÃ¡tor reklamnÃ­ zÃ³ny */            \"id\": \"ssp-zone-\"+imZoneId,	/* ID elementu, do kterÃ©ho se vypisuje reklama */            \"width\": 320,	/* maximÃ¡lnÃ­ Å¡Ã­Ã¸ka reklamy v zÃ³nÃ¬ */            \"height\": 100	/* maximÃ¡lnÃ­ vÃ½Å¡ka reklamy v zÃ³nÃ¬ */        }]);        checkSizeOfAd();    }else{        console.log('stop imReloadingSetInterval');        clearInterval(imReloadingSetInterval);    }}    setTimeout(function(){if(imIsMobile.any()){    /*OK MB od seznamu patri jen na mobilni zarizeni*/    console.log('MB ze seznamu');    sssp.getAds([{        \"zoneId\": imZoneId,			/* unikÃ¡tnÃ­ identifikÃ¡tor reklamnÃ­ zÃ³ny */        \"id\": \"ssp-zone-\"+imZoneId,	/* ID elementu, do kterÃ©ho se vypisuje reklama */        \"width\": 320,	/* maximÃ¡lnÃ­ Å¡Ã­Ã¸ka reklamy v zÃ³nÃ¬ */        \"height\": 100	/* maximÃ¡lnÃ­ vÃ½Å¡ka reklamy v zÃ³nÃ¬ */    }]);    document.querySelector('.sspBoxClose').style.display = 'block';    checkSizeOfAd();    imReloadingSetInterval = setInterval(imReloadingTimer, (imReloadingDobaCyklu*1000));}else{    console.log('MB od seznamu nepatri na PC zobrazeni');};console.log(\"AB id 35\");},1500);";
document.querySelector("#js_id_kts_A_35").appendChild(imJsElem);

    

    
}
        
else if(imAbRandomNumber < 0.03){
    
    
var div = document.createElement("div");
div.setAttribute("id", "html_id_kts_A_36");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
    
console.log("imab push html_id_kts_A: html_id_kts_A_36 name: Admaster");
document.querySelector("#html_id_kts_A_36").innerHTML += "<div id=\"adm-sticky\"></div>";

var div = document.createElement("div");
div.setAttribute("id", "css_id_kts_A_36");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
    
console.log("imab push css_id_kts_A: css_id_kts_A_36 name: Admaster");
    

var imAbStyleNode;
var imAbContentStyleTop = "";
if((imAbStyleNode = document.createElement("style")).id = "cssscript_id_kts_A_36", imAbStyleNode.type = "text/css", window.attachEvent && !window.opera){ 
    imAbStyleNode.styleSheet.cssText = imAbContentStyleTop;
}else{
    var imAbStyleText = document.createTextNode(imAbContentStyleTop);
    imAbStyleNode.appendChild(imAbStyleText)
}

//document.querySelector("#css_id_kts_A_36").innerHTML += "<sty"+"le></sty"+"le>";
document.querySelector("#css_id_kts_A_36").appendChild(imAbStyleNode);   

var div = document.createElement("div");
div.setAttribute("id", "js_id_kts_A_36");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
console.log("imab push js_id_kts_A: js_id_kts_A_36 name: Admaster");
var imJsElem = document.createElement("script");
imJsElem.type = "text/javascript";
imJsElem.id = "jscript_id_kts_A_36";
imJsElem.innerHTML = "var ibbTagEngine= document.createElement(\"script\");ibbTagEngine.id = \"ibbTagEngine\";ibbTagEngine.src = \"https://bbcdn-static.bbelements.com/scripts/ibb-async/stable/tag.js\";document.querySelector(\"#html_id_kts_A_36\").appendChild(ibbTagEngine);setTimeout(function(){ var adserver = ibbAds.tag.useAdProvider('BbmCz');adserver.manageAdSlot('adm-sticky', '27063.1.1.1'); var getIbbId = ibbAds.tag.useDataProvider('BbnautIdDataProvider', { url : 'https://bbcdn-static.bbelements.com/scripts/ibb-async/stable/plugins/BbnautIdDataProvider.js' }); adserver.attachData('ibbid', getIbbId);ibbAds.tag.requestAndPlaceAds(); console.log(\"AB id 36\"); },500);";
document.querySelector("#js_id_kts_A_36").appendChild(imJsElem);

    

    
}
        
else if(imAbRandomNumber < 0.04){
    
    
var div = document.createElement("div");
div.setAttribute("id", "html_id_kts_A_37");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
    
console.log("imab push html_id_kts_A: html_id_kts_A_37 name: R2b2");
document.querySelector("#html_id_kts_A_37").innerHTML += "";

var div = document.createElement("div");
div.setAttribute("id", "css_id_kts_A_37");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
    
console.log("imab push css_id_kts_A: css_id_kts_A_37 name: R2b2");
    

var imAbStyleNode;
var imAbContentStyleTop = "";
if((imAbStyleNode = document.createElement("style")).id = "cssscript_id_kts_A_37", imAbStyleNode.type = "text/css", window.attachEvent && !window.opera){ 
    imAbStyleNode.styleSheet.cssText = imAbContentStyleTop;
}else{
    var imAbStyleText = document.createTextNode(imAbContentStyleTop);
    imAbStyleNode.appendChild(imAbStyleText)
}

//document.querySelector("#css_id_kts_A_37").innerHTML += "<sty"+"le></sty"+"le>";
document.querySelector("#css_id_kts_A_37").appendChild(imAbStyleNode);   

var div = document.createElement("div");
div.setAttribute("id", "js_id_kts_A_37");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
console.log("imab push js_id_kts_A: js_id_kts_A_37 name: R2b2");
var imJsElem = document.createElement("script");
imJsElem.type = "text/javascript";
imJsElem.id = "jscript_id_kts_A_37";
imJsElem.innerHTML = "var imAbR= document.createElement(\"script\");imAbR.id = \"imAbR\";imAbR.src = \"//trackad.cz/adtrack.php?d=in-pocasi.cz&g=generic&p=fixed\";document.querySelector(\"#html_id_kts_A_37\").appendChild(imAbR);";
document.querySelector("#js_id_kts_A_37").appendChild(imJsElem);

    

    
}
        
else if(imAbRandomNumber < 0.05){
    
    
var div = document.createElement("div");
div.setAttribute("id", "html_id_kts_A_38");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
    
console.log("imab push html_id_kts_A: html_id_kts_A_38 name: Performax");
document.querySelector("#html_id_kts_A_38").innerHTML += "";

var div = document.createElement("div");
div.setAttribute("id", "css_id_kts_A_38");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
    
console.log("imab push css_id_kts_A: css_id_kts_A_38 name: Performax");
    

var imAbStyleNode;
var imAbContentStyleTop = "";
if((imAbStyleNode = document.createElement("style")).id = "cssscript_id_kts_A_38", imAbStyleNode.type = "text/css", window.attachEvent && !window.opera){ 
    imAbStyleNode.styleSheet.cssText = imAbContentStyleTop;
}else{
    var imAbStyleText = document.createTextNode(imAbContentStyleTop);
    imAbStyleNode.appendChild(imAbStyleText)
}

//document.querySelector("#css_id_kts_A_38").innerHTML += "<sty"+"le></sty"+"le>";
document.querySelector("#css_id_kts_A_38").appendChild(imAbStyleNode);   

var div = document.createElement("div");
div.setAttribute("id", "js_id_kts_A_38");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
console.log("imab push js_id_kts_A: js_id_kts_A_38 name: Performax");
var imJsElem = document.createElement("script");
imJsElem.type = "text/javascript";
imJsElem.id = "jscript_id_kts_A_38";
imJsElem.innerHTML = "var imAbPer= document.createElement(\"script\");imAbPer.id = \"imAbPer\";imAbPer.src = \"https://cdn.performax.cz/yi/adsbypx/px_autoads.js\";document.querySelector(\"#html_id_kts_A_38\").appendChild(imAbPer);";
document.querySelector("#js_id_kts_A_38").appendChild(imJsElem);

    

    
}
        
else if(imAbRandomNumber < 1.04){
    
    
var div = document.createElement("div");
div.setAttribute("id", "html_id_kts_A_42");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
    
console.log("imab push html_id_kts_A: html_id_kts_A_42 name: HB");
document.querySelector("#html_id_kts_A_42").innerHTML += "";

var div = document.createElement("div");
div.setAttribute("id", "css_id_kts_A_42");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
    
console.log("imab push css_id_kts_A: css_id_kts_A_42 name: HB");
    

var imAbStyleNode;
var imAbContentStyleTop = "";
if((imAbStyleNode = document.createElement("style")).id = "cssscript_id_kts_A_42", imAbStyleNode.type = "text/css", window.attachEvent && !window.opera){ 
    imAbStyleNode.styleSheet.cssText = imAbContentStyleTop;
}else{
    var imAbStyleText = document.createTextNode(imAbContentStyleTop);
    imAbStyleNode.appendChild(imAbStyleText)
}

//document.querySelector("#css_id_kts_A_42").innerHTML += "<sty"+"le></sty"+"le>";
document.querySelector("#css_id_kts_A_42").appendChild(imAbStyleNode);   

var div = document.createElement("div");
div.setAttribute("id", "js_id_kts_A_42");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
console.log("imab push js_id_kts_A: js_id_kts_A_42 name: HB");
var imJsElem = document.createElement("script");
imJsElem.type = "text/javascript";
imJsElem.id = "jscript_id_kts_A_42";
imJsElem.innerHTML = "console.log('abHbCidDivMb'); abHbCidDivMbVariable = 'OK'; console.log('abHbCidDivMbVariable:'+ abHbCidDivMbVariable);";
document.querySelector("#js_id_kts_A_42").appendChild(imJsElem);

    

    
}
        
else{
//not necessary
}

//lenght: 6