const styleSwitcher = document.getElementById("styleSwitcher");

styleSwitcher.onclick = function () {

    if (styleSwitcher.textContent === "Make it Modern") {

        document.getElementById("css").setAttribute("href", "modern.css");

        styleSwitcher.textContent = "Make it Retro";

    } else if (styleSwitcher.textContent === "Make it Retro") {

        styleSwitcher.textContent = "Make it Modern";

        document.getElementById("css").setAttribute("href", "retro.css");

    }

}

console.log(styleSwitcher);
console.log(document.getElementById("css"));