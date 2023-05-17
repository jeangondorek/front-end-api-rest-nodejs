import api from '../Services/Api';
import { useState } from 'react';
import "./../css/main.css";


const PostUser = () =>{

    const [name, setName] = useState();
    const [salary, setSalary] = useState();
    const createUser = async (e)=>{
        e.preventDefault();

        const person = {name, salary };
        await api.post("/person", person);
    }

    return <div className='border-orange-900 p-10 rounded-full border-solid border-4 function ml-4'>
        <h2 className='ml-8 mt-8 text-2xl'>Cadastrar novo usuário</h2>
        <form onSubmit={(e)=>{createUser(e)}}>
            <div className='flex-auto form-control p-2'>
                <label htmlFor='name'>Nome: </label>
                <input className='w-80' type='text' name='name' placeholder='digite nome' onChange={(e) => setName(e.target.value)}/>
                <label htmlFor='salary'>Salario: </label>
                <input className='w-80' type='text' name='salary' placeholder='digite Salario' onChange={(e) => setSalary(e.target.value)}/>
                <input type='submit' value='Cria usuário' className='btn rounded-full'/>
            </div>
        </form>
    </div>
}

export default PostUser;