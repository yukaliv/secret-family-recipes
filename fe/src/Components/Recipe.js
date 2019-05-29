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
  border: 1px solid lightgrey;
    border-radius   : 5px;
`;

const Title = styled.p`
font-size: 25px;
padding: 25px;
`;

const Category = styled.p`
font-size: 15px;
display: flex;
justify-content: center;
`;

const SubCategory = styled.p`
font-size: 20px;
`;

const Button = styled.button`
margin: 20px;
width: 150px;
height: 40px;
background: transparent;
`;

class Recipe extends React.Component {
    render() {
        return (
            <EachRecipe>
                <Title> <strong>~ {this.props.recipe.name} ~</strong></Title>
                <Category>CATEGORY: <SubCategory><strong>{this.props.recipe.category}</strong></SubCategory></Category>

                <Link to={`/recipes/${this.props.recipe.id}`}><Button>Get Recipe</Button></Link>
            </EachRecipe>
        )
    }
}

export default connect(
    null, {})(
        Recipe);
