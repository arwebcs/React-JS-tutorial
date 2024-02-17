import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("url", {
      method: "GET",
      headers: {
        Authorization: `Bearer tttt`,
      },
      //   body: {},
    }).then((res) => {
      res.json().then((res) => {
        setData(res);
      });
    });
  }, []);

  console.log(data);

  return <div className="App">hh</div>;
}

export default App;
