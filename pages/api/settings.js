import { db } from "@/lib/config";
import { setCorsHeaders } from "@/lib/cors";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore/lite";

export default async function handle(req, res) {
  const { method } = req;

  if (method === "GET") {
    setCorsHeaders(req, res, () => {});
    const newsCollection = collection(db, "settings");
    const querySnapshot = await getDocs(newsCollection);
    const newsDocs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.json(newsDocs);
  }
  if (method === "PUT") {
    const { address, id, phoneNumber, suptitle, title, workTime } = req.body;
    console.log(address, id, phoneNumber, suptitle, title, workTime);
    try {
      const newsDocRef = doc(db, "settings", id);
      const updatedData = {
        address: address, phoneNumber: phoneNumber, suptitle: suptitle, title: title, workTime: workTime,
      };
      await updateDoc(newsDocRef, updatedData);
      console.log("Document successfully updated!");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
    res.json(true);
  }
}
