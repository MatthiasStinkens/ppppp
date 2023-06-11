let naamElement = document.querySelector(".mijn_naam");

naamElement.addEventListener("mouseover", function() {
    this.style.color = "#34495e";
});

naamElement.addEventListener("mouseout", function() {
    this.style.color = "white";
});
