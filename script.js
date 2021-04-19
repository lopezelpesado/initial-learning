let styleSwitcher = document.getElementById("styleSwitcher");

styleSwticher.onclick = function () {

    if (styleSwticher.textContent === "Make it Modern") {

        document.getElementById("css").setAttribute("id", "");

        styleSwticher.textContent = "Make it Retro";

    } /*else if (styleSwticher.textContent === "Make it Retro") {

        styleSwticher.textContent = "Make it Retro";

    }*/

}