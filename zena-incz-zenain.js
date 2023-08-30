/* Version: A_01 - 30.08. 2023 - 14:53:47 */


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

if(imAbRandomNumber < 0.1){
    
    
var div = document.createElement("div");
div.setAttribute("id", "html_id_kts_A_34");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
    
console.log("imab push html_id_kts_A: html_id_kts_A_34 name: sKlik");
document.querySelector("#html_id_kts_A_34").innerHTML += "<div id=\"ssp-zone-290196\" class=\"im-ssp-box\"><div class=\"sspBoxClose\" onclick=\"sspBoxClose()\" style=\"border-top-left-radius:15px;width:auto;min-width:100px;cursor:pointer;min-height:30;position:absolute;right:0px;top:-29px;z-index:100001;padding:0px 10px;background:rgba(0,0,0,0.8);color:rgb(255,255,255);font-weight:normal;font-family:arial,sans-serif!important;font-size:12px!important;text-shadow:none!important;line-height:30px!important;display:none\">Zav&#345;&#237;t reklamu</div></div>";

var div = document.createElement("div");
div.setAttribute("id", "css_id_kts_A_34");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
    
console.log("imab push css_id_kts_A: css_id_kts_A_34 name: sKlik");
    

var imAbStyleNode;
var imAbContentStyleTop = ".im-ssp-box{position: fixed;z-index: 1000000;bottom: 0px;right: 0px; /*display: none;*/} #html_id_kts_A_34{position: fixed;z-index: 10000000;bottom: 0px;width:100%}";
if((imAbStyleNode = document.createElement("style")).id = "cssscript_id_kts_A_34", imAbStyleNode.type = "text/css", window.attachEvent && !window.opera){ 
    imAbStyleNode.styleSheet.cssText = imAbContentStyleTop;
}else{
    var imAbStyleText = document.createTextNode(imAbContentStyleTop);
    imAbStyleNode.appendChild(imAbStyleText)
}

//document.querySelector("#css_id_kts_A_34").innerHTML += "<sty"+"le>.im-ssp-box{position: fixed;z-index: 1000000;bottom: 0px;right: 0px; /*display: none;*/} #html_id_kts_A_34{position: fixed;z-index: 10000000;bottom: 0px;width:100%}</sty"+"le>";
document.querySelector("#css_id_kts_A_34").appendChild(imAbStyleNode);   

var div = document.createElement("div");
div.setAttribute("id", "js_id_kts_A_34");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
console.log("imab push js_id_kts_A: js_id_kts_A_34 name: sKlik");
var imJsElem = document.createElement("script");
imJsElem.type = "text/javascript";
imJsElem.id = "jscript_id_kts_A_34";
imJsElem.innerHTML = "document.body.setAttribute(\"data-mobilniBranding-closeMbCappingPageBrowsing\", \"stop-MbReloadingAds\");document.body.setAttribute(\"AB\", \"Sklik\");var imAbS= document.createElement(\"script\");imAbS.id = \"imAbS\";imAbS.src = \"https://ssp.seznam.cz/static/js/ssp.js\";document.querySelector(\"#html_id_kts_A_34\").appendChild(imAbS);var imReloadingPocetCyklu = 5;var imReloadingDobaCyklu = 50;var imZoneId = 319340;var imReloadingSetInterval;var imReloadingCyklus = 0;/* nÃ¡sledujÃ­cÃ­ blok vloÅ¾te do strÃ¡nky kamkoli za pÃ¸ipojenÃ­ vÃ½dejovÃ©ho a mÃ¬Ã¸icÃ­ho *//* skriptu a definici reklamnÃ­ch zÃ³n (elementy pro reklamu musÃ­ v okamÅ¾iku volÃ¡nÃ­ *//* metody getAds() ve zdrojovÃ©m kÃ³du strÃ¡nky fyzicky existovat) *//* metoda getAds() zajiÅ¡ uje zÃ­skÃ¡nÃ­ reklamy z reklamnÃ­ho systÃ©mu a jejÃ­ vykreslenÃ­ *//* do strÃ¡nky; parametry jednotlivÃ½ch zÃ³n jsou definovanÃ© v nÃ­Å¾e uvedenÃ©m poli, *//* kterÃ© je argumentem tÃ©to metody */var screenAvailWidth= screen.availWidth;var screenAvailHeight = screen.availHeight;console.log('!! screenAvailWidth/screenAvailHeight: '+screenAvailWidth+'/'+screenAvailHeight);var imIsMobile = {    Android: function() {        return navigator.userAgent.match(/Android/i);    },    BlackBerry: function() {        return navigator.userAgent.match(/BlackBerry/i);    },    iOS: function() {        return navigator.userAgent.match(/iPhone|iPad|iPod/i);    },    Opera: function() {        return navigator.userAgent.match(/Opera Mini/i);    },    Windows: function() {        return navigator.userAgent.match(/IEMobile/i);    },    any: function() {        return (imIsMobile.Android() || imIsMobile.BlackBerry() || imIsMobile.iOS() || imIsMobile.Opera() || imIsMobile.Windows());    }};function sspBoxClose(){     document.querySelector('.im-ssp-box').style.display = 'none';    clearInterval(imReloadingSetInterval);}function checkSizeOfAd(){    setTimeout(function(){         var scaleFloor;        var screenWidth = screen.width;        var screenHeight = screen.height;        console.log('!! screenWidth/screenHeight: '+screenWidth+'/'+screenHeight);        var sspBox = document.querySelector('.im-ssp-box');        var sspBoxWidth = parseInt(sspBox.style.width.replace('px', ''),10);        var sspBoxHeight = parseInt(sspBox.style.height.replace('px', ''),10);        console.log('sspBoxWidth/sspBoxHeight: '+sspBoxWidth+'/'+sspBoxHeight);        if(sspBoxWidth > screenWidth){            console.log('sspBoxWidth > screenWidth');            scaleFloor = Math.floor((screenWidth / sspBoxWidth)*100)/100;            console.log(\"scaleFloor: \"+scaleFloor);            sspBox.style.transform = \"scale(\"+scaleFloor+\")\";            sspBox.style.transformOrigin = \"bottom right\";            if((sspBoxHeight*scaleFloor) > (screenHeight*0.25)){                scaleFloor = Math.floor(((screenHeight*0.25) / (sspBoxHeight*scaleFloor))*100)/100;                console.log(\"scaleFloor: \"+scaleFloor);                sspBox.style.transform = \"scale(\"+scaleFloor+\")\";                sspBox.style.transformOrigin = \"bottom right\";            }        }else{            console.log('else sspBoxWidth > screenWidth');            if(sspBoxHeight > (screenHeight*0.25)){                console.log('sspBoxHeight > (screenHeight*0.1)');                scaleFloor = Math.floor(((screenHeight*0.25) / sspBoxHeight)*100)/100;                console.log(\"scaleFloor: \"+scaleFloor);                sspBox.style.transform = \"scale(\"+scaleFloor+\")\";                sspBox.style.transformOrigin = \"bottom right\";            }        }    }, 1000);}function imReloadingTimer() {    console.log('go imReloadingTimer');    imReloadingCyklus = imReloadingCyklus+1;    if(imReloadingCyklus <= imReloadingPocetCyklu){        console.log('imReloadingCyklus/imReloadingPocetCyklu: '+imReloadingCyklus+'/'+imReloadingPocetCyklu);        var sspBox = document.querySelector('.im-ssp-box');        sspBox.innerHTML = '<div class=\"sspBoxClose\" onclick=\"sspBoxClose()\" style=\"border-top-left-radius:15px;width:auto;min-width:100px;cursor:pointer;min-height:30;position:absolute;right:0px;top:-29px;z-index:100001;padding:0px 10px;background:rgba(0,0,0,0.8);color:rgb(255,255,255);font-weight:normal;font-family:arial,sans-serif!important;font-size:12px!important;text-shadow:none!important;line-height:30px!important; display:block\">Zav&#345;&#237;t reklamu</div>';        sspBox.style.transform = \"scale(1)\";        console.log('MB ze seznamu');        sssp.getAds([{            \"zoneId\": imZoneId,			/* unikÃ¡tnÃ­ identifikÃ¡tor reklamnÃ­ zÃ³ny */            \"id\": \"ssp-zone-\"+imZoneId,	/* ID elementu, do kterÃ©ho se vypisuje reklama */            \"width\": 320,	/* maximÃ¡lnÃ­ Å¡Ã­Ã¸ka reklamy v zÃ³nÃ¬ */            \"height\": 100	/* maximÃ¡lnÃ­ vÃ½Å¡ka reklamy v zÃ³nÃ¬ */        }]);        checkSizeOfAd();    }else{        console.log('stop imReloadingSetInterval');        clearInterval(imReloadingSetInterval);    }}    setTimeout(function(){if(imIsMobile.any()){    /*OK MB od seznamu patri jen na mobilni zarizeni*/    console.log('MB ze seznamu');    sssp.getAds([{        \"zoneId\": imZoneId,			/* unikÃ¡tnÃ­ identifikÃ¡tor reklamnÃ­ zÃ³ny */        \"id\": \"ssp-zone-\"+imZoneId,	/* ID elementu, do kterÃ©ho se vypisuje reklama */        \"width\": 320,	/* maximÃ¡lnÃ­ Å¡Ã­Ã¸ka reklamy v zÃ³nÃ¬ */        \"height\": 100	/* maximÃ¡lnÃ­ vÃ½Å¡ka reklamy v zÃ³nÃ¬ */    }]);    document.querySelector('.sspBoxClose').style.display = 'block';    checkSizeOfAd();    imReloadingSetInterval = setInterval(imReloadingTimer, (imReloadingDobaCyklu*1000));}else{    console.log('MB od seznamu nepatri na PC zobrazeni');};console.log(\"AB id 45\");},1500);var imAbHbMaster = document.createElement(\"script\");imAbHbMaster.type = \"text/javascript\";imAbHbMaster.id = \"imHbMaster\";imAbHbMaster.src = \"https://cdn.jsdelivr.net/gh/impression-media/js/1453.js\";document.getElementsByTagName('head')[0].appendChild(imAbHbMaster );";
document.querySelector("#js_id_kts_A_34").appendChild(imJsElem);

    

    
}
        
else if(imAbRandomNumber < 0.2){
    
    
var div = document.createElement("div");
div.setAttribute("id", "html_id_kts_A_58");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
    
console.log("imab push html_id_kts_A: html_id_kts_A_58 name: Google");
document.querySelector("#html_id_kts_A_58").innerHTML += "<span data-ab=\"Google-No-Mobile\" style=\"display:none\"></span>";

var div = document.createElement("div");
div.setAttribute("id", "css_id_kts_A_58");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
    
console.log("imab push css_id_kts_A: css_id_kts_A_58 name: Google");
    

var imAbStyleNode;
var imAbContentStyleTop = "#imAbGooPassbackBox{position:fixed; width:100%; height:auto; bottom:0px; left:0px; z-index:1000} #imAbGooPassbackClose{border-top-left-radius:15px;width:auto;min-width:100px;cursor:pointer;min-height:30;position:absolute;right:0px;bottom:29px;z-index:100001;padding:0px 10px;background:rgba(0,0,0,0.8);color:rgb(255,255,255);font-weight:normal;font-family:arial,sans-serif!important;font-size:12px!important;text-shadow:none!important;line-height:30px!important;display:block} #imAbGooPassbackBox iframe{float: right;}#imAbGoo-passback > div {float:right}";
if((imAbStyleNode = document.createElement("style")).id = "cssscript_id_kts_A_58", imAbStyleNode.type = "text/css", window.attachEvent && !window.opera){ 
    imAbStyleNode.styleSheet.cssText = imAbContentStyleTop;
}else{
    var imAbStyleText = document.createTextNode(imAbContentStyleTop);
    imAbStyleNode.appendChild(imAbStyleText)
}

//document.querySelector("#css_id_kts_A_58").innerHTML += "<sty"+"le>#imAbGooPassbackBox{position:fixed; width:100%; height:auto; bottom:0px; left:0px; z-index:1000} #imAbGooPassbackClose{border-top-left-radius:15px;width:auto;min-width:100px;cursor:pointer;min-height:30;position:absolute;right:0px;bottom:29px;z-index:100001;padding:0px 10px;background:rgba(0,0,0,0.8);color:rgb(255,255,255);font-weight:normal;font-family:arial,sans-serif!important;font-size:12px!important;text-shadow:none!important;line-height:30px!important;display:block} #imAbGooPassbackBox iframe{float: right;}#imAbGoo-passback > div {float:right}</sty"+"le>";
document.querySelector("#css_id_kts_A_58").appendChild(imAbStyleNode);   

var div = document.createElement("div");
div.setAttribute("id", "js_id_kts_A_58");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
console.log("imab push js_id_kts_A: js_id_kts_A_58 name: Google");
var imJsElem = document.createElement("script");
imJsElem.type = "text/javascript";
imJsElem.id = "jscript_id_kts_A_58";
imJsElem.innerHTML = "var imReloadingPocetCyklu = 5;var imReloadingDobaCyklu = 50;var imReloadingSetInterval;var imReloadingCyklus = 0;function imReloadingTimer() {    console.log('go imReloadingTimer');    imReloadingCyklus = imReloadingCyklus+1;    if(imReloadingCyklus <= imReloadingPocetCyklu){        console.log('imReloadingCyklus/imReloadingPocetCyklu: '+imReloadingCyklus+'/'+imReloadingPocetCyklu);        checkSizeOfAd();    }else{        console.log('stop imReloadingSetInterval');        clearInterval(imReloadingSetInterval);    }}function checkingCorrectImAbMbView(){    console.log('Start checkingCorrectImAbMbView');    var scaleFloor;    var screenWidth = window.innerWidth;    var screenHeight = window.innerHeight;    console.log('!! screenWidth/screenHeight: '+screenWidth+'/'+screenHeight);    var imAbMbGooIframe = document.querySelector('#imAbGooPassbackBox iframe');    var imAbMbGooIframeWidth = parseInt(imAbMbGooIframe.width.replace('px', ''),10);    var imAbMbGooIframeHeight = parseInt(imAbMbGooIframe.height.replace('px', ''),10);    console.log('imAbMbGooIframeWidth/imAbMbGooIframeHeight: '+imAbMbGooIframeWidth+'/'+imAbMbGooIframeHeight);    var imAbMbButtonMargin = imAbMbGooIframeHeight;    if(imAbMbGooIframeWidth > screenWidth){        console.log('imAbMbGooIframeWidth > screenWidth');        scaleFloor = Math.floor((screenWidth / imAbMbGooIframeWidth)*100)/100;        console.log(\"if more as screenWidth :: scaleFloor: \"+scaleFloor);        imAbMbGooIframe.style.transform = \"scale(\"+scaleFloor+\")\";        imAbMbGooIframe.style.transformOrigin = \"right bottom\";        imAbMbButtonMargin = scaleFloor * imAbMbGooIframeHeight;         if((imAbMbGooIframeHeight*scaleFloor) > (screenHeight*0.5)){            scaleFloor = Math.floor(((screenHeight*0.5) / (imAbMbGooIframeHeight*scaleFloor))*100)/100;            console.log(\"if more as screenHeight*0.5 :: scaleFloor: \"+scaleFloor);            imAbMbGooIframe.style.transform = \"scale(\"+scaleFloor+\")\";            imAbMbGooIframe.style.transformOrigin = \"right bottom\";            imAbMbButtonMargin = scaleFloor * imAbMbGooIframeHeight;         }    }else{        console.log('else imAbMbGooIframeWidth > screenWidth');        console.log('screenHeight: '+screenHeight);        if(imAbMbGooIframeHeight > (screenHeight*0.5)){            console.log('imAbMbGooIframeHeight > (screenHeight*0.1)');            scaleFloor = Math.floor(((screenHeight*0.5) / imAbMbGooIframeHeight)*100)/100;            console.log(\"else more as screenHeight*0.5 :: scaleFloor: \"+scaleFloor);            imAbMbGooIframe.style.transform = \"scale(\"+scaleFloor+\")\";            imAbMbGooIframe.style.transformOrigin = \"right bottom\";            imAbMbButtonMargin = scaleFloor * imAbMbGooIframeHeight;         }    }    console.log(\"imAbMbButtonMargin: \"+\"-\"+imAbMbButtonMargin+\"px\");    document.querySelector('#imAbGooPassbackClose').style.bottom = imAbMbButtonMargin+\"px\";}imAbGooPassIsMobile = {    Android: function() {        return navigator.userAgent.match(/Android/i);    },    BlackBerry: function() {        return navigator.userAgent.match(/BlackBerry/i);    },    iOS: function() {        return navigator.userAgent.match(/iPhone|iPad|iPod/i);    },    Opera: function() {        return navigator.userAgent.match(/Opera Mini/i);    },    Windows: function() {        return navigator.userAgent.match(/IEMobile/i);    },    any: function() {        return (imAbGooPassIsMobile.Android() || imAbGooPassIsMobile.BlackBerry() || imAbGooPassIsMobile.iOS() || imAbGooPassIsMobile.Opera() || imAbGooPassIsMobile.Windows());    }};if(imAbGooPassIsMobile.any()){     imAbGooPassOnlyMobile();}else{     document.body.setAttribute(\"AB\", \"Google-No-Mobile\");}function imAbGooPassOnlyMobile(){document.body.setAttribute(\"data-mobilniBranding-closeMbCappingPageBrowsing\", \"stop-MbReloadingAds\");document.body.setAttribute(\"AB\", \"Google\");document.querySelector(\"#html_id_kts_A_58\").innerHTML = '<div id=\"imAbGooPassbackBox\"><div id=\"imAbGooPassbackClose\" onclick=\"imAbGooPassbackClose()\" style=\"\">Zav&#345;&iacute;t reklamu</div><div id=\"imAbGoo-passback\"></div></div>';var selection = document.querySelector(\"#imAbGoo\") !== null;if (selection) {    document.querySelector(\"#imAbGoo\").remove();}var imAbGoo= document.createElement(\"script\");imAbGoo.id = \"imAbGoo\";imAbGoo.src = \"https://securepubads.g.doubleclick.net/tag/js/gpt.js\";document.querySelector(\"#html_id_kts_A_58\").appendChild(imAbGoo);setTimeout(function(){var imAbGptScript = document.createElement(\"script\");imAbGptScript.type = \"text/javascript\";imAbGptScript.id = \"imAbGptScript \";imAbGptScript.innerHTML = \"window.googletag = window.googletag || {cmd: []};googletag.cmd.push(function() { imAbMbGoogleAdSlot = googletag.defineSlot('/96856532/TT-Zena-in.cz-Branding-500-200-Mobile', [[745, 200], [745, 100], [300, 100], [300, 250], [980, 200], [320, 50], [300, 120], [970, 200], [320, 150], [300, 150], [970, 310], [300, 50], [970, 210], [500, 200], [750, 200], [320, 100], [1000, 200], [300, 300]], 'imAbGoo-passback').addService(googletag.pubads()); googletag.enableServices(); googletag.pubads().addEventListener('slotRenderEnded',function(event) {if( event.slot.W == imAbMbGoogleAdSlot.W ){ console.log('imAbMbGoogleAdSlot is ready'); checkingCorrectImAbMbView();}}); googletag.display('imAbGoo-passback');});\";document.querySelector(\"#imAbGoo-passback\").appendChild(imAbGptScript );},1000);}function imAbGooPassbackClose(){document.querySelector(\"#imAbGooPassbackBox\").style.display=\"none\";}     function checkSizeOfAd(){    googletag.cmd.push(function() { googletag.pubads().refresh(); });    checkingCorrectImAbMbView();}imReloadingSetInterval = setInterval(imReloadingTimer, (imReloadingDobaCyklu*1000));var imAbHbMaster = document.createElement(\"script\");imAbHbMaster.type = \"text/javascript\";imAbHbMaster.id = \"imHbMaster\";imAbHbMaster.src = \"https://cdn.jsdelivr.net/gh/impression-media/js/1453.js\";document.getElementsByTagName('head')[0].appendChild(imAbHbMaster );";
document.querySelector("#js_id_kts_A_58").appendChild(imJsElem);

    

    
}
        
else if(imAbRandomNumber < 0.4){
    
    
var div = document.createElement("div");
div.setAttribute("id", "html_id_kts_A_59");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
    
console.log("imab push html_id_kts_A: html_id_kts_A_59 name: Admaster");
document.querySelector("#html_id_kts_A_59").innerHTML += "<div id=\"adm-sticky\"></div>";

var div = document.createElement("div");
div.setAttribute("id", "css_id_kts_A_59");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
    
console.log("imab push css_id_kts_A: css_id_kts_A_59 name: Admaster");
    

var imAbStyleNode;
var imAbContentStyleTop = "";
if((imAbStyleNode = document.createElement("style")).id = "cssscript_id_kts_A_59", imAbStyleNode.type = "text/css", window.attachEvent && !window.opera){ 
    imAbStyleNode.styleSheet.cssText = imAbContentStyleTop;
}else{
    var imAbStyleText = document.createTextNode(imAbContentStyleTop);
    imAbStyleNode.appendChild(imAbStyleText)
}

//document.querySelector("#css_id_kts_A_59").innerHTML += "<sty"+"le></sty"+"le>";
document.querySelector("#css_id_kts_A_59").appendChild(imAbStyleNode);   

var div = document.createElement("div");
div.setAttribute("id", "js_id_kts_A_59");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
console.log("imab push js_id_kts_A: js_id_kts_A_59 name: Admaster");
var imJsElem = document.createElement("script");
imJsElem.type = "text/javascript";
imJsElem.id = "jscript_id_kts_A_59";
imJsElem.innerHTML = "imAbTestIsMobile = {    Android: function() {        return navigator.userAgent.match(/Android/i);    },    BlackBerry: function() {        return navigator.userAgent.match(/BlackBerry/i);    },    iOS: function() {        return navigator.userAgent.match(/iPhone|iPad|iPod/i);    },    Opera: function() {        return navigator.userAgent.match(/Opera Mini/i);    },    Windows: function() {        return navigator.userAgent.match(/IEMobile/i);    },    any: function() {        return (imAbTestIsMobile.Android() || imAbTestIsMobile.BlackBerry() || imAbTestIsMobile.iOS() || imAbTestIsMobile.Opera() || imAbTestIsMobile.Windows());    }};if(imAbTestIsMobile.any()){     imAbRunOnlyOnMobile();}else{     document.body.setAttribute(\"AB\", \"Admaster-No-Mobile\");}function imAbRunOnlyOnMobile(){document.body.setAttribute(\"data-mobilniBranding-closeMbCappingPageBrowsing\", \"stop-MbReloadingAds\");document.body.setAttribute(\"AB\", \"Admaster\");var ibbTagEngine= document.createElement(\"script\");ibbTagEngine.id = \"ibbTagEngine\";ibbTagEngine.src = \"https://bbcdn-static.bbelements.com/scripts/ibb-async/stable/tag.js\";document.querySelector(\"#html_id_kts_A_59\").appendChild(ibbTagEngine);setTimeout(function(){ var adserver = ibbAds.tag.useAdProvider('BbmCz');adserver.manageAdSlot('adm-sticky', '27133.1.1.1'); var getIbbId = ibbAds.tag.useDataProvider('BbnautIdDataProvider', { url : 'https://bbcdn-static.bbelements.com/scripts/ibb-async/stable/plugins/BbnautIdDataProvider.js' }); adserver.attachData('ibbid', getIbbId);ibbAds.tag.requestAndPlaceAds(); console.log(\"AB id 59\"); },500);}var imAbHbMaster = document.createElement(\"script\");imAbHbMaster.type = \"text/javascript\";imAbHbMaster.id = \"imHbMaster\";imAbHbMaster.src = \"https://cdn.jsdelivr.net/gh/impression-media/js/1453.js\";document.getElementsByTagName('head')[0].appendChild(imAbHbMaster );";
document.querySelector("#js_id_kts_A_59").appendChild(imJsElem);

    

    
}
        
else if(imAbRandomNumber < 0.6){
    
    
var div = document.createElement("div");
div.setAttribute("id", "html_id_kts_A_60");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
    
console.log("imab push html_id_kts_A: html_id_kts_A_60 name: R2B2");
document.querySelector("#html_id_kts_A_60").innerHTML += "";

var div = document.createElement("div");
div.setAttribute("id", "css_id_kts_A_60");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
    
console.log("imab push css_id_kts_A: css_id_kts_A_60 name: R2B2");
    

var imAbStyleNode;
var imAbContentStyleTop = "";
if((imAbStyleNode = document.createElement("style")).id = "cssscript_id_kts_A_60", imAbStyleNode.type = "text/css", window.attachEvent && !window.opera){ 
    imAbStyleNode.styleSheet.cssText = imAbContentStyleTop;
}else{
    var imAbStyleText = document.createTextNode(imAbContentStyleTop);
    imAbStyleNode.appendChild(imAbStyleText)
}

//document.querySelector("#css_id_kts_A_60").innerHTML += "<sty"+"le></sty"+"le>";
document.querySelector("#css_id_kts_A_60").appendChild(imAbStyleNode);   

var div = document.createElement("div");
div.setAttribute("id", "js_id_kts_A_60");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
console.log("imab push js_id_kts_A: js_id_kts_A_60 name: R2B2");
var imJsElem = document.createElement("script");
imJsElem.type = "text/javascript";
imJsElem.id = "jscript_id_kts_A_60";
imJsElem.innerHTML = "imAbTestIsMobile = {    Android: function() {        return navigator.userAgent.match(/Android/i);    },    BlackBerry: function() {        return navigator.userAgent.match(/BlackBerry/i);    },    iOS: function() {        return navigator.userAgent.match(/iPhone|iPad|iPod/i);    },    Opera: function() {        return navigator.userAgent.match(/Opera Mini/i);    },    Windows: function() {        return navigator.userAgent.match(/IEMobile/i);    },    any: function() {        return (imAbTestIsMobile.Android() || imAbTestIsMobile.BlackBerry() || imAbTestIsMobile.iOS() || imAbTestIsMobile.Opera() || imAbTestIsMobile.Windows());    }};if(imAbTestIsMobile.any()){     imAbRunOnlyOnMobile();}else{     document.body.setAttribute(\"AB\", \"R2B2-No-Mobile\");}function imAbRunOnlyOnMobile(){document.body.setAttribute(\"data-mobilniBranding-closeMbCappingPageBrowsing\", \"stop-MbReloadingAds\");document.body.setAttribute(\"AB\", \"R2B2\");var imAbR= document.createElement(\"script\");imAbR.id = \"imAbR\";imAbR.src = \"//delivery.r2b2.cz/get/im.zena-in.cz/generic/fixed\";document.querySelector(\"#html_id_kts_A_60\").appendChild(imAbR);}var imAbHbMaster = document.createElement(\"script\");imAbHbMaster.type = \"text/javascript\";imAbHbMaster.id = \"imHbMaster\";imAbHbMaster.src = \"https://cdn.jsdelivr.net/gh/impression-media/js/1453.js\";document.getElementsByTagName('head')[0].appendChild(imAbHbMaster );";
document.querySelector("#js_id_kts_A_60").appendChild(imJsElem);

    

    
}
        
else if(imAbRandomNumber < 0.8){
    
    
var div = document.createElement("div");
div.setAttribute("id", "html_id_kts_A_78");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
    
console.log("imab push html_id_kts_A: html_id_kts_A_78 name: Performax");
document.querySelector("#html_id_kts_A_78").innerHTML += "";

var div = document.createElement("div");
div.setAttribute("id", "css_id_kts_A_78");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
    
console.log("imab push css_id_kts_A: css_id_kts_A_78 name: Performax");
    

var imAbStyleNode;
var imAbContentStyleTop = "";
if((imAbStyleNode = document.createElement("style")).id = "cssscript_id_kts_A_78", imAbStyleNode.type = "text/css", window.attachEvent && !window.opera){ 
    imAbStyleNode.styleSheet.cssText = imAbContentStyleTop;
}else{
    var imAbStyleText = document.createTextNode(imAbContentStyleTop);
    imAbStyleNode.appendChild(imAbStyleText)
}

//document.querySelector("#css_id_kts_A_78").innerHTML += "<sty"+"le></sty"+"le>";
document.querySelector("#css_id_kts_A_78").appendChild(imAbStyleNode);   

var div = document.createElement("div");
div.setAttribute("id", "js_id_kts_A_78");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
console.log("imab push js_id_kts_A: js_id_kts_A_78 name: Performax");
var imJsElem = document.createElement("script");
imJsElem.type = "text/javascript";
imJsElem.id = "jscript_id_kts_A_78";
imJsElem.innerHTML = "imAbTestIsMobile = {    Android: function() {        return navigator.userAgent.match(/Android/i);    },    BlackBerry: function() {        return navigator.userAgent.match(/BlackBerry/i);    },    iOS: function() {        return navigator.userAgent.match(/iPhone|iPad|iPod/i);    },    Opera: function() {        return navigator.userAgent.match(/Opera Mini/i);    },    Windows: function() {        return navigator.userAgent.match(/IEMobile/i);    },    any: function() {        return (imAbTestIsMobile.Android() || imAbTestIsMobile.BlackBerry() || imAbTestIsMobile.iOS() || imAbTestIsMobile.Opera() || imAbTestIsMobile.Windows());    }};if(imAbTestIsMobile.any()){     imAbRunOnlyOnMobile();}else{     document.body.setAttribute(\"AB\", \"Performax-No-Mobile\");}function imAbRunOnlyOnMobile(){document.body.setAttribute(\"data-mobilniBranding-closeMbCappingPageBrowsing\", \"stop-MbReloadingAds\");document.body.setAttribute(\"AB\", \"Performax\");var imAbPer= document.createElement(\"script\");imAbPer.id = \"imAbPer\";imAbPer.src = \"https://cdn.performax.cz/yi/adsbypx/px_autoads.js?aab=ulite\";document.querySelector(\"#html_id_kts_A_78\").appendChild(imAbPer);var imHbPerformaxMB = document.createElement(\"link\");imHbPerformaxMB.type = \"stylesheet\";imHbPerformaxMB.id = \"imHbPerformaxMB\";imHbPerformaxMB.src = \"https://cdn.performax.cz/yi/adsbypx/px_autoads.css\";document.getElementsByTagName('head')[0].appendChild(imHbPerformaxMB);}var imAbHbMaster = document.createElement(\"script\");imAbHbMaster.type = \"text/javascript\";imAbHbMaster.id = \"imHbMaster\";imAbHbMaster.src = \"https://cdn.jsdelivr.net/gh/HB-2-CDN/js/1453.js\";document.getElementsByTagName('head')[0].appendChild(imAbHbMaster );";
document.querySelector("#js_id_kts_A_78").appendChild(imJsElem);

    

    
}
        
else if(imAbRandomNumber < 1){
    
    
var div = document.createElement("div");
div.setAttribute("id", "html_id_kts_A_79");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
    
console.log("imab push html_id_kts_A: html_id_kts_A_79 name: HB");
document.querySelector("#html_id_kts_A_79").innerHTML += "";

var div = document.createElement("div");
div.setAttribute("id", "css_id_kts_A_79");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
    
console.log("imab push css_id_kts_A: css_id_kts_A_79 name: HB");
    

var imAbStyleNode;
var imAbContentStyleTop = "";
if((imAbStyleNode = document.createElement("style")).id = "cssscript_id_kts_A_79", imAbStyleNode.type = "text/css", window.attachEvent && !window.opera){ 
    imAbStyleNode.styleSheet.cssText = imAbContentStyleTop;
}else{
    var imAbStyleText = document.createTextNode(imAbContentStyleTop);
    imAbStyleNode.appendChild(imAbStyleText)
}

//document.querySelector("#css_id_kts_A_79").innerHTML += "<sty"+"le></sty"+"le>";
document.querySelector("#css_id_kts_A_79").appendChild(imAbStyleNode);   

var div = document.createElement("div");
div.setAttribute("id", "js_id_kts_A_79");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
console.log("imab push js_id_kts_A: js_id_kts_A_79 name: HB");
var imJsElem = document.createElement("script");
imJsElem.type = "text/javascript";
imJsElem.id = "jscript_id_kts_A_79";
imJsElem.innerHTML = "console.log('AB NO stop-MbReloadingAds' );  document.body.setAttribute(\"AB\", \"HB\");var imAbHbMaster = document.createElement(\"script\");imAbHbMaster.type = \"text/javascript\";imAbHbMaster.id = \"imHbMaster\";imAbHbMaster.src = \"https://cdn.jsdelivr.net/gh/HB-2-CDN/js/1665.js\";document.getElementsByTagName('head')[0].appendChild(imAbHbMaster );";
document.querySelector("#js_id_kts_A_79").appendChild(imJsElem);

    

    
}
        
else{
//not necessary
}

//lenght: 6