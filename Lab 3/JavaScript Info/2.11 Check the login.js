let login = prompt("Who is there?","");
if (login == "Admin"){
    pass = prompt("Password?","")
    if (pass == "TheMaster"){
        alert("Welcome!")
    }
    else if (pass == "Cancel" || pass == ""){
        alert("Canceled!");
    }
    else{
        alert("Wrong password!")
    }    
}
else if (login == "Cancel" || login == ""){
    alert("Canceled!");
}
else{
    alert("I do not know you!")
}
