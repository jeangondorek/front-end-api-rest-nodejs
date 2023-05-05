import React, { useState } from 'react';
import api from '../Services/Api';

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
    <div>
      <h2>Atualizar Usuário</h2>
      <form onSubmit={updateUser}>
        <div className="form-control">
          <label htmlFor="id">ID do Usuário:</label>
          <input type="text" name="id" placeholder="Digite o ID do usuário" onChange={(e) => setId(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite o nome do usuário" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="salary">Salário:</label>
          <input type="text" name="salary" placeholder="Digite o salário do usuário" onChange={(e) => setSalary(e.target.value)} />
        </div>
        <button type="submit">Atualizar Usuário</button>
      </form>
    </div>
  );
};

export default UpdateUser;
