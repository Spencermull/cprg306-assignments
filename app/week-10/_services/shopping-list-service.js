import { db } from "../../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

async function getItems(userId) {
  const itemCollectionRef = collection(db, "users", userId, "items");

  const q = query(itemCollectionRef);
  const snapshot = await getDocs(q);

  const items = [];
  snapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });

  return items;
}

async function addItems(userId, item) {
  const itemCollectionRef = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemCollectionRef, item);
  return docRef.id;
}

export { getItems, addItems };
