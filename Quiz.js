function check(){

var valid=true;

    if (document.form.recipe.value=='')
        {
            alert('Please fill in your recipe title');
            document.form.recipe.focus();
            valid=false;
        }
    if (document.form.myName.value=='')
        {
            alert('Please fill in your Name');
            document.form.myName.focus();
            valid=false;
        }
    if ( (document.form.myGender[0].checked==false) 
    && (document.form.myGender[1].checked==false) 
    && (document.form.myGender[2].checked==false))
    {
            alert ('Please choose your gender');
                       valid=false;
    }
    return valid; 
}