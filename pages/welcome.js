import Layout from "@/components/Layout";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Welcome({}) {
  useEffect(() => {
    axios.get("/api/welcome").then((response) => {
      setWelcomeTitle(response.data[0].welcomeTitle);
      setWelcomeSupTitle(response.data[0].welcomeSupTitle);
      setWelcomeDesc(response.data[0].welcomeDesc);
    });
    axios
      .get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=1")
      .then((response) => {
        setImages(response.data.results.path);
      });
  }, []);

  const [welcomeTitle, setWelcomeTitle] = useState();
  const [welcomeSupTitle, setWelcomeSupTitle] = useState();
  const [welcomeDesc, setWelcomeDesc] = useState();
  const [images, setImages] = useState();
  const [file, setFile] = useState();
  async function saveProduct(ev) {
    ev.preventDefault();

    const data = {
      welcomeTitle,
      welcomeSupTitle,
      welcomeDesc,
    };
    await axios.put("/api/welcome", data);
    const formData = new FormData();
    formData.append("id", "1");
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
      <h1 className="my-4">Настройка страницы приветствия</h1>
      <img src="/helpers/h1.png" style={{ width: "100%" }} />
      <form onSubmit={saveProduct}>
        <label>Заголовок</label>
        <input
          type="text"
          placeholder="Заголовок"
          value={welcomeTitle}
          onChange={(ev) => setWelcomeTitle(ev.target.value)}
        />
        <label>Подзаголовок</label>
        <input
          type="text"
          placeholder="Подзаголовок"
          value={welcomeSupTitle}
          onChange={(ev) => setWelcomeSupTitle(ev.target.value)}
        />
        <label>Описание</label>
        <input
          type="text"
          placeholder="Описание"
          value={welcomeDesc}
          onChange={(ev) => setWelcomeDesc(ev.target.value)}
        />
        
          <div>Add image</div>
          <input
            type="file"
            onChange={(event) => {
              setFile(event.target.files[0]);
            }}
          />

        <img src={images} />
        <button type="submit" className="btn-primary">
          Сохранить
        </button>
      </form>
    </Layout>
  );
}
