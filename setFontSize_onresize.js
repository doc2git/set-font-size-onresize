var setFontSize_onresize = function (designWidth) {
    function setFontSize() {
        var screenDimension = document.documentElement || document.body;
        var screenW = screenDimension.clientWidth;
        document.documentElement.style.fontSize = screenW / designWidth * 100 + 'px';
    }
    setFontSize();
    window.onresize = setFontSize;
};
window.setFontSize_onresize = setFontSize_onresize;
