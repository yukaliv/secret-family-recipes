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
    height          : 350px;
    margin          : 20px 20px;
    line-height     : 25px;
  border: 1px solid lightgrey;
    border-radius   : 5px;
`;

const Title = styled.p`
font-size: 25px;
`;



class Recipe extends React.Component {
    render() {
        return (
            <EachRecipe>
                <Title> <strong>{this.props.recipe.name}</strong></Title>
                <p>CATEGORY: <strong>{this.props.recipe.category}</strong></p>
              
                <Link to={`/recipes/${this.props.recipe.id}`}><button>Get Recipe</button></Link>
            </EachRecipe>
        )
    }
}

export default connect(
    null, {})(
        Recipe);
