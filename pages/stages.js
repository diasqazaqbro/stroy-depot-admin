import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Stages({}) {
  useEffect(() => {
    axios.get("/api/stages").then((response) => {
      setOneTitle(response.data[0].oneTitle);
      setOneDesc(response.data[0].oneDesc);
      setTwoTitle(response.data[0].twoTitle);
      setTwoDesc(response.data[0].twoDesc);
      setThreeTitle(response.data[0].threeTitle);
      setThreeDesc(response.data[0].threeDesc);
      setFourTitle(response.data[0].fourTitle);
      setFourDesc(response.data[0].fourDesc);
      setFiveTitle(response.data[0].fiveTitle);
      setFiveDesc(response.data[0].fiveDesc);
      setSixTitle(response.data[0].sixTitle);
      setSixDesc(response.data[0].sixDesc);
      setSevenTitle(response.data[0].sevenTitle);
      setSevenDesc(response.data[0].sevenDesc);
      setEightTitle(response.data[0].eightTitle);
      setEightDesc(response.data[0].eightDesc);
    });
  }, []);

  const [oneTitle, setOneTitle] = useState();
  const [oneDesc, setOneDesc] = useState();
  const [twoTitle, setTwoTitle] = useState();
  const [twoDesc, setTwoDesc] = useState();
  const [threeTitle, setThreeTitle] = useState();
  const [threeDesc, setThreeDesc] = useState();
  const [fourTitle, setFourTitle] = useState();
  const [fourDesc, setFourDesc] = useState();
  const [fiveTitle, setFiveTitle] = useState();
  const [fiveDesc, setFiveDesc] = useState();
  const [sixTitle, setSixTitle] = useState();
  const [sixDesc, setSixDesc] = useState();
  const [sevenTitle, setSevenTitle] = useState();
  const [sevenDesc, setSevenDesc] = useState();
  const [eightTitle, setEightTitle] = useState();
  const [eightDesc, setEightDesc] = useState();

  async function saveProduct(ev) {
    ev.preventDefault();
    const data = {
      oneTitle,
      oneDesc,
      twoTitle,
      twoDesc,
      threeTitle,
      threeDesc,
      fourTitle,
      fourDesc,
      fiveTitle,
      fiveDesc,
      sixTitle,
      sixDesc,
      sevenTitle,
      sevenDesc,
      eightTitle,
      eightDesc,
    };
    await axios.put("/api/stages", data);
  }
  return (
    <Layout>
      <h1 className="my-4">Настройка этапы работ</h1>
      <img src="/helpers/h4.png" style={{ width: "100%" }} />
      <form onSubmit={saveProduct}>
        <h2 className='my-2'>01</h2>
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
          value={oneDesc}
          onChange={(ev) => setOneDesc(ev.target.value)}
        />
        <h2 className='my-2'>02</h2>
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
          value={twoDesc}
          onChange={(ev) => setTwoDesc(ev.target.value)}
        />
        <h2 className='my-2'>03</h2>
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
          value={threeDesc}
          onChange={(ev) => setThreeDesc(ev.target.value)}
        />
        <h2 className='my-2'>04</h2>
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
          value={fourDesc}
          onChange={(ev) => setFourDesc(ev.target.value)}
        />
        <h2 className='my-2'>05</h2>
        <label>Заголовок</label>
        <input
          type="text"
          placeholder="Заголовок"
          value={fiveTitle}
          onChange={(ev) => setFiveTitle(ev.target.value)}
        />
        <label>Подзаголовок</label>
        <input
          type="text"
          placeholder="Подзаголовок"
          value={fiveDesc}
          onChange={(ev) => setFiveDesc(ev.target.value)}
        />
        <h2 className='my-2'>06</h2>
        <label>Заголовок</label>
        <input
          type="text"
          placeholder="Заголовок"
          value={sixTitle}
          onChange={(ev) => setSixTitle(ev.target.value)}
        />
        <label>Подзаголовок</label>
        <input
          type="text"
          placeholder="Подзаголовок"
          value={sixDesc}
          onChange={(ev) => setSixDesc(ev.target.value)}
        />
        <h2 className='my-2'>07</h2>
        <label>Заголовок</label>
        <input
          type="text"
          placeholder="Заголовок"
          value={sevenTitle}
          onChange={(ev) => setSevenTitle(ev.target.value)}
        />
        <label>Подзаголовок</label>
        <input
          type="text"
          placeholder="Подзаголовок"
          value={sevenDesc}
          onChange={(ev) => setSevenDesc(ev.target.value)}
        />
        <h2 className='my-2'>08</h2>
        <label>Заголовок</label>
        <input
          type="text"
          placeholder="Заголовок"
          value={eightTitle}
          onChange={(ev) => setEightTitle(ev.target.value)}
        />
        <label>Подзаголовок</label>
        <input
          type="text"
          placeholder="Подзаголовок"
          value={eightDesc}
          onChange={(ev) => setEightDesc(ev.target.value)}
        />
        <button type="submit" className="btn-primary">
          Сохранить
        </button>
      </form>
    </Layout>
  );
}
