var password = "iwjfrx fwj qtlnhfqqd ywzj"
var password2 = document.getElementById("password");
$("#re").click(function(){
    if(password != String(password2.value)) {
    document.querySelector("#result").innerHTML="Incorrect Password";
    $("#result").fadeIn();
    $("#result").fadeIn("slow");            
    } else {
    //document.querySelector("#result").style.display="block";
    document.querySelector("#result").innerHTML="Correct Password";
    location.href="congratulations.html"                
    $("#result").fadeIn();
    $("#result").fadeIn("slow");
    }
});