btn.onclick = function () {
    message=prompt("enter a msg");
    if(message!=null){
        document.getElementById("msg").innerHTML = "The entered message is " + message+".";
    }
};