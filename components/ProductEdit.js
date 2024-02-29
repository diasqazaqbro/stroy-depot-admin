import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Editor } from "@tinymce/tinymce-react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/lib/config";

export default function ProductEdit({ id }) {
  const [file, setFile] = useState();
  const editorRef = useRef(null);
  useEffect(() => {
    axios.get(`/api/products?id=${id}`).then((response) => {
      setData(response.data);
    });
  }, [id]);
  const [data, setData] = useState({});
  const [isChecked, setIsChecked] = useState(data.importantProducts);

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
    if (editorRef.current) {
      ev.preventDefault();
      const storageRef = ref(storage, `products/${title}`);
      await uploadBytes(storageRef, file);
      const photoURL = await getDownloadURL(storageRef);
      const postData = {
        code: data.code,
        description: editorRef.current.getContent(),
        price: data.price,
        title: data.title,
        image: photoURL,
        importantProducts: isChecked,
        category: data.category,
      };
      await axios.put("/api/products", { ...postData, id });
      setGoToProducts(true);
    }
  }

  if (goToProducts) {
    router.push("/products");
  }

  const handleCheckedChange = () => {
    setIsChecked(!isChecked);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <>
      <form onSubmit={saveProduct}>
        <div className="form-group">
          <label htmlFor="fileInput" className="cursor-pointer">
            <span className="bg-blue-500 text-white px-2 mr-4 py-1 rounded">
              Добавить фотографию
            </span>
            <input
              id="fileInput"
              onClick={(event) => {
                handleFileChange(event);
              }}
              type="file"
              style={{ display: "none" }}
            />
          </label>
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
          <select
            id="category"
            name="category"
            value={data.category}
            onChange={handleChange}
            className="p-2 border rounded-md"
          >
            <option value={1}>Полиуретановые пены</option>
            <option value={2}>Пено клей</option>
            <option value={3}>Силиконовые герметики</option>
            <option value={4}>Монтажные клей</option>
            <option value={5}>Краски аэрозольные</option>
            <option value={6}>Затирка для швов</option>
            <option value={7}>Обойные клей</option>
            <option value={8}>Разное</option>
          </select>
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
        <div className="mt-4 mb-6">
          <div className="flex self-center">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckedChange}
              className="mr-2 h-5 w-5 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
            />
            <span className="text-sm font-medium text-gray-900">
              Главный товар
            </span>
          </div>
        </div>
        <Editor
          apiKey="a3mu452cbh2dxc6zy2w75jelhgvjq4nk8ic27hcwfkx12mhv"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue={data.description}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "searchreplace",
              "visualblocks",
              "codesample code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent |" +
              "media | image  | preview | table | code",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
        <img src={data.image} className="h-[400px] pt-5 border-t-2" />

        <button type="submit" className="btn-primary my-3">
          Сохранить
        </button>
      </form>
    </>
  );
}
