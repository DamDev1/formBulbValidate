function myForm(){
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;

    if(email == null || email == ""){
        alert("not done")
        return false;
    }else if (pass == "" || pass == ""){
        alert("not done")
        return false;
    }
}