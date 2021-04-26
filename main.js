// доходы income inputs
const incomeSalary = document.getElementById('income-salary');
const incomeFreelance = document.getElementById('income-freelance');
const incomeExtra1 = document.getElementById('income-extra-1');
const incomeExtra2 = document.getElementById('income-extra-2');

// расходы costs inputs
const costsFlat = document.getElementById('costs-flat');
const costsHouseServices = document.getElementById('costs-house-services');
const costsTransport = document.getElementById('costs-transport');
const costsCredit = document.getElementById('costs-credit');

// total inputs
const totalMonthInput = document.getElementById('total-month');
const totalDayInput = document.getElementById('total-day');
const totalYearInput = document.getElementById('total-year');

let totalDay, totalMonth, totalYear;

//money box 
const moneyBoxRange = document.getElementById('money-box-range');
const accumulationInput = document.getElementById('accumulation');
const spend = document.getElementById('spend');

let accumulation = 0;
let totalPrecents = 0;

// ввод сумм в inputs
const inputs = document.querySelectorAll('.input');
for (input of inputs) {
  input.addEventListener('input', () => {
    countingAvailableMoney();
    calculationPrecents();
  })
}

// перевод значений в number/0
const strToNum = str => str.value ? parseInt(str.value) : 0;

// "доступно в месяц"
const countingAvailableMoney = () => {
    const totalPerMonth = strToNum(incomeSalary) + strToNum(incomeFreelance) + strToNum(incomeExtra1) + strToNum(incomeExtra2);
    const totalCosts = strToNum(costsFlat) + strToNum(costsHouseServices) + strToNum(costsTransport) + strToNum(costsCredit);

    totalMonth = totalPerMonth - totalCosts;
    totalMonthInput.value = totalMonth;
};

//range
moneyBoxRange.addEventListener('input', e => {
  const totalPrecentEl = document.getElementById('total-precents');
  totalPrecents = e.target.value;
  totalPrecentEl.innerHTML = totalPrecents;
  calculationPrecents();
});

const calculationPrecents = () => {
  accumulation = ((totalMonth * totalPrecents) / 100).toFixed(); 
  accumulationInput.value = accumulation;
  
  spend.value = totalMonth - accumulation;
  
  totalDay = (spend.value / 30).toFixed();
  totalDayInput.value = totalDay;
  
  totalYear = accumulation * 12;
  totalYearInput.value = totalYear;
};