alert("Please make sure you complate the form so that the bulb can on dude")

function myFunction(){
    var first = document.getElementById('name').value;
    var second = document.getElementById('second').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    document.getElementById("bulb");
    
    if(first == "" || second == null){
        document.getElementById("bulb").src = "image2.png"
        // alert("f**k you can't be empty")
        return false;
    }else if(email == "" || pass >= 8){
        document.getElementById("bulb").src = "image2.png"
        // alert("f**k you can't be empty")
        return false;
    }else{
        document.getElementById("bulb").src = "image1.png"
        return true;
    }
}
