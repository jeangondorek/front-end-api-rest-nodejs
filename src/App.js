import React from 'react';
import GetAllUsers from './Routes/GetAllUsers';
import PostUser from './Routes/PostUser';
import UpdateUser from './Routes/UpdateUser';
import DeleteUser from './Routes/DeleteUser';

function App() {
  return (
    <div>
      <GetAllUsers/>
      <PostUser/>
      <UpdateUser/>
      <DeleteUser/>
    </div>
  );
}
export default App;