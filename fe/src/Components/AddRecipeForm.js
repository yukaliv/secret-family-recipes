import React from 'react';
import { addRecipe } from '../Actions';
import { connect } from 'react-redux';
import styled from 'styled-components';
import './AddRecipeForm.css';


const RecipeForm = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
`;

const Input = styled.input`
width: 250px;
height: 35px;
border: none;
border-bottom: solid 1px lightgrey;
margin: 10px;
display: flex;
justify-content: center;
align-items: center;
`;

const EachInput=styled.div`
width: 430px;
display: flex;
justify-content: space-between;
align-items:center;
`;



class AddRecipeForm extends React.Component {
    state = {
        title: '',
        category: '',
        source: '',
        ingredients: '',
        instructions: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    createRecipe = event => {
        console.log('hi', this.state)
        event.preventDefault();
        this.props.addRecipe(this.state)
        this.props.history.push("/recipes");
    }

    render() {
        return (
            <div>
                <RecipeForm>
                    <p>Share Your Favorite Recipe...</p>
                    <EachInput>
                        <p>TITLE :</p>
                        <Input className='input'
                            onChange={this.handleChange}
                            placeholder='title'
                            value={this.state.title}
                            name='title'
                        />
                    </EachInput>

                    <EachInput>
                        <p>CATEGORY :</p>
                        <Input className='input'
                            onChange={this.handleChange}
                            placeholder='category'
                            value={this.state.category}
                            name='category'
                        />
                    </EachInput>
                    <EachInput>
                        <p>SOURCE :</p>
                        <Input className='input'
                            onChange={this.handleChange}
                            placeholder='source'
                            value={this.state.source}
                            name='source'
                        />
                    </EachInput>
                    <EachInput>
                        <p>INGREDIENTS :</p>
                        <Input className='input'
                            onChange={this.handleChange}
                            placeholder='ingredients'
                            value={this.state.ingredients}
                            name='ingredients'
                        />
                    </EachInput>
                    <EachInput>
                        <p>INSTRUCTIONS :</p>
                        <Input className='input'
                            onChange={this.handleChange}
                            placeholder='instructions'
                            value={this.state.instructions}
                            name='instructions'
                        />
                    </EachInput>
                    <button className='button'
                        type='submit'
                        onClick={(event) => this.createRecipe(event)}> ADD YOUR RECIPE </button>
                </RecipeForm>
            </div>
        )
    }
}

export default connect(
    null, { addRecipe })(AddRecipeForm);