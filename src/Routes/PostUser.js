import React from 'react';
import api from '../Services/Api';
import { useState } from 'react';

const PostUser = () =>{

    const [name, setName] = useState();
    const [salary, setSalary] = useState();
    const createUser = async (e)=>{
        e.preventDefault();

        const person = {name, salary };
        await api.post("/person", person);
    }

    return <div>
        <h2>NOVO USER</h2>
        <form onSubmit={(e)=>{createUser(e)}}>
            <div className='form-control'>
                <label htmlFor='name'>nome</label>
                <input type='text' name='name' placeholder='digite nome' onChange={(e) => setName(e.target.value)}/>
                <label htmlFor='salary'>salary</label>
                <input type='text' name='salary' placeholder='digite salary' onChange={(e) => setSalary(e.target.value)}/>
                <input type='submit' value='cria user' className='btn'/>
            </div>
        </form>
    </div>
}

export default PostUser;