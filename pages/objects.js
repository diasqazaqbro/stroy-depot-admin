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
    axios
      .get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=2")
      .then((response) => {
        setImages(response.data.results.path);
      });
  }, []);

  const [mainNumber, setMainNumber] = useState();
  const [numberOne, setNumberOne] = useState();
  const [numberTwo, setNumberTwo] = useState();
  const [numberThree, setNumberThree] = useState();
  const [images, setImages] = useState();
  const [file, setFile] = useState();
  async function saveProduct(ev) {
    ev.preventDefault();
    const data = {
      mainNumber,
      numberOne,
      numberTwo,
      numberThree,
    };
    await axios.put("/api/objects", data);

    const formData = new FormData();
    formData.append("id", "2");
    formData.append("image", file);

    await axios.put(
      "https://timkaqwerty.pythonanywhere.com/hds/img/",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }
  return (
    <Layout>
      <h1 className="my-4">Настройка успешно реализованных объектов</h1>
      <img src="/helpers/h2.png" style={{ width: "100%" }} />
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
        <div>Add image</div>
        <label>
        <input
          type="file"
          onChange={(event) => {
            setFile(event.target.files[0]);
          }}
        />
        </label>
        <img src={images} />
        <button type="submit" className="btn-primary">
          Сохранить
        </button>
        
      </form>
    </Layout>
  );
}
