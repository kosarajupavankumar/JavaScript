// you are given an array of objects  represnts the transcation made by customers.
// Each object has the following properties:

const transcations = [
  { customerId: 1, amount: 10, date: "2020-01-01" },
  { customerId: 1, amount: 20, date: "2020-01-02" },
  { customerId: 2, amount: 30, date: "2020-01-01" },
  { customerId: 2, amount: 40, date: "2020-01-02" },
  { customerId: 2, amount: 50, date: "2020-01-03" },
  { customerId: 1, amount: 60, date: "2020-01-01" },
  { customerId: 3, amount: 70, date: "2020-01-02" },
  { customerId: 3, amount: 80, date: "2020-01-03" },
  { customerId: 2, amount: 90, date: "2020-01-04" },
];

function getCustomerTotalTranscation(transcations) {
  return transcations.reduce((acc, transcation) => {
    const { customerId, amount } = transcation;
    acc[customerId] = (acc[customerId] || 0) + amount;
    return acc;
  }, {});
}

const customerTotalTranscation = getCustomerTotalTranscation(transcations);
console.log(customerTotalTranscation); // { '1': 90, '2': 210, '3': 150 }

// calculate totalTranscations made by all the customers

function getTotalTranscation(transcations) {
  return transcations.reduce((acc, transcation) => {
    const { amount } = transcation;
    return acc + amount;
  }, 0);
}

const totalTranscation = getTotalTranscation(transcations);
console.log(totalTranscation);

function transcationsPerDay(transcations) {
  return transcations.reduce((acc, transcation) => {
    const { date, amount } = transcation;
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});
}

const transcationsPerDays = transcationsPerDay(transcations);
console.log(transcationsPerDays);

function totalTran(transcations){
    return transcations.length;
}

const totalTrans = totalTran(transcations);
console.log(totalTrans); // 9

function averageTranscation(transcations) {
  const totalTranscation = getTotalTranscation(transcations);
  const totalTrans = totalTran(transcations);
  return totalTranscation / totalTrans;
}

console.log(averageTranscation(transcations)); // 50