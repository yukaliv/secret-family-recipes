import React from "react";
import { editRecipe, getRecipe } from "../Actions";
import { connect } from "react-redux";
import styled from "styled-components";
import Recipe from "./Recipe";
import "./EditRecipeForm.css";

const RecipeForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
height: 750px;
`;

const EditInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 600px;
  background-color: #e3e3e3;
  opacity: 0.9;
`;

const Input = styled.input`
  width: 250px;
  height: 30px;
  border: none;
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
  justify-content: space-around;
  margin: 20px 0 0 0;
`;

const Button = styled.button`
margin: 20px;
width: 150px;
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

class EditRecipeForm extends React.Component {
    state = {
        id: "",
        name: "",
        source: "",
        ingredients: "",
        instructions: ""
    };

    componentDidMount() {
        this.setState({
            id: this.props.match.params.id
        })
        this.props.getRecipe(this.props.match.params.id);
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    editRecipe = event => {
        event.preventDefault();
        this.props.editRecipe(this.state);
        this.props.history.push(`/recipes/${this.props.match.params.id}`);
    };

    render() {

        return (
            <div>
                <div className="editImage">
                    <RecipeForm>
                        <EditInput>
                            <p />
                            <EachInput>
                                <p>NAME :</p>
                                <Input
                                    className="input"
                                    onChange={this.handleChange}
                                    placeholder="name"
                                    value={this.state.name}
                                    name="name"
                                />
                            </EachInput>

                            <EachInput>
                                <p>SOURCE :</p>
                                <Input
                                    className="input"
                                    onChange={this.handleChange}
                                    placeholder="source"
                                    value={this.state.source}
                                    name="source"
                                />
                            </EachInput>

                            <EachInput>
                                <p>INGREDIENTS :</p>
                                <Input
                                    className="input"
                                    onChange={this.handleChange}
                                    placeholder="ingredients"
                                    value={this.state.ingredients}
                                    name="ingredients"
                                />
                            </EachInput>

                            <EachInput>
                                <p>INSTRUCTIONS :</p>
                                <Input
                                    className="input"
                                    onChange={this.handleChange}
                                    placeholder="instructions"
                                    value={this.state.instructions}
                                    name="instructions"
                                />
                            </EachInput>
                            <ButtonDiv>
                                <Button
                                    className="button"
                                    type="submit"
                                    onClick={event => this.editRecipe(event)}
                                >
                                    {" "}
                                    UPDATE RECIPE{" "}
                                </Button>
                                <Button>CANCEL</Button>
                            </ButtonDiv>
                        </EditInput>
                    </RecipeForm>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    recipe: state.recipe,
    fetchingRecipe: state.fetchingRecipe
});

export default connect(
    mapStateToProps,
    { editRecipe, getRecipe }
)(EditRecipeForm);
