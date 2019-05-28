import React from 'react';
import { deleteRecipe } from '../Actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const EachRecipe=styled.div` 
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

class Recipe extends React.Component {
    render() {
        return (
            <EachRecipe>
                <p>TITLE: <strong>{this.props.recipe.title}</strong></p>
                <p>CATEGORY: <strong>{this.props.recipe.category}</strong></p>
                <p>SOURCE: <strong>{this.props.recipe.source}</strong></p>
                <p>INGREDIENTS: <strong>{this.props.recipe.ingredients}</strong></p>
                <p>INSTRUCTIONS: <strong>{this.props.recipe.instructions}</strong></p>
                <Link to={`/editRecipe/${this.props.recipe.id}`}> <button className='editRecipe'>Edit Recipe</button></Link>
                <button className='deleteRecipe' onClick={(event) => this.props.deleteRecipe(this.props.recipe.id)}> Delete Recipe </button>
            </EachRecipe>
        )
    }
}

export default connect(
    null, { deleteRecipe })(
        Recipe);
