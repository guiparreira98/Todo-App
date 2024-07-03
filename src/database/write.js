import { collection, addDoc, doc, updateDoc , deleteDoc} from "firebase/firestore";
import { db } from "./config";

//Save the task to the database whenever adding a new one
export async function save(description, status) {
  
  console.log("Statussssss", status);

  try {
    const docRef = await addDoc(collection(db, "tasks"), {
      description: description,
      done: status === "Completed",
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

//Update the data in the database when toggling the status.

export async function update(id,status) {
  const docRef = doc(db, "tasks", id);

  await updateDoc(docRef, {
    done: status === "Completed",
  });
}

//Delete the data from the database when removing a task

export async function remove(id){
  console.log("remove",id)

  //tasks is the name of the collection in the db firebase
  await deleteDoc(doc(db, "tasks", id));

}
