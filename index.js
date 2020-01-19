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
pyramid(75);
