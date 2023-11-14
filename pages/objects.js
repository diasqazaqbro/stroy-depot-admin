import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Objects({}) {
  useEffect(() => {
    axios.get("/api/objects").then((response) => {
      setMainNumber(response.data[0].mainNumber);
      setNumberOne(response.data[0].numberOne);
      setNumberTwo(response.data[0].numberTwo);
      setNumberThree(response.data[0].numberThree);
    });
  }, []);

  const [mainNumber, setMainNumber] = useState();
  const [numberOne, setNumberOne] = useState();
  const [numberTwo, setNumberTwo] = useState();
  const [numberThree, setNumberThree] =
    useState();
  async function saveProduct(ev) {
    ev.preventDefault();
    const data = {
      mainNumber,
      numberOne,
      numberTwo,
      numberThree,
    };
    await axios.put("/api/objects", data);
  }
  return (
    <Layout>
      <h1 className="my-4">Настройка успешно реализованных объектов</h1>
      <img src="/helpers/h2.png" style={{width: '100%'}}/>
      <form onSubmit={saveProduct}>
        <label>Главное число</label>
        <input
          type="text"
          placeholder="Главное число"
          value={mainNumber}
          onChange={(ev) => setMainNumber(ev.target.value)}
        />
        
          <label>В процессе строительство</label>
          <input
            type="text"
            placeholder="В процессе строительство"
            value={numberOne}
            onChange={(ev) => setNumberOne(ev.target.value)}
          />

          <label>Реализованных объектов</label>
          <input
            type="text"
            placeholder="Реализованных объектов"
            value={numberTwo}
            onChange={(ev) => setNumberTwo(ev.target.value)}
          />

          <label>Встречи с клиентами в год</label>
          <input
            type="text"
            placeholder="Встречи с клиентами в год"
            value={numberThree}
            onChange={(ev) => setNumberThree(ev.target.value)}
          />
        <button type="submit" className="btn-primary">
          Сохранить
        </button>
      </form>
    </Layout>
  );
}
