!function(){var t=document.querySelector("button[data-start]");t.addEventListener("click",(function(e){setInterval((function(){t.setAttribute("disabled",!0),document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),document.querySelector("button[data-stop]").addEventListener("click",(function(e){t.removeAttribute("disabled"),clearInterval(null)}))}();
//# sourceMappingURL=01-color-switcher.849b93bd.js.map