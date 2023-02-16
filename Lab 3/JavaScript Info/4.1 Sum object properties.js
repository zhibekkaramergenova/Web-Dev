let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let s = 0;

for (let i in salaries){
    s += salaries[i];    
}
alert(s);
