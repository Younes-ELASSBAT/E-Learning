import { useState } from "react"

export function Modifier() {

  const [image,setImage]=useState(null)
  const [titre,setTitre]=useState(null)
  const [description,setDescription]=useState(null)
  const [nombre_secsion,setNombre_secsion]=useState(null)
  const [nombre_heure,setNombre_heure]=useState(null)
  const [category_id,setCategory_id]=useState(null)


const handelUpdate=async(e)=>{}


  return (
    <>
    <div>
      <h1>Update Course</h1>
      <form onSubmit={handelUpdate}>
        <label>Image</label>
        <input type="file" name="image" />
        <label>Title</label>
        <input type="text" name="titre" />
        <label>Description</label>
        <input type="text" name="Description" />
        <label>Nombre de section</label>
        <input type="number" name="nombre_secsion" />
        <label>Nombre d'heures</label>
        <input type="number" name="nombre_heure" />
        <label>Catégorie</label>
        <input type="number" name="category_id" />
        <button type="submit">Update</button>        
      </form>
    </div>
    </>
  );
}