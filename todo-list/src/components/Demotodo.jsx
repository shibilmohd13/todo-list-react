import { useState , useEffect } from "react"


function Todo(){

    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    useEffect(()=>{

        return console.log()
    })

    function addTask(){
        if (newTask.length > 0){
            const updated = [...tasks, newTask]
            setTasks(updated)
            setNewTask('')
        }
    }


    return(
        <>

        <input type="text" value={newTask} onChange={ e =>setNewTask(e.target.value)}/>
        <button onClick={addTask}>add task</button>
        <br />
        <ul>
        {
            tasks.map((item, index)=><li key={index}>{item}</li>)
        }
        </ul>
        
        </>
    )

}

export default Todo