import React from 'react';
import { deleteRecipe, getRecipe } from '../Actions';
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
    border          : 1px solid lightgrey;
    border-radius   : 5px;
`;

const Name = styled.p`
    font-size: 22px;
`;

class Recipe extends React.Component {

    deleteRecipe = event => {
        this.props.deleteRecipe(parseInt(this.props.match.params.id));
        this.props.history.push("/recipes");
    }

    componentDidMount() {
        this.props.getRecipe(this.props.match.params.id);
    }


    render() {
       
        return (
            <div>
                <EachRecipe>
                    <Name><strong>{this.props.recipe.name}</strong></Name>
                    <p> {this.props.recipe.category}</p>
                    <p>BY: {this.props.recipe.source}</p>
                    <p>INGREDIENTS: <strong>{this.props.recipe.ingredients}</strong></p>
                    <p>INSTRUCTIONS: <strong>{this.props.recipe.instructions}</strong></p>

                    <Link to={`/editRecipe/${this.props.recipe.id}`}> <button className='editRecipe'>Edit Recipe</button></Link>
                    <button className='deleteRecipe' onClick={(event) => this.deleteRecipe(this.props.recipe.id)}> Delete Recipe </button>
                </EachRecipe>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    recipe: state.recipe
})

export default connect(
    mapStateToProps, { deleteRecipe, getRecipe })(
        Recipe);
