import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { addDoc, collection } from "firebase/firestore/lite";
import { db, storage } from "@/lib/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Editor } from "@tinymce/tinymce-react";

export default function ProductForm() {
  const [title, setTitle] = useState();
  const [code, setCode] = useState();
  const [price, setPrice] = useState();
  const [goToProducts, setGoToProducts] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [file, setFile] = useState();
  const editorRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const router = useRouter();

  async function saveProduct(ev) {
    if (editorRef.current) {
      ev.preventDefault();
      if (!file) {
        alert("Загрузите фотку");
        return;
      }

      const productsCollection = collection(db, "products");
      const currentDate = new Date();

      const storageRef = ref(storage, `products/${title}`);
      await uploadBytes(storageRef, file);
      const photoURL = await getDownloadURL(storageRef);
      const updatedData = {
        code: code,
        description: editorRef.current.getContent(),
        price: price,
        title: title,
        image: photoURL,
        time_posted: currentDate,
        importasntProducts: isChecked,
        category: selectedCategory,
      };
      await addDoc(productsCollection, updatedData);
      setGoToProducts(true);
    }
  }

  if (goToProducts) {
    router.push("/products");
  }

  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
  };
  return (
    <>
      <form onSubmit={saveProduct}>
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
        <div className="mt-4 mb-6">
          <div className="flex self-center">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleChange}
              className="mr-2 h-5 w-5 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
            />
            <span className="text-sm font-medium text-gray-900">
              Главный товар
            </span>
          </div>
        </div>
        <label>Заголовок</label>
        <input
          type="text"
          placeholder="Заголовок"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <label htmlFor="category">Категория:</label>
        <select
          id="category"
          name="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
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
        <label>Краткое описание</label>
        <input
          type="text"
          placeholder="Краткое описание"
          value={code}
          onChange={(ev) => setCode(ev.target.value)}
        />
        <label>Цена</label>
        <input
          placeholder="Цена"
          value={price}
          onChange={(ev) => setPrice(ev.target.value)}
        />
        <Editor
          apiKey="a3mu452cbh2dxc6zy2w75jelhgvjq4nk8ic27hcwfkx12mhv"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue={'<h2>Применение</h2><p>&nbsp;</p><h2><span style="color: rgb(0, 0, 0);">Преимущества</span></h2><p>&nbsp;</p><h2><span style="color: rgb(0, 0, 0);">Технические характеристики</span></h2><table style="border-collapse: collapse; width: 97.8405%; height: 176.344px;" border="1"><colgroup><col style="width: 50.0003%;"><col style="width: 50.0003%;"></colgroup><tbody><tr style="height: 19.5938px;"><td style="height: 19.5938px;">Высокая производительность: до 65 литров</td><td style="height: 19.5938px;">&nbsp;</td></tr><tr style="height: 19.5938px;"><td style="height: 19.5938px;">Предварительное время обработки:</td><td style="height: 19.5938px;">&nbsp;</td></tr><tr style="height: 19.5938px;"><td style="height: 19.5938px;">Температура баллона (оптимально +20&deg;C):</td><td style="height: 19.5938px;">&nbsp;</td></tr><tr style="height: 19.5938px;"><td style="height: 19.5938px;">Температура поверхности:</td><td style="height: 19.5938px;">&nbsp;</td></tr><tr style="height: 19.5938px;"><td style="height: 19.5938px;">Класс огнестойкости:</td><td style="height: 19.5938px;">&nbsp;</td></tr><tr style="height: 19.5938px;"><td style="height: 19.5938px;">Срок годности:</td><td style="height: 19.5938px;">&nbsp;</td></tr><tr style="height: 19.5938px;"><td style="height: 19.5938px;">Вид пены:</td><td style="height: 19.5938px;">&nbsp;</td></tr><tr style="height: 19.5938px;"><td style="height: 19.5938px;">Сезон применения:</td><td style="height: 19.5938px;">&nbsp;</td></tr></tbody></table>'}
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

        <button type="submit" className="btn-primary">
          Save
        </button>
      </form>
    </>
  );
}
