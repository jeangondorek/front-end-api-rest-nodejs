import React, { Component } from 'react';
import api from '../Services/Api';

class GetAllUsers extends Component {
    state = {
        person: [],
    }
    async componentDidMount() {
        const response = await api.get('person');
        this.setState({ person: response.data });
    }

    render() {

    const { person } = this.state;

    return (
        <>
        <div>
            <h1>Listar os Users</h1>
            {person.map(user => (
                <>
                <h1>---------------</h1>
                <h2>
                    ID: {user._id}
                </h2>
                <h2>
                    Nome: {user.name}
                </h2>
                <h2>
                    Salário: {user.salary}
                </h2>
                </>
            ))}
        </div>
        </>
        );
    };
};

export default GetAllUsers;