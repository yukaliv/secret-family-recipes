import React from 'react';
// import { deleteRecipe } from '../Actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const EachRecipe = styled.div` 
    display         : flex;
    flex-direction  : column;
    justify-content : center;
    align-items     : center;
    width           : 350px;
    height          : 250px;
    margin          : 20px 20px;
    line-height     : 25px;
    border          : 1px solid lightgrey;
    border-radius   : 5px;
    background-color: #e3e3e3;
    opacity: 0.5;
`;

const Title = styled.p`
font-size: 25px;
padding: 25px;
display: flex;
justify-content: center;
`;

const Category = styled.p`
font-size: 20px;
display: flex;
justify-content: center;
font-family: 'Nunito', sans-serif;
font-style: italic;
`;


const Button = styled.button`
margin: 20px;
width: 150px;
height: 40px;
background: transparent;
background-color: 
font-family: 'Nunito', sans-serif;

:hover {
    background-color: white;
    border : #62fdbe solid 5px;
  }
`;

class Recipe extends React.Component {
    render() {
        return (
            <EachRecipe>
                <Title> <strong>~ {this.props.recipe.name} ~</strong></Title>
                <Category>{this.props.recipe.category}</Category>

                <Link to={`/recipes/${this.props.recipe.id}`}><Button>Get Recipe</Button></Link>
            </EachRecipe>
        )
    }
}

export default connect(
    null, {})(
        Recipe);
