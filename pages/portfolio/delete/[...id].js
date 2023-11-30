import Layout from "@/components/Layout";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "axios";

export default function DeletePortfolioPage() {
  const router = useRouter();
  const [productInfo,setProductInfo] = useState();
  const {id} = router.query;
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get('/api/portfolio?id='+id).then(response => {
      setProductInfo(response.data);
    });
  }, [id]);
  function goBack() {
    router.push('/portfolio');
  }
  async function deleteProduct() {
    await axios.delete('/api/portfolio?id='+id);
    goBack();
  }
  return (
    <Layout>
      <h1 className="text-center">Ты уверен что хочешь удалить?
        &nbsp;&quot;{productInfo?.title}&quot;?
      </h1>
      <div className="flex gap-2 justify-center">
        <button
          onClick={deleteProduct}
          className="btn-red">Да</button>
        <button
          className="btn-default"
          onClick={goBack}>
          Нет
        </button>
      </div>
    </Layout>
  );
}
