while (1) {
    var min = 1;
    var max = 10;
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    var temp = Number(prompt("enter a number"));
    if (temp === random) {
        alert("Good Work");
    } else {
        alert("not matched")
    }
}