import React from 'react';
import { deleteRecipe, getRecipe } from '../Actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "./RecipeDetails.css";

const Title = styled.div`
    display         : flex;
    flex-direction  : column;
    justify-content : center;
    align-items     : center;
    width: 450px;
    height: 190px;
    border-radius   : 5px;
    background-color: #e3e3e3;
    opacity         : 0.9;
    margin: 30px auto;
    line-height: 25px;
    padding: 15px;
    @media (max-width: 500px) {
      width: 350px;
    }
    `;


const MiddleContent = styled.div`
    display         : flex;
    flex-direction: column;
    justify-content : flex-start;
    align-items     : center;
    align-content: space-between;
    width: 400px;
    height: 450px;
    border-radius   : 5px;
    background-color: #e3e3e3;
    opacity         : 0.9;
    margin: 20px;
    @media (max-width: 500px) {
      width: 300px;
    }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  border-radius   : 5px;
  align-items: center;
    background-color: #e3e3e3;
    opacity         : 0.9;
    margin: 10px auto;
    height: 50px;
`;

const Button = styled.button`
width: 130px;
height: 40px;
background: #6d748c;
color: white;
font-size: 15px;
margin: 0 10px ;
outline: none;
:hover {
    background-color: white;
    color: #6d748c;
    border: 2px solid #6d748c;
  }
`;

class Recipe extends React.Component {
    deleteRecipe = event => {
        this.props.deleteRecipe(parseInt(this.props.match.params.id));
        this.props.history.push("/recipes");
    }

    componentDidMount() {
        this.props.getRecipe(this.props.match.params.id);
    }

    componentDidUpdate() {
        this.props.getRecipe(this.props.match.params.id);
    }

    render() {

        return (
            <div classname='recipe'>
                <div className="eachRecipeImage">
                    <Title>
                        <h2>~ {this.props.recipe.name} ~</h2>
                        <h3> {this.props.recipe.category}</h3>
                        <p>By {this.props.recipe.source}</p>
                        <ButtonDiv>
                        <div>
                            <Link to={`/editRecipe/${this.props.recipe.id}`}> <Button >Edit Recipe</Button></Link></div>
                        <div>
                            <Button onClick={(event) => this.deleteRecipe(this.props.recipe.id)}> Delete Recipe </Button></div>
                    </ButtonDiv>
                    </Title>

                    <div className='instructions'>

                        <MiddleContent>
                            <div className='title'>
                                <h4>INGREDIENTS </h4>
                            </div>
                            <div className='content'>
                                <h5>{this.props.recipe.ingredients}</h5>
                            </div>
                        </MiddleContent>

                        <MiddleContent>
                            <div className='title'>
                                <h4>INSTRUCTIONS </h4>  </div>
                            <div className='content'>
                                <h5>{this.props.recipe.instructions}</h5>  </div>
                        </MiddleContent>

                    </div>

                   

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    recipe: state.recipe
})

export default connect(mapStateToProps, { deleteRecipe, getRecipe })(Recipe);
