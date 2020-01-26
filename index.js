function pyramid(n) {
  const midPoint = Math.floor((n * 2 - 1) / 2);

  for (row = 0; row < n; row++) {
    let level = "";

    for (col = 0; col < n * 2 - 1; col++) {
      if (midPoint - row <= col && midPoint + row >= col) {
        level += "*";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
}

function pyramid2(n) {

  for(let i=1; i<= n; i++){

    let str = ' '.repeat(n-i);

    let str2 = '*'. repeat(i*2 -1)

 

    console.log(str + str2 + str);

  }

}
pyramid(75);
