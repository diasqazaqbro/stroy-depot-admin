import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Settings() {
  const [data, setData] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    axios.get("/api/settings/").then((response) => {
      setData(response.data[0]);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const saveProduct = async (ev) => {
    ev.preventDefault();
    await axios.put("/api/settings", data);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout>
      {showAlert && (
        <div className="bg-green-500 text-white px-4 py-2 mt-4 rounded">
          Сохранение прошло успешно!
        </div>
      )}
      <h1 className="my-4">Настройка содержимого сайта</h1>
      <form onSubmit={saveProduct}>
        <div className="form-group">
          <label htmlFor="phoneNumber">Телефонный номер</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            className="form-control"
            value={data.phoneNumber || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Адрес</label>
          <input
            type="text"
            id="address"
            name="address"
            className="form-control"
            value={data.address || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="suptitle">Подзаголовок</label>
          <input
            type="text"
            id="suptitle"
            name="suptitle"
            className="form-control"
            value={data.suptitle || ""}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">Заголовок</label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            value={data.title || ""}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="workTime">Режим работы</label>
          <input
            type="text"
            id="workTime"
            name="workTime"
            className="form-control"
            value={data.workTime || ""}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn-primary my-3">
          Сохранить
        </button>
      </form>
    </Layout>
  );
}
