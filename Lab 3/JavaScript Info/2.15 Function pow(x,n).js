function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
      result *= x;
    }
    return result;
  }
  let x = prompt("Enter x", '');
  let n = prompt("Enter n", '');
  
  alert(pow(x,n));
