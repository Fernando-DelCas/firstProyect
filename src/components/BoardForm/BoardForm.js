import { useState } from "react";



const BoardForm = () => {

    const [title, setTitle] = useState();
    const [select, setSelect] = useState();

    const body = {
        author: 1,
        title:title,
        collaborators: []
    }

    const handleSubmit = ()=>{
      const options = {
            method: "POST",
            headers: {
                "content.Type": "application/json"
            },
            body: JSON.stringify(body)
      }
        fetch("http://localhost:5000/api/boards", options)
        .then(response => console.log(response))
        .then(json => console.log(json));
    }


    return (
        <form>
            <label>
                Name
            <input  type="text" name="name" onChange={(e)=> setTitle(e.target.valeu)}/>
            </label>
            <select onChange={(e) => setSelect(e.target.value)}>
                <option value="id">id</option>
                <option value="jaja">jaja</option>
                <option value="quetal">quetal</option>
            </select>
            <button onclick="handleSubmit" type="submit"> Enviar

            </button>
        </form>

    )
}

export default BoardForm;

