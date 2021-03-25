(() => {
  const btn = document.querySelector(".cta");
  const code = document.querySelector(".code");
  const result = document.querySelector(".result");
  btn.addEventListener("click", () => {
    if(code.value === "") return;
    const decimals = code.value;
    const nums = decimals.split(" ");
    let fromDecimalToHex = converToHex(nums);
    let fromHexToText = converToText(
      fromDecimalToHex.toString().replace(/\,/g, "")
    );
    const seperateTextToGetHex = seperate(fromHexToText);
    const hexToText = converToText(seperateTextToGetHex);
    const message = atob(hexToText);
    result.value = message;
  
  });
})();



const converToHex = (str1) =>{
  let hex = [];
  str1.forEach((element) => {
    hex.push(Number(element).toString(16));
  });
  return hex;
};

const converToText = (str1) => {
  let hex = str1.replace(/\s/g, "");
  let str = "";
  for (var n = 0; n < hex.length; n += 2) {
    str += String.fromCodePoint(parseInt(hex.substr(n, 2), 16));
  }
  return str;
};
const seperate = (text) => {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (i % 2 == 0) {
      result += text[i];
    } else {
      result += text[i] + " ";
    }
  }
  return result;
};
