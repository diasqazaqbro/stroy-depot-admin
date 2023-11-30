import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function ProductForm({
  _id,
  title: existingTitle,
  supTitle: existingSupTitle,
  desc: existingDesc,
}) {
  console.log(_id);
  console.log(existingTitle);
  console.log(existingSupTitle);
  console.log(existingDesc);
  const [title, setTitle] = useState(existingTitle || "");
  const [supTitle, setSupTitle] = useState(existingSupTitle || "");
  const [desc, setDesc] = useState(existingDesc || "");
  const [imgId, setImgId] = useState();
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

  const [goToProducts, setGoToProducts] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let randomNum = Math.random();
    setImgId(randomNum);

    const apiUrl = "https://api.reddel.kz/get_portfolio_images";
    axios.get(`${apiUrl}/${imgId}1`).then((response) => {
      if (response.status === 404) {
        setImagesOne("");
      } else {
        setImagesOne(response.data.results.path);
      }
    });
    axios.get(`${apiUrl}/${imgId}2`).then((response) => {
      if (response.status === 404) {
        setImagesTwo("");
      } else {
        setImagesTwo(response.data.results.path);
      }
    });
    axios.get(`${apiUrl}/${imgId}3`).then((response) => {
      if (response.status === 404) {
        setImagesThree("");
      } else {
        setImagesThree(response.data.results.path);
      }
    });
    axios.get(`${apiUrl}/${imgId}4`).then((response) => {
      if (response.status === 404) {
        setImagesFour("");
      } else {
        setImagesFour(response.data.results.path);
      }
    });
    axios.get(`${apiUrl}/${imgId}5`).then((response) => {
      if (response.status === 404) {
        setImagesFive("");
      } else {
        setImagesFive(response.data.results.path);
      }
    });
    axios.get(`${apiUrl}/${imgId}6`).then((response) => {
      if (response.status === 404) {
        setImagesSix("");
      } else {
        setImagesSix(response.data.results.path);
      }
    });
    axios.get(`${apiUrl}/${imgId}7`).then((response) => {
      if (response.status === 404) {
        setImagesSeven("");
      } else {
        setImagesSeven(response.data.results.path);
      }
    });
    axios.get(`${apiUrl}/${imgId}8`).then((response) => {
      if (response.status === 404) {
        setImagesEight("");
      } else {
        setImagesEight(response.data.results.path);
      }
    });
  }, []);

  async function saveProduct(ev) {
    ev.preventDefault();

    const apiUrl = "https://api.reddel.kz/get_portfolio_images";

    if (fileOne != null) {
      const formDataOne = new FormData();
      formDataOne.append("id", `${imgId}1`);
      formDataOne.append("image", fileOne);

      await axios.post(`${apiUrl}/${imgId}1`, formDataOne, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }

    if (fileTwo != null) {
      const formDataTwo = new FormData();
      formDataTwo.append("id", `${imgId}2`);
      formDataTwo.append("image", fileTwo);

      await axios.post(`${apiUrl}/${imgId}2`, formDataTwo, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }

    if (fileThree != null) {
      const formDataThree = new FormData();
      formDataThree.append("id", `${imgId}3`);
      formDataThree.append("image", fileThree);

      await axios.post(`${apiUrl}/${imgId}3`, formDataThree, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }

    if (fileFour != null) {
      const formDataFour = new FormData();
      formDataFour.append("id", `${imgId}4`);
      formDataFour.append("image", fileFour);

      await axios.post(`${apiUrl}/${imgId}4`, formDataFour, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }

    if (fileFive != null) {
      const formDataFive = new FormData();
      formDataFive.append("id", `${imgId}5`);
      formDataFive.append("image", fileFive);

      await axios.post(`${apiUrl}/${imgId}5`, formDataFive, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }

    if (fileSix != null) {
      const formDataSix = new FormData();
      formDataSix.append("id", `${imgId}6`);
      formDataSix.append("image", fileSix);

      await axios.post(`${apiUrl}/${imgId}6`, formDataSix, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }

    if (fileSeven != null) {
      const formDataSeven = new FormData();
      formDataSeven.append("id", `${imgId}7`);
      formDataSeven.append("image", fileSeven);

      await axios.post(`${apiUrl}/${imgId}7`, formDataSeven, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }

    if (fileEight != null) {
      const formDataEight = new FormData();
      formDataEight.append("id", `${imgId}8`);
      formDataEight.append("image", fileEight);

      await axios.post(`${apiUrl}/${imgId}8`, formDataEight, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }

    const data = {
      title,
      supTitle,
      desc,
      imgId,
    };
    if (_id) {
      //update
      await axios.put("/api/portfolio", {...data,_id});
    } else {
      //create
      await axios.post("/api/portfolio", data);
    }
    setGoToProducts(true);
  }

  if (goToProducts) {
    router.push("/portfolio");
  }

  const deleteMode = async (id) => {
    await axios.delete(
      `https://api.reddel.kz/get_portfolio_images/${imgId}${id}`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };
  return (
    <form onSubmit={saveProduct}>
      <label>Заголовок</label>
      <input
        type="text"
        placeholder="Заголовок"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <label>Под заголовок</label>
      <input
        type="text"
        placeholder="Под заголовок"
        value={supTitle}
        onChange={(ev) => setSupTitle(ev.target.value)}
      />
      <label>Описание</label>
      <textarea
        placeholder="Описание"
        value={desc}
        onChange={(ev) => setDesc(ev.target.value)}
      />
      <label>Главная фотка</label>
      <div
        style={{
          border: "2px solid black",
          marginTop: "20px",
          padding: "25px",
        }}
      >
        <div>
          <button
            onClick={() => {
              deleteMode(1);
            }}
            type="submit"
            className="btn-primary"
          >
            delete
          </button>
        </div>
        <input
          type="file"
          onChange={(event) => {
            setFileOne(event.target.files[0]);
          }}
        />
        <img src={imagesOne} style={{ width: "400px", height: "400px" }} />
      </div>
      <label>Остальные фотки</label>
      <div
        style={{
          border: "2px solid black",
          marginTop: "20px",
          padding: "25px",
        }}
      >
        <div>
          <button
            onClick={() => {
              deleteMode(2);
            }}
            type="submit"
            className="btn-primary"
          >
            delete
          </button>
        </div>
        <input
          type="file"
          onChange={(event) => {
            setFileTwo(event.target.files[0]);
          }}
        />
        <img src={imagesTwo} style={{ width: "400px", height: "400px" }} />
      </div>
      <div
        style={{
          border: "2px solid black",
          marginTop: "20px",
          padding: "25px",
        }}
      >
        <div>
          <button
            onClick={() => {
              deleteMode(3);
            }}
            type="submit"
            className="btn-primary"
          >
            delete
          </button>
        </div>
        <input
          type="file"
          onChange={(event) => {
            setFileThree(event.target.files[0]);
          }}
        />
        <img src={imagesThree} style={{ width: "400px", height: "400px" }} />
      </div>
      <div
        style={{
          border: "2px solid black",
          marginTop: "20px",
          padding: "25px",
        }}
      >
        <div>
          <button
            onClick={() => {
              deleteMode(4);
            }}
            type="submit"
            className="btn-primary"
          >
            delete
          </button>
        </div>
        <input
          type="file"
          onChange={(event) => {
            setFileFour(event.target.files[0]);
          }}
        />
        <img src={imagesFour} style={{ width: "400px", height: "400px" }} />
      </div>
      <div
        style={{
          border: "2px solid black",
          marginTop: "20px",
          padding: "25px",
        }}
      >
        <div>
          <button
            onClick={() => {
              deleteMode(5);
            }}
            type="submit"
            className="btn-primary"
          >
            delete
          </button>
        </div>
        <input
          type="file"
          onChange={(event) => {
            setFileFive(event.target.files[0]);
          }}
        />
        <img src={imagesFive} style={{ width: "400px", height: "400px" }} />
      </div>
      <div
        style={{
          border: "2px solid black",
          marginTop: "20px",
          padding: "25px",
        }}
      >
        <div>
          <button
            onClick={() => {
              deleteMode(6);
            }}
            type="submit"
            className="btn-primary"
          >
            delete
          </button>
        </div>
        <input
          type="file"
          onChange={(event) => {
            setFileSix(event.target.files[0]);
          }}
        />
        <img src={imagesSix} style={{ width: "400px", height: "400px" }} />
      </div>
      <div
        style={{
          border: "2px solid black",
          marginTop: "20px",
          padding: "25px",
        }}
      >
        <div>
          <button
            onClick={() => {
              deleteMode(7);
            }}
            type="submit"
            className="btn-primary"
          >
            delete
          </button>
        </div>
        <input
          type="file"
          onChange={(event) => {
            setFileSeven(event.target.files[0]);
          }}
        />
        <img src={imagesSeven} style={{ width: "400px", height: "400px" }} />
      </div>
      <div
        style={{
          border: "2px solid black",
          marginTop: "20px",
          padding: "25px",
        }}
      >
        <div>
          <button
            onClick={() => {
              deleteMode(8);
            }}
            type="submit"
            className="btn-primary"
          >
            delete
          </button>
        </div>
        <input
          type="file"
          onChange={(event) => {
            setFileEight(event.target.files[0]);
          }}
        />
        <img src={imagesEight} style={{ width: "400px", height: "400px" }} />
      </div>

      <button type="submit" className="btn-primary">
        Save
      </button>
    </form>
  );
}
