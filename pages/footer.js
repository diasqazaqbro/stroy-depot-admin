import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Footer({}) {
  useEffect(() => {
    axios.get("/api/footer").then((response) => {
      setAddress(response.data[0].address);
      setWorkTime(response.data[0].workTime);
      setHoliday(response.data[0].holiday);
      setClientNumber(response.data[0].clientNumber);
      setClientEmail(response.data[0].clientEmail);
      setPartnerNumber(response.data[0].partnerNumber);
      setPartnerEmail(response.data[0].partnerEmail);
    });
  }, []);

  const [address, setAddress] = useState();
  const [workTime, setWorkTime] = useState();
  const [holiday, setHoliday] = useState();
  const [clientNumber, setClientNumber] = useState();
  const [clientEmail, setClientEmail] = useState();
  const [partnerNumber, setPartnerNumber] = useState();
  const [partnerEmail, setPartnerEmail] = useState();
  const [showAlert, setShowAlert] = useState(false);

  async function saveProduct(ev) {
    ev.preventDefault()
    const data = {
      address,
      workTime,
      holiday,
      clientNumber,
      clientEmail,
      partnerNumber,
      partnerEmail,
    };
    await axios.put("/api/footer", data);
    axios.get("/api/footer").then((response) => {
      setAddress(response.data[0].address);
      setWorkTime(response.data[0].workTime);
      setHoliday(response.data[0].holiday);
      setClientNumber(response.data[0].clientNumber);
      setClientEmail(response.data[0].clientEmail);
      setPartnerNumber(response.data[0].partnerNumber);
      setPartnerEmail(response.data[0].partnerEmail);
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
      <h1 className="my-4">Настройка футера</h1>
      <form onSubmit={saveProduct}>
        <label>Введите ваш адрес</label>
        <input
          type="text"
          placeholder="Введите ваш адрес"
          value={address}
          onChange={(ev) => setAddress(ev.target.value)}
        />

        <label>Со сколько и до скольки вы работаете</label>
        <input
          type="text"
          placeholder="Со сколько и до скольки вы работаете"
          value={workTime}
          onChange={(ev) => setWorkTime(ev.target.value)}
        />

        <label>Выходной</label>
        <input
          type="text"
          placeholder="Выходной"
          value={holiday}
          onChange={(ev) => setHoliday(ev.target.value)}
        />
        <label>Номер для клиентов</label>
        <input
          type="text"
          placeholder="Номер для клиентов"
          value={clientNumber}
          onChange={(ev) => setClientNumber(ev.target.value)}
        />

        <label>Почта для клиентов</label>
        <input
          type="text"
          placeholder="Почта для клиентов"
          value={clientEmail}
          onChange={(ev) => setClientEmail(ev.target.value)}
        />

        <label>Номер для партнеров</label>
        <input
          type="text"
          placeholder="Номер для партнеров"
          value={partnerNumber}
          onChange={(ev) => setPartnerNumber(ev.target.value)}
        />
        <label>Почта для партнеров</label>
        <input
          type="text"
          placeholder="Почта для партнеров"
          value={partnerEmail}
          onChange={(ev) => setPartnerEmail(ev.target.value)}
        />
        <button type="submit" className="btn-primary my-3">
          Сохранить
        </button>
      </form>
    </Layout>
  );
}
