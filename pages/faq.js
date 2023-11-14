import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function FAQ({}) {
  useEffect(() => {
    axios.get("/api/faq").then((response) => {
      setOneTitle(response.data[0].oneTitle);
      setOneSupTitle(response.data[0].oneSupTitle);
      setTwoTitle(response.data[0].twoTitle);
      setTwoSupTitle(response.data[0].twoSupTitle);
      setThreeTitle(response.data[0].threeTitle);
      setThreeSupTitle(response.data[0].threeSupTitle);
    });
  }, []);

  const [oneTitle, setOneTitle] = useState();
  const [oneSupTitle, setOneSupTitle] = useState();
  const [twoTitle, setTwoTitle] = useState();
  const [twoSupTitle, setTwoSupTitle] = useState();
  const [threeTitle, setThreeTitle] = useState();
  const [threeSupTitle, setThreeSupTitle] = useState();
  async function saveProduct(ev) {
    ev.preventDefault();
    const data = {
      oneTitle,
      oneSupTitle,
      twoTitle,
      twoSupTitle,
      threeTitle,
      threeSupTitle,
    };
    await axios.put("/api/faq", data);
  }
  return (
    <Layout>
      <h1 className="my-4">Настройка содержимого сайта</h1>
      <img src="/helpers/h5.png" style={{ width: "100%" }} />
      <form onSubmit={saveProduct}>
        <h2 className="my-2">1 вопрос</h2>
        <label>Заголовок</label>
        <input
          type="text"
          placeholder="Заголовок"
          value={oneTitle}
          onChange={(ev) => setOneTitle(ev.target.value)}
        />
        <label>Описание</label>
        <input
          type="text"
          placeholder="Описание"
          value={oneSupTitle}
          onChange={(ev) => setOneSupTitle(ev.target.value)}
        />
        <h2 className="my-2">2 вопрос</h2>
        <label>Заголовок</label>
        <input
          type="text"
          placeholder="Заголовок"
          value={twoTitle}
          onChange={(ev) => setTwoTitle(ev.target.value)}
        />

        <label>Описание</label>
        <input
          type="text"
          placeholder="Описание"
          value={twoSupTitle}
          onChange={(ev) => setTwoSupTitle(ev.target.value)}
        />
        <h2 className="my-2">3 вопрос</h2>
        <label>Заголовок</label>
        <input
          type="text"
          placeholder="Заголовок"
          value={threeTitle}
          onChange={(ev) => setThreeTitle(ev.target.value)}
        />

        <label>Описание</label>
        <input
          type="text"
          placeholder="Описание"
          value={threeSupTitle}
          onChange={(ev) => setThreeSupTitle(ev.target.value)}
        />
        <button type="submit" className="btn-primary">
          Сохранить
        </button>
      </form>
    </Layout>
  );
}
