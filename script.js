function checkQuiz() {

let score = 0;

if(document.getElementById("q1").value == "1"){
score++;
}

if(document.getElementById("q2").value == "1"){
score++;
}

if(score >= 2){
document.getElementById("result").innerHTML =
"✅ تم اجتياز الاختبار";
}
else{
document.getElementById("result").innerHTML =
"❌ لم تجتز الاختبار";
}

}
