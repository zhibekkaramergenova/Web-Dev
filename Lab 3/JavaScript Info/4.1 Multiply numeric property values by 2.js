function multiplyNumeric(menu) {
    for (let i in menu) {
        if (typeof (menu[i]) == 'number') {
            menu[i] *= 2;
        }
    }
}
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);
