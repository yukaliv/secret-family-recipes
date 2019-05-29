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

    deleteRecipe = event => {
        this.props.deleteRecipe(parseInt(this.props.match.params.id));
        this.props.history.push("/recipes");
    }

    render() {
        let id = this.props.match.params.id;
        let recipe = this.props.recipes.find(recipe => recipe.id === parseInt(id));
        return (
            <EachRecipe>
                <p>NAME: <strong>{recipe.name}</strong></p>
                <p>CATEGORY: <strong>{recipe.category}</strong></p>
                <p>SOURCE: <strong>{recipe.source}</strong></p>
                <p>INGREDIENTS: <strong>{recipe.ingredients}</strong></p>
                <p>INSTRUCTIONS: <strong>{recipe.instructions}</strong></p>
                <Link to={`/editRecipe/${recipe.id}`}> <button className='editRecipe'>Edit Recipe</button></Link>
                <button className='deleteRecipe' onClick={(event) => this.deleteRecipe(recipe.id)}> Delete Recipe </button>
            </EachRecipe>
        )
    }
}

const mapStateToProps = (state) => ({
    recipes: state.recipes
})

export default connect(
    mapStateToProps, { deleteRecipe })(
        Recipe);
