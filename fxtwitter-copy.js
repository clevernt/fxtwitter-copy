// ==UserScript==
// @name         FXTwitter Copy
// @match        https://twitter.com/*
// @noframes
// ==/UserScript==

document.addEventListener('copy', function(e){
  var text = window.getSelection().toString().replace('twitter.com', 'fxtwitter.com');
  e.clipboardData.setData('text/plain', text);
  e.preventDefault();
});