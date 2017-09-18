#### You can use this package just via emmbed the 'setFontSize_onresize.js' into the script tag in html.
And call the window.setFontSize_onresize(designWidth) to set fontSize of document.documentElement.style || document.body.style.


#### Or you can paste the code below to your script, and ensure it will be execute. (use.js is the similar content to these below code)
```
var designWidth = 1024; //this variable can be assign as your design width exact, if you pass nothing, 1024 will be default value.

var setFontSizeScirpt = document.createElement('script');

setFontSizeScirpt.src = './node_modules/set-font-size-onresize/setFontSize_onresize.js'; //this path must relative your via html include current javascript file, or it would not work.

setFontSizeScirpt.type = 'text/javascript';
document.documentElement.appendChild(setFontSizeScirpt);
```

Enjoy it.

