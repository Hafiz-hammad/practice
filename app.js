import {db, collection, addDoc,getDocs,deleteDoc ,doc } from "./firebase.js";

let name = document.getElementById("name");
let btn = document.getElementById("sumbit");
let show = document.getElementById("show");


btn.addEventListener("click",async function(){

    try {
        const docRef = await addDoc(collection(db, "users"), {
          name: name.value,
        });
        name.value = ""
        console.log("Document written with ID: ", docRef.id);
        shows();
      } catch (e) {
        console.error("Error adding document: ", e);
      }

})


async function shows (){
    show.innerHTML = "";
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        let docs = doc.data();
        
  show.innerHTML += `<div style="margin-top: 30px; width: 200px; height: 40px; background-color: blueviolet; position:relative;" >
        ${ 
            docs.name
        }
    <button style="border:none; border-radius:12px; position:absolute; right:2px;" id="${doc.id}" onclick="del(this)">Delet</button> </div>`
 
    })
}


async function del(e) {
    let id = e.id;
    try {
        await deleteDoc(doc(db, "users", e.id))
        shows();
    } catch (error) {
        console.log("error", error);
    }
}
shows();
window.shows = shows;
window.del = del;