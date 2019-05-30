import React from 'react';
import { connect } from 'react-redux';
import { registerUser, loginUser } from '../Actions';
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
height: 35px;
margin: 5px 0;
font-size: 15px;
font-weight: bold;
font-family: 'Nunito', sans-serif;
background: #6d748c;
color: white;
font-size: 15px;

:hover {
    background-color: white;
    color: #6d748c;
    border: 2px solid #6d748c;
  
  }
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

    registerUser = e => {
        e.preventDefault();
        this.props.registerUser(this.state.credentials);
    };

    loginUser = e => {
        e.preventDefault();
        this.props.loginUser(this.state.credentials);
    }

    render() {
        if (localStorage.getItem("userToken")) {
            this.props.history.push("/recipes");
        }

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
                        <Button onClick={event=> this.registerUser(event)} >Sign Up</Button>
                    </LoginButton>
                </LoginForm>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.isLoggedIn
})

export default connect(
    mapStateToProps,  {registerUser, loginUser}
)(Login);
