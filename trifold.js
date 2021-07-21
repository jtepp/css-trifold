for (let p of document.getElementsByClassName("page")) {
    p.onclick = function (e) {
        if (p.id == "p3") {
            document.querySelector("#book").classList.toggle("flipped")
        } else {
            p.classList.toggle("flipped");
            for (let pel of document.getElementsByClassName("page")) {
                pel.classList.remove("top")
            }
            p.classList.add("top")
        }
    }
}