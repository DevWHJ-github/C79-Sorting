studentarray1=[];
function submit()
{
var n1 = document.getElementById("student1").value;
var n2 = document.getElementById("student2").value;
var n3 = document.getElementById("student3").value;
var n4 = document.getElementById("student4").value;
studentarray1.push(n1);
studentarray1.push(n2);
studentarray1.push(n3);
studentarray1.push(n4);
console.log(studentarray1);
document.getElementById("display_name").innerHTML=studentarray1;
document.getElementById("submitbutton").style.display="none";
document.getElementById("sortbutton").style.display="inline-block";


}
function sorting()
{
studentarray1.sort();
console.log(studentarray1);
document.getElementById("display_name").innerHTML=studentarray1;


}
