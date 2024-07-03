import {useState} from 'react'

import './styles.scss'

import { FaToggleOn } from "react-icons/fa";
import { IoIosRemoveCircle } from "react-icons/io";

import * as database from '../../../database'


export default function Task({description, id,done, onRemoveTask }){
    const [status,setStatus] = useState(done)

    const handleStatus = () => {
        const newStatus = !status ? 'Completed' : 'Open'; 
        setStatus(!status); 
        database.update(id, newStatus); 
    };

    const removeTask =()=>{
        onRemoveTask(id)
        database.remove(id)
    }


    const statusStyle = status
    ? 'status-completed'
    : 'status-open'


    return(
        <div className='post-component'>
            <div>
                <div className='task-text'>
                    <h2>{description}</h2>
                    <p>ID: {id}</p>
                    <p className={statusStyle}>Status<strong> {status ? 'Completed' : 'Open'}</strong></p>
                </div>

                <div className='task-button'>
                    <div>
                        <button onClick={handleStatus}><FaToggleOn /><p>Change status</p></button>
                    </div>
                    <div>
                        <button onClick={removeTask}><IoIosRemoveCircle /><p>Remove task</p></button> 
                    </div>
                    
                </div>
                
                
            </div>
            
            
        </div>

        
    )
}