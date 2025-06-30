import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onMoneyChange = (e) => setMoney(e.target.value);
  const onSelectChange = (e) => setSelectedPrice(parseFloat(e.target.value));

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>

      <h2>
        $ :{" "}
        <input
          type="number"
          placeholder="Plz, input your money"
          value={money}
          onChange={onMoneyChange}
        />
      </h2>

      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onSelectChange}>
        <option value="" disabled selected>Plz select me</option>
          {coins.map((coin) => (
            <option key={coin.id} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}

      <h2>
        Exchange :{" "}
        {money && selectedPrice
          ? `${(money / selectedPrice).toFixed(6)} COIN`
          : "0 COIN"}
      </h2>
    </div>
  );
}

export default App;
