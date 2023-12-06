import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Projects({}) {
  useEffect(() => {
    axios.get("/api/projects").then((response) => {
      setDesignTitleOne(response.data[0].designTitleOne);
      setDesignTitleTwo(response.data[0].designTitleTwo);
      setDesignTitleThree(response.data[0].designTitleThree);
      setDesignTitleFour(response.data[0].designTitleFour);
      setDesignTitleFive(response.data[0].designTitleFive);
      setATitleOne(response.data[0].aTitleOne);
      setATitleTwo(response.data[0].aTitleTwo);
      setATitleThree(response.data[0].aTitleThree);
      setDesignLinkOne(response.data[0].designLinkOne);
      setDesignLinkTwo(response.data[0].designLinkTwo);
      setDesignLinkThree(response.data[0].designLinkThree);
      setDesignLinkFour(response.data[0].designLinkFour);
      setDesignLinkFive(response.data[0].designLinkFive);
      setALinkOne(response.data[0].aLinkOne);
      setALinkTwo(response.data[0].aLinkTwo);
      setALinkThree(response.data[0].aLinkThree);
    });
    axios
      .get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=3")
      .then((response) => {
        setImagesOne(response.data.results.path);
      });
    axios
      .get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=4")
      .then((response) => {
        setImagesTwo(response.data.results.path);
      });
    axios
      .get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=5")
      .then((response) => {
        setImagesThree(response.data.results.path);
      });
    axios
      .get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=6")
      .then((response) => {
        setImagesFour(response.data.results.path);
      });
    axios
      .get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=7")
      .then((response) => {
        setImagesFive(response.data.results.path);
      });
    axios
      .get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=8")
      .then((response) => {
        setImagesSix(response.data.results.path);
      });
    axios
      .get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=9")
      .then((response) => {
        setImagesSeven(response.data.results.path);
      });
    axios
      .get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=10")
      .then((response) => {
        setImagesEight(response.data.results.path);
      });
  }, []);
  const [designTitleOne, setDesignTitleOne] = useState();
  const [designTitleTwo, setDesignTitleTwo] = useState();
  const [designTitleThree, setDesignTitleThree] = useState();
  const [designTitleFour, setDesignTitleFour] = useState();
  const [designTitleFive, setDesignTitleFive] = useState();
  const [aTitleOne, setATitleOne] = useState();
  const [aTitleTwo, setATitleTwo] = useState();
  const [aTitleThree, setATitleThree] = useState();
  const [designLinkOne, setDesignLinkOne] = useState();
  const [designLinkTwo, setDesignLinkTwo] = useState();
  const [designLinkThree, setDesignLinkThree] = useState();
  const [designLinkFour, setDesignLinkFour] = useState();
  const [designLinkFive, setDesignLinkFive] = useState();
  const [aLinkOne, setALinkOne] = useState();
  const [aLinkTwo, setALinkTwo] = useState();
  const [aLinkThree, setALinkThree] = useState();
  const [imagesOne, setImagesOne] = useState();
  const [imagesTwo, setImagesTwo] = useState();
  const [imagesThree, setImagesThree] = useState();
  const [imagesFour, setImagesFour] = useState();
  const [imagesFive, setImagesFive] = useState();
  const [imagesSix, setImagesSix] = useState();
  const [imagesSeven, setImagesSeven] = useState();
  const [imagesEight, setImagesEight] = useState();
  const [fileOne, setFileOne] = useState(null);
  const [fileTwo, setFileTwo] = useState(null);
  const [fileThree, setFileThree] = useState(null);
  const [fileFour, setFileFour] = useState(null);
  const [fileFive, setFileFive] = useState(null);
  const [fileSix, setFileSix] = useState(null);
  const [fileSeven, setFileSeven] = useState(null);
  const [fileEight, setFileEight] = useState(null);
  async function saveProduct(ev) {
    const data = {
      designTitleOne,
      designTitleTwo,
      designTitleThree,
      designTitleFour,
      designTitleFive,
      aTitleOne,
      aTitleTwo,
      aTitleThree,
      designLinkOne,
      designLinkTwo,
      designLinkThree,
      designLinkFour,
      designLinkFive,
      aLinkOne,
      aLinkTwo,
      aLinkThree,
    };
    await axios.put("/api/projects", data);

    const formDataOne = new FormData();
    formDataOne.append("id", "3");
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

    const formDataTwo = new FormData();
    formDataTwo.append("id", "4");
    formDataTwo.append("image", fileTwo);

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
    formDataThree.append("id", "5");
    formDataThree.append("image", fileThree);

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
    formDataFour.append("id", "6");
    formDataFour.append("image", fileFour);

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
    formDataFive.append("id", "7");
    formDataFive.append("image", fileFive);

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
    formDataSix.append("id", "8");
    formDataSix.append("image", fileSix);

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
    formDataSeven.append("id", "9");
    formDataSeven.append("image", fileSeven);

    await axios.put(
      "https://timkaqwerty.pythonanywhere.com/hds/img/",
      formDataSeven,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const formDataEight = new FormData();
    formDataEight.append("id", "10");
    formDataEight.append("image", fileEight);

    await axios.put(
      "https://timkaqwerty.pythonanywhere.com/hds/img/",
      formDataEight,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    
  }
  return (
    <Layout>
      <h1 className="my-4">Настройка раздела последние проекты</h1>
      {/* <img src="/helpers/h4.png" style={{ width: "100%" }} /> */}
      <form onSubmit={saveProduct}>
        <h1 className="my-2">Дизайн</h1>
        <h2 className="my-2">01</h2>
        <label>Заголовок Дизайна</label>
        <input
          type="text"
          placeholder="Заголовок Дизайна"
          value={designTitleOne}
          onChange={(ev) => setDesignTitleOne(ev.target.value)}
        />
        <input
          type="text"
          placeholder="Ссылка на Дизайн"
          value={designLinkOne}
          onChange={(ev) => setDesignLinkOne(ev.target.value)}
        />
        <input
          type="file"
          onChange={(event) => {
            setFileOne(event.target.files[0]);
          }}
        />
        <img src={imagesOne} style={{ width: '400px', height: '400px'}} />
        <h2 className="my-2">02</h2>
        <label>Заголовок Дизайна</label>
        <input
          type="text"
          placeholder="Заголовок Дизайна"
          value={designTitleTwo}
          onChange={(ev) => setDesignTitleTwo(ev.target.value)}
        />
        <input
          type="text"
          placeholder="Ссылка на Дизайн"
          value={designLinkTwo}
          onChange={(ev) => setDesignLinkTwo(ev.target.value)}
        />
        <input
          type="file"
          onChange={(event) => {
            setFileTwo(event.target.files[0]);
          }}
        />
        <img src={imagesTwo} style={{ width: '400px', height: '400px'}} />
        <h2 className="my-2">03</h2>
        <label>Заголовок Дизайна</label>
        <input
          type="text"
          placeholder="Заголовок Дизайна"
          value={designTitleThree}
          onChange={(ev) => setDesignTitleThree(ev.target.value)}
        />
        <input
          type="text"
          placeholder="Ссылка на Дизайн"
          value={designLinkThree}
          onChange={(ev) => setDesignLinkThree(ev.target.value)}
        />
        <input
          type="file"
          onChange={(event) => {
            setFileThree(event.target.files[0]);
          }}
        />
        <img src={imagesThree} style={{ width: '400px', height: '400px'}} />
        <h2 className="my-2">04</h2>
        <label>Заголовок Дизайна</label>
        <input
          type="text"
          placeholder="Заголовок Дизайна"
          value={designTitleFour}
          onChange={(ev) => setDesignTitleFour(ev.target.value)}
        />
        <input
          type="text"
          placeholder="Ссылка на Дизайн"
          value={designLinkFour}
          onChange={(ev) => setDesignLinkFour(ev.target.value)}
        />
        <input
          type="file"
          onChange={(event) => {
            setFileFour(event.target.files[0]);
          }}
        />
        <img src={imagesFour} style={{ width: '400px', height: '400px'}} />
        <h2 className="my-2">05</h2>
        <label>Заголовок Дизайна</label>
        <input
          type="text"
          placeholder="Заголовок Дизайна"
          value={designTitleFive}
          onChange={(ev) => setDesignTitleFive(ev.target.value)}
        />
        <input
          type="text"
          placeholder="Ссылка на Дизайн"
          value={designLinkFive}
          onChange={(ev) => setDesignLinkFive(ev.target.value)}
        />
        <input
          type="file"
          onChange={(event) => {
            setFileFive(event.target.files[0]);
          }}
        />
        <img src={imagesFive} style={{ width: '400px', height: '400px'}} />
        <h1 className="my-2">Архитектуры</h1>
        <h2 className="my-2">01</h2>
        <label>Заголовок Архитектуры</label>
        <input
          type="text"
          placeholder="Заголовок Архитектуры"
          value={aTitleOne}
          onChange={(ev) => setATitleOne(ev.target.value)}
        />
        <input
          type="text"
          placeholder="Ссылка Архитектуры"
          value={aLinkOne}
          onChange={(ev) => setALinkOne(ev.target.value)}
        />
        <input
          type="file"
          onChange={(event) => {
            setFileSix(event.target.files[0]);
          }}
        />
        <img src={imagesSix} style={{ width: '400px', height: '400px'}} />
        <h2 className="my-2">02</h2>
        <label>Заголовок Архитектуры</label>
        <input
          type="text"
          placeholder="Заголовок Архитектуры"
          value={aTitleTwo}
          onChange={(ev) => setATitleTwo(ev.target.value)}
        />
        <input
          type="text"
          placeholder="Ссылка Архитектуры"
          value={aLinkTwo}
          onChange={(ev) => setALinkTwo(ev.target.value)}
        />
        <input
          type="file"
          onChange={(event) => {
            setFileSeven(event.target.files[0]);
          }}
        />
        <img src={imagesSeven} style={{ width: '400px', height: '400px'}} />
        <h2 className="my-2">03</h2>
        <label>Заголовок Архитектуры</label>
        <input
          type="text"
          placeholder="Заголовок Архитектуры"
          value={aTitleThree}
          onChange={(ev) => setATitleThree(ev.target.value)}
        />
        <input
          type="text"
          placeholder="Ссылка Архитектуры"
          value={aLinkThree}
          onChange={(ev) => setALinkThree(ev.target.value)}
        />
        <input
          type="file"
          onChange={(event) => {
            setFileEight(event.target.files[0]);
          }}
        />
        <img src={imagesEight} style={{ width: '400px', height: '400px'}} />
        <button type="submit" className="btn-primary">
          Сохранить
        </button>
      </form>
    </Layout>
  );
}
