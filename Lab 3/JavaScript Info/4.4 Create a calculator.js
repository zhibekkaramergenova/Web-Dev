let calculator = {
    read(){
        this.a = +prompt("Enter first number>");
        this.b = +prompt("Enter second number>");
    },

    sum(){
        return this.a + this.b;
    },

    mull(){
        return this.a * this.b;
    }
};
