import React from 'react';
// import { connect } from 'react-redux';
// import { login } from '../actions';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Input = styled.input`
width: 260px;
height: 35px;
margin: 5px 0;
background: transparent;
font-size: 13px;
border-style: none;
border-bottom: lightgrey 1px solid;
padding: 5px;

`;

const LoginForm = styled.div`
max-width: 400px;
width: 100%;
margin: 50px auto;
height: 300px;
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid lightgrey;
padding: 20px;
`;

const Button = styled.button`
width: 260px;
height: 30px;
margin: 10px 0;
font-size: 15px;
border-radius: 5px;
background-color: transparent;
color: black;
font-weight: bold;
font-family: 'Nunito', sans-serif;
`;

const LoginButton = styled.div`
margin: 20px;
display: flex;
flex-direction: column;
justify-content: center;
`;

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }
    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    // login = e => {
    //     e.preventDefault();
    //     this.props.login(this.state.credentials);
    // };

    render() {
        return (
            <div>
                <LoginForm>
                    <h1>Welcome</h1>
                    <Input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.credentials.username}
                        onChange={this.handleChanges}
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.credentials.password}
                        onChange={this.handleChanges}
                    />
                    <LoginButton>
                        <Link to="/recipes"><Button >Login</Button></Link>
                        <Link to="/recipes"><Button >Sign Up</Button></Link>
                    </LoginButton>
                </LoginForm>

                {/* <LoginForm>
                    <h1>Sign Up</h1>
                    <Input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.credentials.username}
                        onChange={this.handleChanges}
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.credentials.password}
                        onChange={this.handleChanges}
                    />

                    <Link to="/recipes"><Button >Sign Up</Button></Link>
                </LoginForm> */}
            </div>
        )
    }
}

export default Login;