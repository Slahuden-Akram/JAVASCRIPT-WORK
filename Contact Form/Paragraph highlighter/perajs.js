/*function highlight() {
    var text = document.getElementById('1').innerHTML;
    console.log(text);
    var splitted_text = text.split(" ");
    console.log(splitted_text[69])




    if (splitted_text.length <= 8) {
        console.log("greater");
        return false;
    } else {
        console.log("Small");
    }
}*/
function highlight() {
    var str = document.getElementById("1").innerText;
    var myArray = str.split(" ");
    var str1 = ' ';
    for (var a = 0; a < myArray.length; a++) {
        if (myArray[a].length >= 8) {
            str1 = str1 + "<mark>" + myArray[a] + "</mark>" + "\t";
        } else {
            str1 = str1 + myArray[a] + "   ";
        }
        document.getElementById("1").innerHTML = str1;
    }
}