function check()
{
    var valid=true;

    if (document.form.Name.value=='')
        {
            alert('Please fill in Recipe Title');
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
    &&     (document.form.myGender[1].checked==false) 
    &&     (document.form.myGender[2].checked==false))
    {
            alert ('Please choose your gender');
            valid=false;
         }

    if ( (document.form.course[0].checked==false)
    &&     (document.form.course[1].checked==false) 
    &&     (document.form.course[2].checked==false)
    &&     (document.form.course[3].checked==false)) 
    {
            alert ('Please choose your main course');
            valid=false;
         }
         if (document.form.desc.value=='')
         {
             alert('Please fill in your recipe description');
             document.form.desc.focus();
             valid=false;
         }
         if (document.form.ingr.value=='')
         {
             alert('Please fill in your recipe ingredients');
             document.form.ingr.focus();
             valid=false;
         }
         if (document.form.inst.value=='')
         {
             alert('Please fill in your recipe instruction');
             document.form.inst.focus();
             valid=false;
         }
         
         
         
    return valid;
}
