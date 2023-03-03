import {useEffect, useState} from "react";

function App() {
    const [selectVal, setSelectVal] = useState({});

    const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState(0);

  const onChange = (event) => {
      setDollar(event.target.value);
  }

  const onSubmit = (event) => {
      event.preventDefault();
      setDollar(0);
  }

  const onChangeOption = (event) => {
      setSelectVal(event.target.value)
  }

  const selectValue = () => {
      if (JSON.stringify(selectVal) === '{}') {
          return 0;
      } else {
          return dollar / selectVal;
      }
  }

  useEffect(() => {
      fetch("https://api.coinpaprika.com/v1/tickers")
          .then((response) => response.json())
          .then((json) => {
              console.log(json);
              setCoins(json);
              setLoading(false);
          });
  }, [])
    console.log(selectVal);
    return (
      <div>
        <h1>The Coins {loading ? "" : `(${coins.length})`}</h1>
          <form onSubmit={onSubmit}>
              <label htmlFor="dollars">Dollar : </label>
              <input
                  value={dollar}
                  id="dollars"
                  placeholder="your dollars"
                  type="text"
                  onChange={onChange} />
              <button>코인 교환</button>
          </form>
          <br />
        {
            loading ? <strong>Loading...</strong> :
                    <select onChange={onChangeOption} value={selectVal}>
                        {coins.map((coin, index) => {
                            let price = coin.quotes.USD.price;
                            return <option key={index} value={price}>{coin.name} ({coin.symbol}): ${price} USD</option>
                        })}
                    </select>
        }
          {loading ? "" : <hr />}
          <h1>{loading ? "" : <p>교환할 수 있는 코인 개수 : {selectValue()}</p>}</h1>
      </div>
  );
}

export default App;
