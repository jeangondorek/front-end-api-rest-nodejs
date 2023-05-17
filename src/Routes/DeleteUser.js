import React from 'react';
import api from '../Services/Api';
import "./../css/main.css";

const DeleteUser = () => {
  const deleteUserById = async (id) => {
    await api.delete(`/person/${id}`);
  };

  return (
    <div className='border-orange-900 p-5 rounded-full border-solid border-4 function ml-8'>
      <h2 className='text-2xl'>Deletar usuários</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const id = e.target.elements.id.value;
          deleteUserById(id);
        }}
      >
        <div className='form-control'>
          <label htmlFor='id'>ID do usuário a ser deletado: </label>
          <input className='w-80' type='text' name='id' placeholder='digite o ID' />
          <input type='submit' value='Exluir usuário' className='btn rounded-full' />
        </div>
      </form>
    </div>
  );
};

export default DeleteUser;
