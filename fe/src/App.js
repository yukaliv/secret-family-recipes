import React from 'react';
import './App.css';
import RecipeList from './Components/RecipeList';
import AddRecipeForm from './Components/AddRecipeForm';
import RecipeDetails from './Components/RecipeDetails';
import { Route, Link } from 'react-router-dom';
import EditRecipeForm from './Components/EditRecipeForm';
import styled from 'styled-components';
import Login from './Components/Login';

const AppDiv = styled.div`
max-width: 900px;
width: 100%;
margin: 0 auto;
font-family: 'Arapey', serif;
`;

const Nav = styled.nav`
display: flex;
justify-content: flex-end;
align-items: center;
height: 50px;
width: 100%;
padding: 20px;

`;

const Header = styled.header`
display: flex;
justify-content: center;
align-items: center;
`;

const MenuBar = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 15px;
border-top: solid 1px lightgrey;
border-bottom: solid 1px lightgrey;
`;


function App() {
  return (
    <AppDiv>

      <Nav>
        <Link to='/login'><p> SIGN UP / LOG IN </p></Link>
      </Nav>

      <Header>
        <h1>Secret Family Recipes</h1>
      </Header>

      <MenuBar>
        <Link to='/recipes'><p>View Recipes</p></Link>
        <Link to='/addRecipe'><p>Add Recipe</p></Link>
      </MenuBar>
     
      <Route path='/login' component={Login} />
      <Route exact path='/recipes' component={RecipeList} />
      <Route path='/recipes/:id' component={RecipeDetails} />
      <Route path='/addRecipe' component={AddRecipeForm} />
      <Route path='/editRecipe/:id' component={EditRecipeForm} />
  
    </AppDiv>
  );

}

export default App;
