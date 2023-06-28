/* Version: A_01 - 28.06. 2023 - 15:04:30 */


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

if(imAbRandomNumber < 0.02){
    
    
var div = document.createElement("div");
div.setAttribute("id", "html_id_kts_A_32");
document.querySelector("body").insertAdjacentElement("afterend", div);
    
console.log("imab push html_id_kts_A: html_id_kts_A_32 name: Google");
document.querySelector("#html_id_kts_A_32").innerHTML += "<span data-ab=\"Google-No-Mobile\" style=\"display:none\"></span>";

var div = document.createElement("div");
div.setAttribute("id", "css_id_kts_A_32");
document.querySelector("body").insertAdjacentElement("afterend", div);
    
console.log("imab push css_id_kts_A: css_id_kts_A_32 name: Google");
    

var imAbStyleNode;
var imAbContentStyleTop = "#imAbGooPassbackBox{position:fixed; width:100%; height:auto; bottom:0px; left:0px; z-index:1000} #imAbGooPassbackClose{border-top-left-radius:15px;width:auto;min-width:100px;cursor:pointer;min-height:30;position:absolute;right:0px;bottom:29px;z-index:100001;padding:0px 10px;background:rgba(0,0,0,0.8);color:rgb(255,255,255);font-weight:normal;font-family:arial,sans-serif!important;font-size:12px!important;text-shadow:none!important;line-height:30px!important;display:block} #imAbGooPassbackBox iframe{float: right;}#imAbGoo-passback > div {float:right}";
if((imAbStyleNode = document.createElement("style")).id = "cssscript_id_kts_A_32", imAbStyleNode.type = "text/css", window.attachEvent && !window.opera){ 
    imAbStyleNode.styleSheet.cssText = imAbContentStyleTop;
}else{
    var imAbStyleText = document.createTextNode(imAbContentStyleTop);
    imAbStyleNode.appendChild(imAbStyleText)
}

//document.querySelector("#css_id_kts_A_32").innerHTML += "<sty"+"le>#imAbGooPassbackBox{position:fixed; width:100%; height:auto; bottom:0px; left:0px; z-index:1000} #imAbGooPassbackClose{border-top-left-radius:15px;width:auto;min-width:100px;cursor:pointer;min-height:30;position:absolute;right:0px;bottom:29px;z-index:100001;padding:0px 10px;background:rgba(0,0,0,0.8);color:rgb(255,255,255);font-weight:normal;font-family:arial,sans-serif!important;font-size:12px!important;text-shadow:none!important;line-height:30px!important;display:block} #imAbGooPassbackBox iframe{float: right;}#imAbGoo-passback > div {float:right}</sty"+"le>";
document.querySelector("#css_id_kts_A_32").appendChild(imAbStyleNode);   

var div = document.createElement("div");
div.setAttribute("id", "js_id_kts_A_32");
document.querySelector("body").insertAdjacentElement("afterend", div);
console.log("imab push js_id_kts_A: js_id_kts_A_32 name: Google");
var imJsElem = document.createElement("script");
imJsElem.type = "text/javascript";
imJsElem.id = "jscript_id_kts_A_32";
imJsElem.innerHTML = "var imReloadingPocetCyklu = 5;var imReloadingDobaCyklu = 50;var imReloadingSetInterval;var imReloadingCyklus = 0;function imReloadingTimer() {    console.log('go imReloadingTimer');    imReloadingCyklus = imReloadingCyklus+1;    if(imReloadingCyklus <= imReloadingPocetCyklu){        console.log('imReloadingCyklus/imReloadingPocetCyklu: '+imReloadingCyklus+'/'+imReloadingPocetCyklu);        checkSizeOfAd();    }else{        console.log('stop imReloadingSetInterval');        clearInterval(imReloadingSetInterval);    }}function checkingCorrectImAbMbView(){    console.log('Start checkingCorrectImAbMbView');    var scaleFloor;    var screenWidth = window.innerWidth;    var screenHeight = window.innerHeight;    console.log('!! screenWidth/screenHeight: '+screenWidth+'/'+screenHeight);    var imAbMbGooIframe = document.querySelector('#imAbGooPassbackBox iframe');    var imAbMbGooIframeWidth = parseInt(imAbMbGooIframe.width.replace('px', ''),10);    var imAbMbGooIframeHeight = parseInt(imAbMbGooIframe.height.replace('px', ''),10);    console.log('imAbMbGooIframeWidth/imAbMbGooIframeHeight: '+imAbMbGooIframeWidth+'/'+imAbMbGooIframeHeight);    var imAbMbButtonMargin = imAbMbGooIframeHeight;    if(imAbMbGooIframeWidth > screenWidth){        console.log('imAbMbGooIframeWidth > screenWidth');        scaleFloor = Math.floor((screenWidth / imAbMbGooIframeWidth)*100)/100;        console.log(\"if more as screenWidth :: scaleFloor: \"+scaleFloor);        imAbMbGooIframe.style.transform = \"scale(\"+scaleFloor+\")\";        imAbMbGooIframe.style.transformOrigin = \"right bottom\";        imAbMbButtonMargin = scaleFloor * imAbMbGooIframeHeight;         if((imAbMbGooIframeHeight*scaleFloor) > (screenHeight*0.5)){            scaleFloor = Math.floor(((screenHeight*0.5) / (imAbMbGooIframeHeight*scaleFloor))*100)/100;            console.log(\"if more as screenHeight*0.5 :: scaleFloor: \"+scaleFloor);            imAbMbGooIframe.style.transform = \"scale(\"+scaleFloor+\")\";            imAbMbGooIframe.style.transformOrigin = \"right bottom\";            imAbMbButtonMargin = scaleFloor * imAbMbGooIframeHeight;         }    }else{        console.log('else imAbMbGooIframeWidth > screenWidth');        console.log('screenHeight: '+screenHeight);        if(imAbMbGooIframeHeight > (screenHeight*0.5)){            console.log('imAbMbGooIframeHeight > (screenHeight*0.1)');            scaleFloor = Math.floor(((screenHeight*0.5) / imAbMbGooIframeHeight)*100)/100;            console.log(\"else more as screenHeight*0.5 :: scaleFloor: \"+scaleFloor);            imAbMbGooIframe.style.transform = \"scale(\"+scaleFloor+\")\";            imAbMbGooIframe.style.transformOrigin = \"right bottom\";            imAbMbButtonMargin = scaleFloor * imAbMbGooIframeHeight;         }    }    console.log(\"imAbMbButtonMargin: \"+\"-\"+imAbMbButtonMargin+\"px\");    document.querySelector('#imAbGooPassbackClose').style.bottom = imAbMbButtonMargin+\"px\";}imAbGooPassIsMobile = {    Android: function() {        return navigator.userAgent.match(/Android/i);    },    BlackBerry: function() {        return navigator.userAgent.match(/BlackBerry/i);    },    iOS: function() {        return navigator.userAgent.match(/iPhone|iPad|iPod/i);    },    Opera: function() {        return navigator.userAgent.match(/Opera Mini/i);    },    Windows: function() {        return navigator.userAgent.match(/IEMobile/i);    },    any: function() {        return (imAbGooPassIsMobile.Android() || imAbGooPassIsMobile.BlackBerry() || imAbGooPassIsMobile.iOS() || imAbGooPassIsMobile.Opera() || imAbGooPassIsMobile.Windows());    }};if(imAbGooPassIsMobile.any()){     imAbGooPassOnlyMobile();}else{     document.body.setAttribute(\"AB\", \"Google-No-Mobile\");}function imAbGooPassOnlyMobile(){document.body.setAttribute(\"data-mobilniBranding-closeMbCappingPageBrowsing\", \"stop-MbReloadingAds\");document.body.setAttribute(\"AB\", \"Google\");document.querySelector(\"#html_id_kts_A_32\").innerHTML = '<div id=\"imAbGooPassbackBox\"><div id=\"imAbGooPassbackClose\" onclick=\"imAbGooPassbackClose()\" style=\"\">Zav&#345;&iacute;t reklamu</div><div id=\"imAbGoo-passback\"></div></div>';var selection = document.querySelector(\"#imAbGoo\") !== null;if (selection) {    document.querySelector(\"#imAbGoo\").remove();}var imAbGoo= document.createElement(\"script\");imAbGoo.id = \"imAbGoo\";imAbGoo.src = \"https://securepubads.g.doubleclick.net/tag/js/gpt.js\";document.querySelector(\"#html_id_kts_A_32\").appendChild(imAbGoo);setTimeout(function(){var imAbGptScript = document.createElement(\"script\");imAbGptScript.type = \"text/javascript\";imAbGptScript.id = \"imAbGptScript \";imAbGptScript.innerHTML = \"window.googletag = window.googletag || {cmd: []};googletag.cmd.push(function() { imAbMbGoogleAdSlot = googletag.defineSlot('/96856532/TT-Hyperinzerce-CW-Nestandard-mobile', [[745, 100], [1000, 200], [300, 300], [320, 100], [300, 150], [300, 250], [970, 200], [320, 50], [970, 310], [300, 120], [970, 210], [980, 200], [320, 150], [300, 50], [300, 100], [745, 200], [750, 200], [500, 200]], 'imAbGoo-passback').addService(googletag.pubads()); googletag.enableServices(); googletag.pubads().addEventListener('slotRenderEnded',function(event) {if( event.slot.W == imAbMbGoogleAdSlot.W ){ console.log('imAbMbGoogleAdSlot is ready'); checkingCorrectImAbMbView();}}); googletag.display('imAbGoo-passback');});\";document.querySelector(\"#imAbGoo-passback\").appendChild(imAbGptScript );},1000);}function imAbGooPassbackClose(){document.querySelector(\"#imAbGooPassbackBox\").style.display=\"none\";}     function checkSizeOfAd(){    googletag.cmd.push(function() { googletag.pubads().refresh(); });    checkingCorrectImAbMbView();}imReloadingSetInterval = setInterval(imReloadingTimer, (imReloadingDobaCyklu*1000));";
document.querySelector("#js_id_kts_A_32").appendChild(imJsElem);

    

    
}
        
else if(imAbRandomNumber < 0.04){
    
    
var div = document.createElement("div");
div.setAttribute("id", "html_id_kts_A_74");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
    
console.log("imab push html_id_kts_A: html_id_kts_A_74 name: Admaster");
document.querySelector("#html_id_kts_A_74").innerHTML += "<div id=\"adm-sticky\"></div>";

var div = document.createElement("div");
div.setAttribute("id", "css_id_kts_A_74");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
    
console.log("imab push css_id_kts_A: css_id_kts_A_74 name: Admaster");
    

var imAbStyleNode;
var imAbContentStyleTop = "";
if((imAbStyleNode = document.createElement("style")).id = "cssscript_id_kts_A_74", imAbStyleNode.type = "text/css", window.attachEvent && !window.opera){ 
    imAbStyleNode.styleSheet.cssText = imAbContentStyleTop;
}else{
    var imAbStyleText = document.createTextNode(imAbContentStyleTop);
    imAbStyleNode.appendChild(imAbStyleText)
}

//document.querySelector("#css_id_kts_A_74").innerHTML += "<sty"+"le></sty"+"le>";
document.querySelector("#css_id_kts_A_74").appendChild(imAbStyleNode);   

var div = document.createElement("div");
div.setAttribute("id", "js_id_kts_A_74");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
console.log("imab push js_id_kts_A: js_id_kts_A_74 name: Admaster");
var imJsElem = document.createElement("script");
imJsElem.type = "text/javascript";
imJsElem.id = "jscript_id_kts_A_74";
imJsElem.innerHTML = "imAbTestIsMobile = {    Android: function() {        return navigator.userAgent.match(/Android/i);    },    BlackBerry: function() {        return navigator.userAgent.match(/BlackBerry/i);    },    iOS: function() {        return navigator.userAgent.match(/iPhone|iPad|iPod/i);    },    Opera: function() {        return navigator.userAgent.match(/Opera Mini/i);    },    Windows: function() {        return navigator.userAgent.match(/IEMobile/i);    },    any: function() {        return (imAbTestIsMobile.Android() || imAbTestIsMobile.BlackBerry() || imAbTestIsMobile.iOS() || imAbTestIsMobile.Opera() || imAbTestIsMobile.Windows());    }};if(imAbTestIsMobile.any()){     imAbRunOnlyOnMobile();}else{     document.body.setAttribute(\"AB\", \"Admaster-No-Mobile\");}function imAbRunOnlyOnMobile(){document.body.setAttribute(\"data-mobilniBranding-closeMbCappingPageBrowsing\", \"stop-MbReloadingAds\");document.body.setAttribute(\"AB\", \"Admaster\");var ibbTagEngine= document.createElement(\"script\");ibbTagEngine.id = \"ibbTagEngine\";ibbTagEngine.src = \"https://bbcdn-static.bbelements.com/scripts/ibb-async/stable/tag.js\";document.querySelector(\"#html_id_kts_A_74\").appendChild(ibbTagEngine);setTimeout(function(){ var adserver = ibbAds.tag.useAdProvider('BbmCz');adserver.manageAdSlot('adm-sticky', '27202.1.1.1'); var getIbbId = ibbAds.tag.useDataProvider('BbnautIdDataProvider', { url : 'https://bbcdn-static.bbelements.com/scripts/ibb-async/stable/plugins/BbnautIdDataProvider.js' }); adserver.attachData('ibbid', getIbbId);ibbAds.tag.requestAndPlaceAds(); console.log(\"AB id 70\"); },500);}";
document.querySelector("#js_id_kts_A_74").appendChild(imJsElem);

    

    
}
        
else if(imAbRandomNumber < 0.14){
    
    
var div = document.createElement("div");
div.setAttribute("id", "html_id_kts_A_75");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
    
console.log("imab push html_id_kts_A: html_id_kts_A_75 name: R2b2");
document.querySelector("#html_id_kts_A_75").innerHTML += "";

var div = document.createElement("div");
div.setAttribute("id", "css_id_kts_A_75");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
    
console.log("imab push css_id_kts_A: css_id_kts_A_75 name: R2b2");
    

var imAbStyleNode;
var imAbContentStyleTop = "";
if((imAbStyleNode = document.createElement("style")).id = "cssscript_id_kts_A_75", imAbStyleNode.type = "text/css", window.attachEvent && !window.opera){ 
    imAbStyleNode.styleSheet.cssText = imAbContentStyleTop;
}else{
    var imAbStyleText = document.createTextNode(imAbContentStyleTop);
    imAbStyleNode.appendChild(imAbStyleText)
}

//document.querySelector("#css_id_kts_A_75").innerHTML += "<sty"+"le></sty"+"le>";
document.querySelector("#css_id_kts_A_75").appendChild(imAbStyleNode);   

var div = document.createElement("div");
div.setAttribute("id", "js_id_kts_A_75");
document.querySelector("body").insertAdjacentElement("afterbegin", div);
console.log("imab push js_id_kts_A: js_id_kts_A_75 name: R2b2");
var imJsElem = document.createElement("script");
imJsElem.type = "text/javascript";
imJsElem.id = "jscript_id_kts_A_75";
imJsElem.innerHTML = "imAbTestIsMobile = {    Android: function() {        return navigator.userAgent.match(/Android/i);    },    BlackBerry: function() {        return navigator.userAgent.match(/BlackBerry/i);    },    iOS: function() {        return navigator.userAgent.match(/iPhone|iPad|iPod/i);    },    Opera: function() {        return navigator.userAgent.match(/Opera Mini/i);    },    Windows: function() {        return navigator.userAgent.match(/IEMobile/i);    },    any: function() {        return (imAbTestIsMobile.Android() || imAbTestIsMobile.BlackBerry() || imAbTestIsMobile.iOS() || imAbTestIsMobile.Opera() || imAbTestIsMobile.Windows());    }};if(imAbTestIsMobile.any()){     imAbRunOnlyOnMobile();}else{     document.body.setAttribute(\"AB\", \"R2B2-No-Mobile\");}function imAbRunOnlyOnMobile(){document.body.setAttribute(\"data-mobilniBranding-closeMbCappingPageBrowsing\", \"stop-MbReloadingAds\");document.body.setAttribute(\"AB\", \"R2B2\");var imAbR= document.createElement(\"script\");imAbR.id = \"imAbR\";imAbR.src = \"//trackad.cz/get/im.hyperinzerce.cz/generic/fixed\";document.querySelector(\"#html_id_kts_A_75\").appendChild(imAbR);}";
document.querySelector("#js_id_kts_A_75").appendChild(imJsElem);

    

    
}
        
else if(imAbRandomNumber < 1){
    
    
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

//lenght: 4