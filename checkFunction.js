// JavaScript Document
function check() {


    var c=0;
    var q1=document.Quiz.question1.value;
    var q2=document.Quiz.question2.value;
    var q3=document.Quiz.question3.value;
    var names;

    if (q1=="Muhammad shazwan bin shairulhyzam") {c++}
    if (q2=="You don't always need a plan. Sometimes you just need to breathe, trust, let go and see what happens.") {c++}
    if (q3=="I and II") {c++}

    names=document.Quiz.Name.value

    alert("Nice try " + names + ",you got " + c + "/3");

    var valid=true;

    if (document.Quiz.Name.value=='')
        {
            alert('Please fill in your name');
            document.Quiz.Name.focus();
            valid=false;
        }
    if (document.Quiz.email.value=='')
        {
            alert('Please fill in your email.');
            document.Quiz.email.focus();
            valid=false;
        }
    return valid;
}