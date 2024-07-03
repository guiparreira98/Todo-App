//Load the list of tasks from the database when opening the app

import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

export async function load() {
  const querySnapshot = await getDocs(collection(db, "tasks"));
  const data = [];
  querySnapshot.forEach((doc) => {
    
    data.push({
      ...doc.data(),
      id: doc.id
    });

    console.log(data)
    
  });
  //here I am returning a promise, bc of the async and await
  return data;
}
