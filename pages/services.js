import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Services({}) {
  useEffect(() => {
    axios.get("/api/services").then((response) => {
      setOneTitle(response.data[0].oneTitle);
      setOneSupTitle(response.data[0].oneSupTitle);
      setOneDesc(response.data[0].oneDesc);
      setTwoTitle(response.data[0].twoTitle);
      setTwoSupTitle(response.data[0].twoSupTitle);
      setTwoDesc(response.data[0].twoDesc);
      setThreeTitle(response.data[0].threeTitle);
      setThreeSupTitle(response.data[0].threeSupTitle);
      setThreeDesc(response.data[0].threeDesc);
      setFourTitle(response.data[0].fourTitle);
      setFourSupTitle(response.data[0].fourSupTitle);
      setFourDesc(response.data[0].fourDesc);
    });
  }, []);

  const [oneTitle, setOneTitle] = useState();
  const [oneSupTitle, setOneSupTitle] = useState();
  const [oneDesc, setOneDesc] = useState();
  const [twoTitle, setTwoTitle] = useState();
  const [twoSupTitle, setTwoSupTitle] = useState();
  const [twoDesc, setTwoDesc] = useState();
  const [threeTitle, setThreeTitle] = useState();
  const [threeSupTitle, setThreeSupTitle] = useState();
  const [threeDesc, setThreeDesc] = useState();
  const [fourTitle, setFourTitle] = useState();
  const [fourSupTitle, setFourSupTitle] = useState();
  const [fourDesc, setFourDesc] = useState();

  async function saveProduct(ev) {
    const data = {
      oneTitle,
      oneSupTitle,
      oneDesc,
      twoTitle,
      twoSupTitle,
      twoDesc,
      threeTitle,
      threeSupTitle,
      threeDesc,
      fourTitle,
      fourSupTitle,
      fourDesc,
    };
    await axios.put("/api/services", data);
  }
  return (
    <Layout>
      <h1 className="my-4">Настройка услуг</h1>
      <img src="/helpers/h3.png" style={{ width: "100%" }} />
      <form onSubmit={saveProduct}>
        <h2 className="my-2">1 услуга</h2>
        <label>Заголовок</label>
        <input
          type="text"
          placeholder="Заголовок"
          value={oneTitle}
          onChange={(ev) => setOneTitle(ev.target.value)}
        />

        <label>Подзаголовок</label>
        <input
          type="text"
          placeholder="Подзаголовок"
          value={oneSupTitle}
          onChange={(ev) => setOneSupTitle(ev.target.value)}
        />

        <label>Описание</label>
        <input
          type="text"
          placeholder="Описание"
          value={oneDesc}
          onChange={(ev) => setOneDesc(ev.target.value)}
        />
        <h2 className="my-2">2 услуга</h2>
        <label>Заголовок</label>
        <input
          type="text"
          placeholder="Заголовок"
          value={twoTitle}
          onChange={(ev) => setTwoTitle(ev.target.value)}
        />

        <label>Подзаголовок</label>
        <input
          type="text"
          placeholder="Подзаголовок"
          value={twoSupTitle}
          onChange={(ev) => setTwoSupTitle(ev.target.value)}
        />

        <label>Описание</label>
        <input
          type="text"
          placeholder="Описание"
          value={twoDesc}
          onChange={(ev) => setTwoDesc(ev.target.value)}
        />
        <h2 className="my-2">3 услуга</h2>
        <label>Заголовок</label>
        <input
          type="text"
          placeholder="Заголовок"
          value={threeTitle}
          onChange={(ev) => setThreeTitle(ev.target.value)}
        />
        <label>Подзаголовок</label>
        <input
          type="text"
          placeholder="Подзаголовок"
          value={threeSupTitle}
          onChange={(ev) => setThreeSupTitle(ev.target.value)}
        />
        <label>Описание</label>
        <input
          type="text"
          placeholder="Описание"
          value={threeDesc}
          onChange={(ev) => setThreeDesc(ev.target.value)}
        />
        <h2 className="my-2">4 услуга</h2>
        <label>Заголовок</label>
        <input
          type="text"
          placeholder="Заголовок"
          value={fourTitle}
          onChange={(ev) => setFourTitle(ev.target.value)}
        />
        <label>Подзаголовок</label>
        <input
          type="text"
          placeholder="Подзаголовок"
          value={fourSupTitle}
          onChange={(ev) => setFourSupTitle(ev.target.value)}
        />
        <label>Описание</label>
        <input
          type="text"
          placeholder="Описание"
          value={fourDesc}
          onChange={(ev) => setFourDesc(ev.target.value)}
        />

        <button type="submit" className="btn-primary">
          Сохранить
        </button>
      </form>
    </Layout>
  );
}
