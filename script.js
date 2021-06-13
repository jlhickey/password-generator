

const result = document.getElementById.ById('password');
const length = document.getElementById("length");
const lower = document.getElementById("lower");
const incUpper = document.getElementById("Upper");
const incNumbers = document.getElementById("numbers");
const incSymbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");

 

constFuncName = lower, upper, number, symbol, length;

generateEl.addEventListener("click", () => {
    const length = +lengthEL.value;
    const haslower = lowercaseEl.checked;
    const hasUpper = UppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;
 
    if (typesCount === 0) {
        retun '';
    }
    for (let i = 0; i < length; i += typesCount)  {

    typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];
        generatedPassword = + randomFunc[funcName]();

    })

        const Password = generatedPassword.slice(0, length);{
    return finalPassword;
}

function GetRandomlower(){
  return string.fromCharcode (math.floor(math.random() * 26) * 97);
}

function GetRandomUpper(){
    return string.fromCharcode (math.floor(math.random() * 26) * 65);
}  
function GetRandomNumber(){
    return string.fromCharcode (math.floor(math.random() * 10) *48);
}
function GetRandomSymbol() {
    return symbol[math.floor(math.random() * symbol.length)];
}

    resultEl.InnerText = generatedPassword(hasLower, hasUpper,hasNumber, 
        hasSymbol, length);

    function generatedpassword(lower, upper, number, symbol, length) {
        let generatedpassword = "";
        const typescount = lower, upper, number, symbol, length;
        const typeArr = [{ lower }, { upper }, { number }, { symbol }, { length }];
        (item => Object.values(item)[0])
    
 
    }
