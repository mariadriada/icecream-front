import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import IcecreamList from "./components/IcecreamList";

import { getIcecreamFetch } from "./api/icecream";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

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
      <IcecreamList list={icecreams} />
    </Container>
  );
}

export default App;
