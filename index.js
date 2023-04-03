var lastPrice ;
const btc = async () => {
  const data = await fetch(
    "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,IRR"
  );
  const price = await data.json();

  console.log(price.USD);
 
  if (lastPrice > price.USD) {
    document.getElementById("price").textContent = price.USD+" ↓";
    document.getElementById("price").style.color = "red";
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "salmon";
   
  } else if((lastPrice < price.USD)) {
    document.getElementById("price").textContent = price.USD+" ↑";
    document.getElementById("price").style.color = "green";
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "rgb(76, 237, 76)";
  }
  lastPrice=price.USD;
};
setInterval(() => {
  btc();
}, 2000);
console.log();