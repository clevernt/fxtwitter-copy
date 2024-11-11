// ==UserScript==
// @name         FXTwitter Copy
// @match        https://twitter.com/*
// @match        https://x.com/*
// @noframes
// ==/UserScript==

document.addEventListener('copy', function(e){
  var selectedText = window.getSelection().toString();
  var replacedText = selectedText.replace(/(x\.com|twitter\.com)/g, 'fxtwitter.com');
  e.clipboardData.setData('text/plain', replacedText);
  e.preventDefault();
});
