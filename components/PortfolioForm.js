import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function ProductForm() {
  const [file, setFile] = useState();
  const [img, setImg] = useState();

  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://86.107.44.200:800/api/get_portfolio_images/fsafasFS1",
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
    };
    fetchData();
  }, []);
  async function saveProduct(ev) {
    ev.preventDefault();
    const formData = new FormData();
    formData.append("id", "fsafasFS1");
    formData.append("image", file);

    await axios.post(
      "http://86.107.44.200:800/api/get_portfolio_images/fsafasFS1",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    
    // const data = {
    //   title,
    //   description,
    //   price,
    //   images,
    //   category,
    //   properties: productProperties,
    // };
    // if (_id) {
    //   //update
    //   await axios.put("/api/portfolio", { ...data, _id });
    // } else {
    //   //create
    //   await axios.post("/api/portfolio", data);
    // }
    // setGoToProducts(true);
  }
  const deleteMode = async () => {
    await axios.delete(
      "http://86.107.44.200:800/api/get_portfolio_images/fsafasFS1",
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };
  return (
    <>
      <form onSubmit={saveProduct}>
        <label>Главная фотка</label>
        {/* <div className="mb-2 flex flex-wrap gap-1">
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
          <input type="file" onChange={uploadImages} className="hidden" />
        </label>
      </div> */}

        <input
          type="file"
          onChange={(event) => {
            setFile(event.target.files[0]);
          }}
        />
        {/* <label>Заголовок</label>
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
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <label>Описание</label>
      <textarea
        placeholder="Описание"
        value={description}
        onChange={(ev) => setDescription(ev.target.value)}
      /> */}
        <button type="submit" className="btn-primary">
          Save
        </button>
      </form>
      <button onClick={deleteMode} type="submit" className="btn-primary">
        delete
      </button>
    </>
  );
}
