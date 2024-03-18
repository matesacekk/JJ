function addEntry() {
    var diary = document.getElementById("diar");
    var entry = document.createElement("div");
    entry.className = "vstup";
    var input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Záznam...";
    var button = document.createElement("button");
    button.textContent = "Odebrat";
    button.className = "remove";
    button.onclick = function() {
        diary.removeChild(entry);
    };
    entry.appendChild(input);
    entry.appendChild(button);
    diary.appendChild(entry);
}
