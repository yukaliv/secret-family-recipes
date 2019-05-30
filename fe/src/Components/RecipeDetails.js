import React from 'react';
import { deleteRecipe, getRecipe } from '../Actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "./RecipeDetails.css";


const EachRecipe = styled.div` 
    display         : flex;
    flex-direction  : column;
    justify-content : center;
    align-items     : center;
    width           : 700px;
    height          : 450px;
    margin          : 70px auto;
    line-height     : 25px;
    border-radius   : 5px;
    background-color: #e3e3e3;
    opacity         : 0.9;
`;

const Title = styled.div`
    display         : flex;
    flex-direction  : column;
    justify-content : center;
    align-items     : center;
    width: 550px;
    height: 130px;
    border-radius   : 5px;
    background-color: #e3e3e3;
    opacity         : 0.9;
    margin: 50px auto;
    line-height: 25px;
    `;

const MiddleContent = styled.div`
    display         : flex;
    justify-content : center;
    align-items     : center;
    width: 250px;
    height: 100px;
    

`;
const BottomContent = styled.div`
    display         : flex;
    justify-content : space-around;
    align-items     : center;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
width: 150px;
height: 40px;
background: #6d748c;
color: white;
font-size: 15px;
margin: 0 70px;
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


    render() {

        return (
            <div classname='recipe'>
                <div className="eachRecipeImage">
                    <Title>
                        <h2>~ {this.props.recipe.name} ~</h2>
                        <h3> {this.props.recipe.category}</h3>
                        <p>By {this.props.recipe.source}</p>
                    </Title>
                    <EachRecipe>

                        <div className='instructions'>

                            <MiddleContent>
                                <div className='middleContent'>
                                    <h4>INGREDIENTS </h4>
                                </div>
                                <div className='middleContent'>
                                    <h4>INSTRUCTIONS </h4>  </div>
                            </MiddleContent>

                            <BottomContent>
                                <div className='bottomContent'>
                                    <h5>{this.props.recipe.ingredients}</h5>
                                </div>
                                <div className='bottomContent'>
                                    <h5>{this.props.recipe.instructions}</h5>  </div></BottomContent>
                        </div>

                        <ButtonDiv>
                            <div>
                            <Link to={`/editRecipe/${this.props.recipe.id}`}> <Button >Edit Recipe</Button></Link></div>
                            <div>
                            <Button onClick={(event) => this.deleteRecipe(this.props.recipe.id)}> Delete Recipe </Button></div>
                        </ButtonDiv>

                    </EachRecipe>
                </div>
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
