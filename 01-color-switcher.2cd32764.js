const t=document.querySelector("button[data-start]");t.addEventListener("click",(function(e){function n(){t.setAttribute("disabled",!0),document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,setInterval(n,1e3)}document.querySelector("button[data-stop]").addEventListener("click",(function(e){t.removeAttribute("disabled"),clearInterval(n)}))}));
//# sourceMappingURL=01-color-switcher.2cd32764.js.map