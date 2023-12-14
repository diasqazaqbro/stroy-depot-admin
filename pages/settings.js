import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Settings({}) {
  useEffect(() => {
    axios.get("/api/settings").then((response) => {
      setNumber(response.data[0].number);
    });
    axios
      .get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=19")
      .then((response) => {
        setImagesOne(response.data.results.path);
      });
  }, []);

  const [number, setNumber] = useState();
  const [imagesOne, setImagesOne] = useState();
  const [fileOne, setFileOne] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  async function saveProduct(ev) {
    ev.preventDefault()
    const data = {
      number
    };
    await axios.put("/api/settings", data);

    const formDataOne = new FormData();
    formDataOne.append("id", "19");
    formDataOne.append("image", fileOne);

    await axios.put(
      "https://timkaqwerty.pythonanywhere.com/hds/img/",
      formDataOne,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    axios.get("/api/settings").then((response) => {
      setNumber(response.data[0].number);
    });
    axios
      .get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=19")
      .then((response) => {
        setImagesOne(response.data.results.path);
      });
    setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <Layout>
      {showAlert && (
        <div className="bg-green-500 text-white px-4 py-2 mt-4 rounded">
          Сохранение прошло успешно!
        </div>
      )}
      <h1 className="my-4">Настройка содержимого сайта</h1>
      <form onSubmit={saveProduct}>
        <label>Тут введите активный номер</label>
        <input
          type="text"
          placeholder="Номер"
          value={number}
          onChange={(ev) => setNumber(ev.target.value)}
        />
        <label>Логотип</label>
        <input
          type="file"
          onChange={(event) => {
            setFileOne(event.target.files[0]);
          }}
        /> 
        <img src={imagesOne} style={{ width: '400px', height: '400px'}} />
        <button type="submit" className="btn-primary my-3">
          Сохранить
        </button>
      </form>
    </Layout>
  );
}
