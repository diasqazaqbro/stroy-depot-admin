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
    axios.get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=1").then((response) => {
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
    formData.append('id', '1'); 
formData.append('image', file);

    await axios.put('https://timkaqwerty.pythonanywhere.com/hds/img/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
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
        <label className="w-24 h-24 cursor-pointer text-center flex flex-col items-center justify-center text-sm gap-1 text-primary rounded-sm bg-white shadow-sm border border-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
          <div>Add image</div>
          <input type="file" className="hidden" onChange={(event) => {setFile(event.target.files[0])}} />
        </label>
        
        <img src={images}/>
        <button type="submit" className="btn-primary">
          Сохранить 
        </button>
      </form>
    </Layout>
  );
}
