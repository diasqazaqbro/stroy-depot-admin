import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Partners({}) {
  useEffect(() => {
    axios.get("/api/partners").then((response) => {
      setAccent(response.data[0].accent);
      setTitle(response.data[0].title);
      setDesc(response.data[0].desc);
    });
    axios
      .get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=20")
      .then((response) => {
        setI1(response.data.results.path);
      });
    axios
      .get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=21")
      .then((response) => {
        setI2(response.data.results.path);
      });
    axios
      .get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=22")
      .then((response) => {
        setI3(response.data.results.path);
      });
    axios
      .get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=23")
      .then((response) => {
        setI4(response.data.results.path);
      });
    axios
      .get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=24")
      .then((response) => {
        setI5(response.data.results.path);
      });
    axios
      .get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=25")
      .then((response) => {
        setI6(response.data.results.path);
      });
    axios
      .get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=26")
      .then((response) => {
        setI7(response.data.results.path);
      });
  }, []);

  const [accent, setAccent] = useState();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [i1, setI1] = useState();
  const [i2, setI2] = useState();
  const [i3, setI3] = useState();
  const [i4, setI4] = useState();
  const [i5, setI5] = useState();
  const [i6, setI6] = useState();
  const [i7, setI7] = useState();
  const [f1, setF1] = useState();
  const [f2, setF2] = useState();
  const [f3, setF3] = useState();
  const [f4, setF4] = useState();
  const [f5, setF5] = useState();
  const [f6, setF6] = useState();
  const [f7, setF7] = useState();
  const [showAlert, setShowAlert] = useState(false);
  async function saveProduct(ev) {
    ev.preventDefault()
    const data = {
      accent,
      title,
      desc,
    };
    await axios.put("/api/partners", data);


    const formDataOne = new FormData();
    formDataOne.append("id", "20");
    formDataOne.append("image", f1);

    await axios.put(
      "https://timkaqwerty.pythonanywhere.com/hds/img/",
      formDataOne,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const formDataTwo = new FormData();
    formDataTwo.append("id", "21");
    formDataTwo.append("image", f2);

    await axios.put(
      "https://timkaqwerty.pythonanywhere.com/hds/img/",
      formDataTwo,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const formDataThree = new FormData();
    formDataThree.append("id", "22");
    formDataThree.append("image", f3);

    await axios.put(
      "https://timkaqwerty.pythonanywhere.com/hds/img/",
      formDataThree,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const formDataFour = new FormData();
    formDataFour.append("id", "23");
    formDataFour.append("image", f4);

    await axios.put(
      "https://timkaqwerty.pythonanywhere.com/hds/img/",
      formDataFour,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const formDataFive = new FormData();
    formDataFive.append("id", "24");
    formDataFive.append("image", f5);

    await axios.put(
      "https://timkaqwerty.pythonanywhere.com/hds/img/",
      formDataFive,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const formDataSix = new FormData();
    formDataSix.append("id", "25");
    formDataSix.append("image", f6);

    await axios.put(
      "https://timkaqwerty.pythonanywhere.com/hds/img/",
      formDataSix,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const formDataSeven = new FormData();
    formDataSeven.append("id", "26");
    formDataSeven.append("image", f7);

    await axios.put(
      "https://timkaqwerty.pythonanywhere.com/hds/img/",
      formDataSeven,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    axios.get("/api/partners").then((response) => {
      setAccent(response.data[0].accent);
      setTitle(response.data[0].title);
      setDesc(response.data[0].desc);
    });
    axios
      .get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=20")
      .then((response) => {
        setI1(response.data.results.path);
      });
    axios
      .get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=21")
      .then((response) => {
        setI2(response.data.results.path);
      });
    axios
      .get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=22")
      .then((response) => {
        setI3(response.data.results.path);
      });
    axios
      .get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=23")
      .then((response) => {
        setI4(response.data.results.path);
      });
    axios
      .get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=24")
      .then((response) => {
        setI5(response.data.results.path);
      });
    axios
      .get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=25")
      .then((response) => {
        setI6(response.data.results.path);
      });
    axios
      .get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=26")
      .then((response) => {
        setI7(response.data.results.path);
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
      <h1 className="my-4">Настройка услуг</h1>
      <form onSubmit={saveProduct}>
        <label>Акцентное слово</label>
        <input
          type="text"
          placeholder="Акцентное слово"
          value={accent}
          onChange={(ev) => setAccent(ev.target.value)}
        />

        <label>Заголовок</label>
        <input
          type="text"
          placeholder="Заголовок"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />

        <label>Описание</label>
        <input
          type="text"
          placeholder="Описание"
          value={desc}
          onChange={(ev) => setDesc(ev.target.value)}
        />
        <h3>Фотки партнеров (4 штук)</h3>
        <input
          type="file"
          onChange={(event) => {
            setF1(event.target.files[0]);
          }}
        />
        <img src={i1} style={{ width: '400px', height: '400px'}} />
        <input
          type="file"
          onChange={(event) => {
            setF2(event.target.files[0]);
          }}
        />
        <img src={i2} style={{ width: '400px', height: '400px'}} />
        <input
          type="file"
          onChange={(event) => {
            setF3(event.target.files[0]);
          }}
        />
        <img src={i3} style={{ width: '400px', height: '400px'}} />
        <input
          type="file"
          onChange={(event) => {
            setF4(event.target.files[0]);
          }}
        />
        <img src={i4} style={{ width: '400px', height: '400px'}} />
        <input
          type="file"
          onChange={(event) => {
            setF5(event.target.files[0]);
          }}
        />
        <img src={i5} style={{ width: '400px', height: '400px'}} />
        <input
          type="file"
          onChange={(event) => {
            setF6(event.target.files[0]);
          }}
        />
        <img src={i6} style={{ width: '400px', height: '400px'}} />
        <input
          type="file"
          onChange={(event) => {
            setF7(event.target.files[0]);
          }}
        />
        <img src={i7} style={{ width: '400px', height: '400px'}} />
        <button type="submit" className="btn-primary my-3">
          Сохранить
        </button>
      </form>
    </Layout>
  );
}
