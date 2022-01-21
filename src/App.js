import React,{useState} from 'react';
import './App.css';

function App() {

const [toDos,setToDos] = useState([]) // list
const [toDo,setToDo] = useState('')   //typing

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Now get things done easily!</h2>
      </div>

      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="Add items please..." />
        <i onClick={ ()=> setToDos([...toDos,{id: Date.now(), text: toDo, status: false}])} className="fas fa-plus"></i>
      </div>
      {/* toDOs- array of objects */}

      {/* showing todos list */}
      <div className="todos">
      { /* {  runs function inside for each value in array toDos and return a new array */
      toDos.map((obj)=>{
        return (

        <div className="todo">
          <div className="left">  
            <input onChange={(e)=>{
              // when checked change status
              console.log(e.target.checked)  //boolean
              console.log(obj)
              // filter which todo is ticked and change its status. return obj2 - creating a new array with objects with status value changed
              setToDos(toDos.filter(obj2 =>{
                if(obj2.id === obj.id){
                  obj2.status = e.target.checked
                }
                return obj2
              }))
            }} value={obj.status} type="checkbox" name="" id="" />
            {/* show added task */}
            <p>{obj.text}</p>
          </div>

          {/* to delete a task */}
          <div className="right">
            <i onClick={() => setToDos(toDos.filter(todo =>{
              // if the id of the item you have clicked "X" is not equal to the object id, keep it. 
              // simply speaking - return nothing for the item you have selected and then that will be missing from the todos list
              let temp; 
              if(todo.id !== obj.id){
                temp = todo
              }
              return temp; // temp is null if todo-id = obj-id(ie, the one you clicked match). so todos array will only have pending ones. others removed
              })) }   className="fas fa-times"></i>
          </div>


        </div>
        )
      })
    }

    {/* show the done - todo */}
    { 
      toDos.map((obj)=>{
        if(obj.status){
          return(<h1>{obj.text}</h1>)
        }
        return null
    })}

    </div>
    </div>
  );
}

export default App;
