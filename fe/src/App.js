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
max-width: 1265px;
margin: 0 auto;
font-family: 'Arapey', serif;
`;

const Header = styled.header`
display: flex;
justify-content: flex-end;
align-items: center;
height: 45px;
width: 1230px;
padding: 0 20px;

color: black;
background-color: lightgrey;
`;

const SubHeader = styled.header`
display: flex;
justify-content: center;
align-items: center;
font-size: 25px;
margin: 20px;
`;

const MenuBar = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 15px;
font-size: 20px;
border-top: solid 1px lightgrey;
border-bottom: solid 1px lightgrey;
`;

const NavP = styled.p`
padding: 0 25px;
color: black;
`;

const MainContent=styled.div`
width: 70%;
margin: 0 auto;
`;

const Footer=styled.footer`
height: 45px;
width: 1265px;
background-color: lightgrey;
margin-top: 55px;
`;

function App() {
  return (
    <AppDiv>

      <Header>
        <Link to='/login'  style={{ textDecoration: 'none' }}><NavP> SIGN UP / LOG IN </NavP></Link>
      </Header>
<MainContent>
      <SubHeader>
        <h1>Secret Family Recipes</h1>
      </SubHeader>

      <MenuBar>
        <Link to='/recipes'  style={{ textDecoration: 'none' }}><NavP>View Recipes</NavP></Link>
        <Link to='/addRecipe'  style={{ textDecoration: 'none' }}><NavP>Add Recipe</NavP></Link>
      </MenuBar>
     
      <Route path='/login' component={Login} />
      <Route exact path='/recipes' component={RecipeList} />
      <Route path='/recipes/:id' component={RecipeDetails} />
      <Route path='/addRecipe' component={AddRecipeForm} />
      <Route path='/editRecipe/:id' component={EditRecipeForm} />
      </MainContent>

  <Footer>
    <p></p>
  </Footer>
    </AppDiv>
  );

}

export default App;
