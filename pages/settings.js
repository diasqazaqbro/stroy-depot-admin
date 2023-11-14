import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Settings({}) {
  useEffect(() => {
    axios.get("/api/settings").then((response) => {
      setNumber(response.data[0].number);
    });
  }, []);

  const [number, setNumber] = useState();

  async function saveProduct(ev) {
    ev.preventDefault();
    const data = {
      number,
    };
    await axios.put("/api/settings", data);
  }
  return (
    <Layout>
      <h1 className="my-4">Настройка содержимого сайта</h1>
      <form onSubmit={saveProduct}>
        <label>Тут введите активный номер</label>
        <input
          type="text"
          placeholder="Номер"
          value={number}
          onChange={(ev) => setNumber(ev.target.value)}
        />
        <button type="submit" className="btn-primary">
          Сохранить
        </button>
      </form>
    </Layout>
  );
}
