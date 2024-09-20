// Afficher le cours du Bitcoin à intérrogeant l'API de CoinBase https://api.coindesk.com/v1/bpi/currentprice.json
//

var typed = new Typed('.element', {
    strings: ["Bonjour :", "Voici le cours du Bitcoin en EUROS du 1er janvier 2023 au 1er janvier 2024."],
    typeSpeed: 50,
    backSpeed: 50, 
    loop: true
  });

  const ctx = document.getElementById('myChart');
  const url = `https://api.coindesk.com/v1/bpi/historical/close.json?start=2023-01-01&end=2024-01-01`;
  let getBitcoin = async()=>{
    try {
        let result = await axios.get(url);
        console.log(result);
        let price = Object.values(result.data.bpi);
        let date = Object.keys(result.data.bpi);
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: date,
          datasets: [{
            label: 'Prix du Bitcoin',
            data: price,
            borderWidth: 3
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
    catch(error){
        console.error(error);
        
    }
  }
getBitcoin();

  
  // async function getBitcoinCurrentPrice() {
  //     try {
  //         let res = await fetch ("https://api.coindesk.com/v1/bpi/currentprice.json")
  //         let data = await res.json();
  //     } catch (error) {
  //         console.log("Error fetching current Bitcoin price:", error);
          
  //     }
  // }
  // getBitcoinCurrentPrice();