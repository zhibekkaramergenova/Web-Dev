function checkage(age){
    return (age > 18) || confirm('Did parents allow you?');
}

function checkage1(age){
    return (age > 18) ? true : confirm('Did parents allow you?');
}
