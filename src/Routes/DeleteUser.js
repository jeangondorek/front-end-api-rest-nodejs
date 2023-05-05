import React from 'react';
import api from '../Services/Api';

const DeleteUser = () => {
  const deleteUserById = async (id) => {
    await api.delete(`/person/${id}`);
  };

  return (
    <div>
      <h2>DELETAR USER</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const id = e.target.elements.id.value;
          deleteUserById(id);
        }}
      >
        <div className='form-control'>
          <label htmlFor='id'>ID do usuário a ser deletado</label>
          <input type='text' name='id' placeholder='digite o ID' />
          <input type='submit' value='deleta user' className='btn' />
        </div>
      </form>
    </div>
  );
};

export default DeleteUser;
