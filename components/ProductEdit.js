import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function ProductEdit({ id }) {
  useEffect(() => {
    axios.get(`/api/products?id=${id}`).then((response) => {
      setData(response.data);
    });
  }, [id]);
  const [data, setData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [goToProducts, setGoToProducts] = useState(false);
  const router = useRouter();

  async function saveProduct(ev) {
    ev.preventDefault();
    console.log(data);
    await axios.put("/api/products", { ...data, id });
    setGoToProducts(true);
  }

  if (goToProducts) {
    router.push("/products");
  }

  return (
    <>
      <form onSubmit={saveProduct}>
        <div className="form-group">
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
          <label htmlFor="price">Цена</label>
          <input
            type="text"
            id="price"
            name="price"
            className="form-control"
            value={data.price || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="code">Код продукта</label>
          <input
            type="text"
            id="code"
            name="code"
            className="form-control"
            value={data.code || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Ссылка фотка</label>
          <input
            type="text"
            id="image"
            name="image"
            className="form-control"
            value={data.image || ""}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Описание</label>
          <input
            type="text"
            id="description"
            name="description"
            className="form-control"
            value={data.description || ""}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn-primary my-3">
          Сохранить
        </button>
      </form>
    </>
  );
}
