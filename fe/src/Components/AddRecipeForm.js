import React from 'react';
import { addRecipe, getCategories } from '../Actions';
import { connect } from 'react-redux';
import styled from 'styled-components';
import './AddRecipeForm.css';


const RecipeForm = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 30px;
height: 750px;
`;

const AddInput = styled.input`
width: 250px;
height: 30px;
border: none;
// border-bottom: solid 1px #1f1f44;
margin: 10px;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
color: #0e1111 ;
font-size: 15px;
padding : 0 10px;
`;

const EachInput = styled.div`
width: 430px;
display: flex;
justify-content: space-between;
align-items: center;
font-weight: bold;
font-family: 'Nunito', sans-serif;
font-size: 15px;
`;

const ButtonDiv = styled.div`
display: flex;
justify-content: space-between;
margin: 20px 0 0 0;
`;

const Button = styled.button`
margin: 20px;
width: 160px;
height: 40px;
background: #6d748c;
color: white;
font-size: 15px;
:hover {
    background-color: white;
    color: #6d748c;
    border: 2px solid #6d748c;
  }
`;

class AddRecipeForm extends React.Component {
    state = {
        name: '',
        category_id: '1', // Default to "entree"
        source: '',
        ingredients: '',
        instructions: ''
    }

    componentDidMount() {
        this.props.getCategories();
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
                <div className='image'>
                    <RecipeForm>
                        <div className='recipeInput'>
                            <p className='title'>Share Your Favorite Recipe...</p>
                            <EachInput>
                                <p>NAME :</p>
                                <AddInput className='input'
                                    onChange={this.handleChange}
                                    placeholder='name'
                                    value={this.state.name}
                                    name='name'
                                />
                            </EachInput>

                            <EachInput>
                                <p>CATEGORY :</p>
                                <select onChange={this.handleChange} name='category_id'>
                                    {this.props.categories.map(category =>
                                        <option value={category.id}>{category.name}</option>)}
                                </select>
                            </EachInput>
                            <EachInput>
                                <p>SOURCE :</p>
                                <AddInput className='input'
                                    onChange={this.handleChange}
                                    placeholder='source'
                                    value={this.state.source}
                                    name='source'
                                />
                            </EachInput>
                            <EachInput>
                                <p>INGREDIENTS :</p>
                                <AddInput className='input'
                                    onChange={this.handleChange}
                                    placeholder='ingredients'
                                    value={this.state.ingredients}
                                    name='ingredients'
                                />
                            </EachInput>
                            <EachInput>
                                <p>INSTRUCTIONS :</p>
                                <AddInput className='input'
                                    onChange={this.handleChange}
                                    placeholder='instructions'
                                    value={this.state.instructions}
                                    name='instructions'
                                />
                            </EachInput>
                            <ButtonDiv>
                                <Button className='button'
                                    type='submit'
                                    onClick={(event) => this.createRecipe(event)}> ADD YOUR RECIPE </Button>
                                <Button>CANCEL</Button>
                            </ButtonDiv>
                        </div>
                    </RecipeForm>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    categories: state.categories
})

export default connect(
    mapStateToProps, { addRecipe, getCategories })(AddRecipeForm);