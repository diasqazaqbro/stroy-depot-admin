import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function ProductForm() {
  const [title, setTitle] = useState();
  const [code, setCode] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [goToProducts, setGoToProducts] = useState(false);
  const router = useRouter();

  async function saveProduct(ev) {
    ev.preventDefault();

    const data = {
      title,
      code,
      description,
      price,
      image
    };
    await axios.post("/api/products", data);
    setGoToProducts(true);

    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (goToProducts) {
    router.push("/products");
  }

  return (
    <>
      {showAlert && (
        <div className="bg-red-500 text-white px-4 py-2 mt-4 rounded">
          Ошибка
        </div>
      )}
      <form onSubmit={saveProduct}>
        <label>Заголовок</label>
        <input
          type="text"
          placeholder="Заголовок"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <label>Поставить код проект</label>
        <input
          type="text"
          placeholder="Поставить код проект"
          value={code}
          onChange={(ev) => setCode(ev.target.value)}
        />
        <label>Цена</label>
        <input
          placeholder="Цена"
          value={price}
          onChange={(ev) => setPrice(ev.target.value)}
        />
        <label>Ссылка на фотку</label>
        <input
          placeholder="Ссылка на фотку"
          value={image}
          onChange={(ev) => setImage(ev.target.value)}
        />
        <label>Описание</label>
        <textarea
          placeholder="Описание"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />

        <button type="submit" className="btn-primary">
          Save
        </button>
      </form>
    </>
  );
}
