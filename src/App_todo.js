import { use, useEffect, useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };

  const onSubmit = (event) =>{
    event.preventDefault();
    if(toDo === ""){
      return;
    }

    setToDos(currentArray => [toDo, ...currentArray]);
    setToDo("");
  }

  console.log(toDos);
  console.log(toDos.map((item, index) =><li key={index}>{item}</li>))
  return (
    <div>
      <h1>My Todos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="write your to do ..."></input>
        <button> Add To Do </button>
      </form>
      <hr/>
      <ul>
        {toDos.map((item, index) =>
            <li key={index}>{item}</li>
            )}
      </ul>
    </div>
  );
}

export default App;
