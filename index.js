function neutralisation(sym1, sym2) {
  if (sym1 === "" || sym2 === "") {
    return "You need to enter 2 strings to compare";
  }

  const validSymbols = /^[+-]+$/;

  if (!validSymbols.test(sym1) || !validSymbols.test(sym2)) {
    return "Both strings must only contain '+' and '-'";
  }

  let sym1Arr = sym1.split("");
  let sym2Arr = sym2.split("");

  if(sym1Arr.length !== sym2Arr.length){
    return "Both inputs must be of the same length";
  }
  let comparingArr = [];

  for (let i = 0; i < sym1Arr.length; i++) {
    if (sym1Arr[i] === sym2Arr[i]) {
      comparingArr.push(sym1Arr[i]);
    } else {
      comparingArr.push("0");
    }
  }
  console.log(comparingArr);
  let result = comparingArr.join("");
  console.log(result);
  return result;
}

module.exports = { neutralisation };
