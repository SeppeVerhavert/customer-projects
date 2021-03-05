$(document).ready(function() {
    App.functions.onSurveyLoaded(function() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.innerHTML = "return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)}function sendDimensionsToParent()var iframeDimensions_New={'width':window.innerWidth,'height':getMyHeight()};if((iframeDimensions_New.width!=iframeDimensions_Old.width)||(iframeDimensions_New.height!=iframeDimensions_Old.height)){window.parent.postMessage(iframeDimensions_New,'*');iframeDimensions_Old=iframeDimensions_New;}}window.addEventListener('load',function(){iframeDimensions_Old={'width': window.innerWidth, 'height':getMyHeight()};window.parent.postMessage(iframeDimensions_Old,'*');if (window.MutationObserver){var observer=new MutationObserver(sendDimensionsToParent);config={attributes:true,attributeOldValue:false,characterData:true,characterDataOldValue:false,childList:true,subtree:true};observer.observe(document.body,config);}else{window.setInterval(sendDimensionsToParent,300);}});";
        document.head.appendChild(script);
    });
});