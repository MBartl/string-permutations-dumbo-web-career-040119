function findAllPermutations(s) {
  let a = [];

  a.push(s.split('').reverse().join(''));

  for (let i = 0; i < s.length; i++) {
    let copy = s.split('');
    let ph = copy[i];
    copy.splice(i, 1);
    copy.unshift(ph);

    for (let j = 0; j < copy.length; j++) {
      let ph = copy[i];
      let array = copy;
      array.splice(i, 1, copy[j]);
      array.splice(j, 1, ph);

      if (!a.includes(array.join(''))) {
        a.push(array.join(''));
      };
    };
  };

  return a;
}
