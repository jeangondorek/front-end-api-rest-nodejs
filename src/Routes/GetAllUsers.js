import React, { Component } from 'react';
import api from '../Services/Api';
import "./../css/main.css";

class GetAllUsers extends Component {
    state = {
        person: [],
    }

    async componentDidMount() {
        await this.fetchUsers();
    }

    async componentDidUpdate(prevProps, prevState) {
        // Verifica se houve uma mudança no estado antes de buscar os usuários novamente
        if (prevState.person !== this.state.person) {
            await this.fetchUsers();
        }
    }

    async fetchUsers() {
        const response = await api.get('/person');
        this.setState({ person: response.data });
    }

    handleDeleteUser = async (id) => {
        try {
            await api.delete(`/person/${id}`);
            // Atualiza o estado, desencadeando uma nova busca pelos usuários
            this.setState(prevState => ({ person: prevState.person.filter(user => user._id !== id) }));
        } catch (error) {
            console.error("Erro ao excluir usuário:", error);
            // Trate o erro de exclusão conforme necessário
        }
    };

    render() {
        const { person } = this.state;

        return (
            <>
                <div className='ml-8 mt-8'>
                    <h1 className='text-4xl'>Lista de usuários</h1>
                    {person.map(user => (
                        <table key={user._id}>
                            <tbody>
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
                                    <td>
                                        <button onClick={() => this.handleDeleteUser(user._id)}>
                                            Excluir
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    ))}
                </div>
            </>
        );
    }
}

export default GetAllUsers;
