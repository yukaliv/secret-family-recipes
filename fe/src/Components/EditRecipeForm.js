import React from "react";
import { editRecipe } from "../Actions";
import { connect } from "react-redux";
import styled from "styled-components";
import Recipe from "./Recipe";
import "./EditRecipeForm.css";

const RecipeForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  height: 35px;
  border: none;
  border-bottom: solid 1px lightgrey;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EachInput = styled.div`
  width: 430px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 30px;
`;

const Button = styled.button`
  margin: 0 10px;
  width: 150px;
  height: 40px;
  background: transparent;
`;

class EditRecipeForm extends React.Component {
  state = {
    id: "",
    name: "",
    category: "",
    source: "",
    ingredients: "",
    instructions: ""
  };

  componentDidMount() {
    let id = parseInt(this.props.match.params.id);
    let currentRecipe = this.props.recipes.find(recipe => recipe.id === id);
    console.log(this.props.recipes, "hi");
    console.log(id, "hi");
    this.setState({
      id: id,
      name: currentRecipe.name,
      category: currentRecipe.category,
      source: currentRecipe.source,
      ingredients: currentRecipe.ingredients,
      instructions: currentRecipe.instructions
    });
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
                <p>NAME</p>
                <Input
                  className="input"
                  onChange={this.handleChange}
                  placeholder="name"
                  value={this.state.name}
                  name="name"
                />
              </EachInput>

              <EachInput>
                <p>CATEGORY</p>
                <Input
                  className="input"
                  onChange={this.handleChange}
                  placeholder="category"
                  value={this.state.category}
                  name="category"
                />
              </EachInput>

              <EachInput>
                <p>SOURCE</p>
                <Input
                  className="input"
                  onChange={this.handleChange}
                  placeholder="source"
                  value={this.state.source}
                  name="source"
                />
              </EachInput>

              <EachInput>
                <p>INGREDIENTS</p>
                <Input
                  className="input"
                  onChange={this.handleChange}
                  placeholder="ingredients"
                  value={this.state.ingredients}
                  name="ingredients"
                />
              </EachInput>

              <EachInput>
                <p>DIRECTIONS</p>
                <Input
                  className="input"
                  onChange={this.handleChange}
                  placeholder="directions"
                  value={this.state.directions}
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
                  UPDATE YOUR RECIPE{" "}
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
  recipes: state.recipes,
  filteredRecipes: state.filteredRecipes
});

export default connect(
  mapStateToProps,
  { editRecipe }
)(EditRecipeForm);
