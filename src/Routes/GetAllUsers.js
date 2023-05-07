import React, { Component } from 'react';
import api from '../Services/Api';
import "./../css/main.css";

class GetAllUsers extends Component {
    state = {
        person: [],
    }
    async componentDidMount() {
        const response = await api.get('/person');
        this.setState({ person: response.data });
    }

    render() {

    const { person } = this.state;

    return (
        <>
        <div className='ml-8 mt-8'>
            <h1 className='text-4xl'>Lista de usuários</h1>
            {person.map(user => (
                <>
                <table>
                    <tr>
                        <td className="p-2 w-20 shadow rounded">
                            ID
                        </td>
                        <td className="p-2 w-80 shadow rounded">
                            {user._id}
                        </td>
                        <td className="p-2 w-20 shadow rounded">
                            Nome
                        </td>
                        <td className="p-2 w-80 shadow rounded">
                            {user.name}
                        </td>
                        <td className="p-2 w-20 shadow rounded">
                            Salário
                        </td>
                        <td className="p-2 w-20 shadow rounded">
                            {user.salary}
                        </td>
                    </tr>
                </table>
                </>
            ))}
        </div>
        </>
        );
    };
};

export default GetAllUsers;