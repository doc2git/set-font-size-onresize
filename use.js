var designWidth = 1024; //this variable can be assign as your design width exact, if you pass nothing, 1024 will be default value.

var setFontSizeScirpt = document.createElement('script');

setFontSizeScirpt.src = './node_modules/set-font-size-onresize/setFontSize_onresize.js'; //this path must relative your via html include current javascript file, or it would not work.

setFontSizeScirpt.type = 'text/javascript';
document.documentElement.appendChild(setFontSizeScirpt);
