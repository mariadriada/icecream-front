import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";

import IcecreamList from "./components/IcecreamList";
import Menu from "./components/Menu";
import FormCreate from "./components/FormCreate";
import Images from "./components/Images";

import { getIcecreamFetch } from "./api/icecream";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  const [icecreams, setIcecreams] = useState([]);

  useEffect(() => {
    //getIcecreamFetch();
    //const data = await getIcecreamAxios();

    async function fetchData() {
      const data = await getIcecreamFetch();
      setIcecreams(data);
    }
    fetchData();
  }, []);

  return (
    <Container>
      <Router>
        <Menu />
        <Routes>
          <Route
            path="/icecreams"
            exact
            element={<IcecreamList list={icecreams} />}
          />
          <Route path="/icecream/create" exact element={<FormCreate />} />
          <Route
            path="/icecream/update"
            exact
            element={<h1>Actualizar helado</h1>}
          />
          <Route path="/icecream/delete" element={<h1>Eliminar Helado</h1>} />
          <Route path="/images" element={<Images />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
