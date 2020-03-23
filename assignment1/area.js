function area() {
    var fs = document.getElementById("exampleInputEmail1").value;
    var ss = document.getElementById("exampleInputPassword1").value;
    var ts = document.getElementById("exampleInputPassword2").value;
    var s = (fs + ss + ts) / 2;

    var area1 = Math.sqrt(s * ((s - fs) * (s - ss) * (s - ts)));
    document.getElementById('result').innerText = area1;
}