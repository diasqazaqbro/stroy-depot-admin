import { db } from "@/lib/config";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore/lite";

export default async function handle(req, res) {
  const { method } = req;

  if (method === "GET") {
    const productsCollection = collection(db, "products");
    const querySnapshot = await getDocs(productsCollection);
    const productsDocs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    if (req.query?.id) {
      const documentId = req.query.id;
      const documentRef = doc(db, "products", documentId);
      const docSnapshot = await getDoc(documentRef);

      if (docSnapshot.exists()) {
        const documentData = docSnapshot.data();
        res.json({
          id: docSnapshot.id,
          ...documentData,
        });
      } else {
        res.status(404).json({ error: "Document not found" });
      }
    } else {
      res.json(productsDocs);
    }
  }

  if (method === "POST") {
    const { code, description, image, price, title } = req.body;
    const productsCollection = collection(db, "products");
    const updatedData = {
      code: code,
      description: description,
      price: price,
      title: title,
      image: image,
    };
    await addDoc(productsCollection, updatedData);
    res.json(true);
  }

  if (method === "PUT") {
    const { code, id, description, image, price, title } = req.body;
    const productsDocRef = doc(db, "products", id);
    const updatedData = {
      code: code,
      description: description,
      image: image,
      price: price,
      title: title,
    };
    await updateDoc(productsDocRef, updatedData);
    res.json(true);
  }

  if (method === "DELETE") {
    const { id } = req.query;
    if (id) {
      const productDocRef = doc(db, "products", id);
      await deleteDoc(productDocRef);
      res.json(true);
    } else {
      res.status(400).json({ error: "No document id provided" });
    }
  }
}
