let n = prompt ("Enter a number", );

outer: for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= i**1/2; j++) {
        if (i%j==0) continue outer;
    }
    alert (i);
}
