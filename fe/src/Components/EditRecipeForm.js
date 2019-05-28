import React from 'react';
import { editRecipe } from '../Actions';
import { connect } from 'react-redux';

class EditRecipeForm extends React.Component {
    state = {
        id: '',
        title: '',
        category: '',
        source: '',
        ingredients: '',
        instructions: ''
    }

    componentDidMount() {
        let id = parseInt(this.props.match.params.id);
        let currentRecipe = this.props.recipes.find(recipe => recipe.id === id);

        this.setState({
            id: id,
            title: currentRecipe.title,
            category: currentRecipe.category,
            source: currentRecipe.source,
            ingredients: currentRecipe.ingredients,
            instructions: currentRecipe.instructions
        })
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    editRecipe = event => {
        event.preventDefault();
        this.props.editRecipe(this.state);
        this.props.history.push("/recipes");
    }

    render() {
        return (
            <div>
                <form className='AddRecipeForm'>
                    <p>TITLE</p>
                    <input className='input'
                        onChange={this.handleChange}
                        placeholder='title'
                        value={this.state.title}
                        name='title'
                    />
                    <p>CATEGORY</p>
                    <input className='input'
                        onChange={this.handleChange}
                        placeholder='category'
                        value={this.state.category}
                        name='category'
                    />
                    <p>SOURCE</p>
                    <input className='input'
                        onChange={this.handleChange}
                        placeholder='source'
                        value={this.state.source}
                        name='source'
                    />
                    <p>INGREDIENTS</p>
                    <input className='input'
                        onChange={this.handleChange}
                        placeholder='ingredients'
                        value={this.state.ingredients}
                        name='ingredients'
                    />
                    <p>DIRECTIONS</p>
                    <input className='input'
                        onChange={this.handleChange}
                        placeholder='directions'
                        value={this.state.directions}
                        name='instructions'
                    />
                    <button className='button'
                        type='submit'
                        onClick={(event) => this.editRecipe(event)}> UPDATE YOUR RECIPE </button>
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    recipes: state.recipes,
    filteredRecipes: state.filteredRecipes
})


export default connect(
    mapStateToProps, { editRecipe })(EditRecipeForm);