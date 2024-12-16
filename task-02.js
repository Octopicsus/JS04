let priceUSD = 42;
let hrivna = "";

for (let i = 10; i <= 100; i += 10) {
  hrivna = `${i} USD = ${priceUSD * i} UAH`;
  console.log(hrivna);
}
