function validateForm() {

    var pw1 = document.getElementById("pswd1").value;
    var pw2 = document.getElementById("pswd2").value;
    var name1 = document.getElementById("fname").value;
    
    if(name1 == "") {
      document.getElementById("blankMsg").innerHTML = "**Fill the first name";
      return false;
    }
    

    if(!isNaN(name1)){
      document.getElementById("blankMsg").innerHTML = "**Only characters are allowed";
      return false;
    } 
  

    if(pw1 == "") {
      document.getElementById("message1").innerHTML = "**Fill th password please!";
      return false;
    }
  
    if(pw2 == "") {
      document.getElementById("message2").innerHTML = "**Enter the password please!";
      return false;
    } 
   

    if(pw1.length < 8) {
      document.getElementById("message1").innerHTML = "**length must be atleast 8 characters";
      return false;
    }

    if(pw1.length > 15) {
      document.getElementById("message1").innerHTML = "**length must not exceed 15 characters";
      return false;
    }
  
    if(pw1 != pw2) {
      document.getElementById("message2").innerHTML = "**Passwords are not same! Retry with new Password";
      return false;
    } else {
      alert ("password created successfully");
      document.write("form has been submitted successfully");
    }
 }