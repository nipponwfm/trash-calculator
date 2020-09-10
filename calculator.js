const btn = document.querySelectorAll('.btn');
const onScreen = document.getElementById('onScreen');
const onResult = document.getElementById('onResult');
const Ev = Math.E;
const pi = Math.PI;
var onCalculate = "";
var Ans = 0;
var checkE = false;

factorial = (n) => {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

btn.forEach( (item) => {
    item.addEventListener("click", () => {
        onCalculate+= item.innerHTML;
        onScreen.innerHTML = onCalculate;
        console.log(onScreen.innerHTML)
    })
})

const submit = document.getElementById('equal')
submit.addEventListener("click", () => {
    if (checkE) {
        onResult.innerHTML = onCalculate;
        checkE= false;
        onCalculate = "";
        onScreen.innerHTML = onCalculate;
    }
    else {
        onResult.textContent = eval(onCalculate);
        onCalculate = "";
        onScreen.innerHTML = onCalculate;
        Ans = document.getElementById('onResult').innerHTML;
    }
})

const cancel = document.getElementById('cancel');
cancel.addEventListener("click", () => {
    onCalculate = "";
    onScreen.innerHTML = onCalculate;
})

const percent = document.getElementById('percent');
percent.addEventListener('click', () => {
    onScreen.innerHTML = onCalculate + '%';
    onCalculate = onCalculate + '*0.01';
})

const multiple = document.getElementById('multiple');
multiple.addEventListener('click', () => {
    onScreen.innerHTML = onCalculate + '!';
    var store = "";
    var i = onCalculate.length -1;
    for (; i>=0; i--) {
        if (!isNaN(onCalculate[i])) store+= onCalculate[i];
        else break;
    }
    var newStore = "";
    for (var j = store.length-1; j>=0 ; j--) {
        newStore += store[j];
    }
    onCalculate = onCalculate.substring(0,i+1) + String(factorial(Number(newStore)))
})

const log = document.getElementById('log');
log.addEventListener('click', () => {
    onScreen.innerHTML = onCalculate + 'log(';
    onCalculate += "Math.log(";
})

const sqrt = document.getElementById('sqrt');
sqrt.addEventListener('click', () => {
    onScreen.innerHTML = onCalculate + 'sqrt(';
    onCalculate += "Math.sqrt(";
})

const pow = document.getElementById('pow');
pow.addEventListener('click', () => {
    onScreen.innerHTML = onCalculate + 'pow(';
    onCalculate += "Math.pow(";
})

const comma = document.getElementById('comma');
comma.addEventListener('click', () => {
    onCalculate += ',';
    onScreen.innerHTML = onCalculate;
})

const ans = document.getElementById('ans');
ans.addEventListener('click', () => {
    onCalculate += Ans;
    onScreen.innerHTML = onCalculate;
})

const e = document.getElementById('e');
e.addEventListener('click', () => {
    onScreen.innerHTML += 'e';
    onCalculate += Ev;
})

const piv = document.getElementById('pi');
piv.addEventListener('click', () => {
    onScreen.innerHTML += 'pi';
    onCalculate += "pi";
})

const exp = document.getElementById('exp');
exp.addEventListener('click', () => {
    onCalculate += "E";
    onScreen.innerHTML = onCalculate;
    checkE = true;
})

const cos = document.getElementById('cos');
cos.addEventListener('click', () => {
    onScreen.innerHTML = onCalculate + 'cos(';
    onCalculate += "Math.cos(";
})

const sin = document.getElementById('sin');
sin.addEventListener('click', () => {
    onScreen.innerHTML = onCalculate + 'sin(';
    onCalculate += "Math.sin(";
})

const tan = document.getElementById('tan');
tan.addEventListener('click', () => {
    onScreen.innerHTML = onCalculate + 'tan(';
    onCalculate += "Math.tan(";
})