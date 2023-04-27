function form(){

    //User Name Validation
     var userName = document.getElementById("username").value;
     var namePattern = /^[A-Za-z .]*$/ //
  
    if(userName.length<2 || userName.length>20){
       document.getElementById("fname").innerHTML="Length2-20";
       return false;
     }
    else if(!userName.match(namePattern)){
      document.getElementById("fname").innerHTML="Invalid Username";
      return false;
    }
    else{
      document.getElementById("fname").innerHTML="";
    }
  
    //Email Address Validation
    var email = document.getElementById("email").value;
    var emailPattern = /((cse|eee|thm|civil|bba|ih|english)_\d{10}@lus\.ac\.bd)/ 
  
    if(!email.match(emailPattern)){
      document.getElementById("femail").innerHTML="Invalid Email";
      return false;  
    }
    else{
      document.getElementById("femail").innerHTML="";
    }
  
    //Password Validation
    var password = document.getElementById("password").value;
    var passPattern =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/ //Password Regex
  
    if(!password.match(passPattern)){
      document.getElementById("pass").innerHTML="Put Digit,Special Cha & length 7-15";
      return false;  
    }
    else{
      document.getElementById("pass").innerHTML="";
    }
  
    //Confirm Password Validation
    if (document.getElementById('password').value ==
    document.getElementById('password2').value) {
    document.getElementById('pass1').style.color = 'green';
    document.getElementById('pass1').innerHTML = 'matching';
  } else {
    document.getElementById('pass1').style.color = 'red';
    document.getElementById('pass1').innerHTML = 'not matching';
    return false;
  }

  var bdmobile = document.getElementById('mobile-number').value;
  var mobileregex = /(\+88)?-?01[3-9][0-9]{8}$/ //mobile regex
  
    if(!bdmobile.match(mobileregex))
    {
        document.getElementById("mobile").innerHTML="Invalid Mobile Number";
        return false;
    }else
    {
        document.getElementById("mobile").innerHTML="";
    }
  
  }