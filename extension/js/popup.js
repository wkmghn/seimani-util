﻿//window.onload = function () {
    //var el = document.getElementById("hello");
    //el.addEventListener("click", function () {
        //alert("外部JavaScriptファイル");
    //}, false);
//};


//var elem = document.getElementById("main_game");
//var elem = document.getElementsByName("cocos").length;
//var elem = document.querySelector("#uber");
//alert(elem);
//alert(elem.length);
//alert(elem.innerHTML);
//console.log(elem);

//console.error("TestError");
//alert(elem);

chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
    var tab = tabs[0];
    console.log(tab);
    chrome.tabs.executeScript(tab.tabId, { file: "js/page_action.js" });
});
