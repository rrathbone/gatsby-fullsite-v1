const fetch = require ('node-fetch')
const fs = require ('fs-extra-promise')

async function renderMarkets() {
  try {
    const url = 'http://dev.getmigo.com/api/markets'
    const response = await fetch(url)
    const data = await response.json()
    const markets = data.markets
    console.log(data.markets);

    markets.forEach((city) => {
      fs.outputFile(
        `src/pages/locations/${city.label}.json`,
        JSON.stringify(city, null, 2)
      )
    })

  } catch (error) {
   console.log('Error writing market data', error)
   return Promise.reject('error')
  }
}

renderMarkets()
