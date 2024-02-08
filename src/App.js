import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Page404 from "./component/Page404";
import User from "./component/User";
import Filter from "./component/Filter";
import NestedRoute from "./component/NestedRoute";
import Company from "./component/nested/Company";
import Client from "./component/nested/Client";
import Protected from "./component/Protected";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/*" element={<Page404 />} /> */}
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/user/:name" element={<User />} />

          <Route path="/filter" element={<Protected Component={Filter} />} />
          <Route path="/nested/" element={<NestedRoute />}>
            <Route path="company" element={<Company />} />
            <Route path="client" element={<Client />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
