function getParagraph1(){
    var input = [];
 for(var i = 1;i <=6 ; i++)   
 {
inputs.push(document.getElementById(para_1 + i).value);
inputs.join = ". ";
document.getElementById("showParagraph1").innerHTML = inputs.join(". ")
 }
}