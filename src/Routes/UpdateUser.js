import React, { useState } from 'react';
import api from '../Services/Api';
import "./../css/main.css";

const UpdateUser = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');

  const updateUser = async (e) => {
    e.preventDefault();

    const updatedUser = { name, salary };
    await api.patch(`/person/${id}`, updatedUser);
  };

  return (
    <div className='border-orange-900 flex-auto p-11 rounded-full border-solid border-4 function ml-8'>
      <h2 className='text-2xl'>Atualizar Usuário</h2>
      <form onSubmit={updateUser} className='flex-auto'>
        <div className="flex-auto form-control">
          <label htmlFor="id" className='flex-auto'>Id do Usuário:</label>
          <input className='w-80' type="text" name="id" placeholder="Digite o ID do usuário" onChange={(e) => setId(e.target.value)} />
        </div>
        <div className="flex-auto form-control">
          <label htmlFor="name">Nome:</label>
          <input className='w-80' type="text" name="name" placeholder="Digite o nome do usuário" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="flex-auto form-control">
          <label htmlFor="salary">Salário:</label>
          <input className='w-80' type="text" name="salary" placeholder="Digite o salário do usuário" onChange={(e) => setSalary(e.target.value)} />
        </div>
        <button type="submit" className='btn rounded-full'>Atualizar Usuário</button>
      </form>
    </div>
  );
};

export default UpdateUser;
