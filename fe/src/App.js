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
font-family:  'Cherry Swash', cursive;
`;

const Header = styled.header`
display: flex;
justify-content: flex-end;
align-items: center;
height: 45px;
width: 1230px;
padding: 0 20px;
font-family: 'Mitr', sans-serif;
background-color:#6d748c;
color:black;
`;

const SubHeader = styled.header`
display: flex;
justify-content: center;
align-items: center;
font-size: 25px;
margin: 20px;
color:#1f1f44;
`;

const MenuBar = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 15px;
font-size: 20px;
border-top: solid 1px #1f1f44;
border-bottom: solid 1px #1f1f44;
`;

const NavP = styled.p`
padding: 0 25px;
color: white;
`;

const MenuP = styled.p`
padding: 0 25px;
color: #a00000;
`;

const MainContent = styled.div`
width: 85%;
margin: 0 auto;
`;

const Footer = styled.footer`
height: 45px;
width: 1265px;
background-color: #6d748c;
margin-top: 50px;
`;



function App() {
  return (
    <AppDiv>

      <Header>
        <Link to='/login' style={{ textDecoration: 'none' }}><NavP> SIGN UP / LOG IN </NavP></Link>
      </Header>

      <MainContent>
        <SubHeader>
          <h1>Secret Family Recipes</h1>
        </SubHeader>

        <MenuBar>
          <Link to='/recipes' style={{ textDecoration: 'none' }}><MenuP>View Recipes</MenuP></Link>
          <Link to='/addRecipe' style={{ textDecoration: 'none' }}><MenuP>Add Recipe</MenuP></Link>
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
