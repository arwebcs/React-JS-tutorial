import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("url", {
      method: "GET",
      headers: {
        Authorization: `Bearer  {"id":18,"name":"Developer ","email":"Dev@dev.com","password":"Dev123","phone":"000000000","address":"Kolkata ","is_staff":"n","bank_details":"Bank details ","due_amount":1,"last_month_dues":0,"last_month_paid":"n","created_at":"2024-01-18T13:24:01.000Z"}`,
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
