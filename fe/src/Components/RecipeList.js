import React from 'react';
import { connect } from 'react-redux';
import Recipe from './Recipe';
import SearchBar from './SearchBar';
import styled from 'styled-components';


const RecipeLists =styled.div`
    display        : flex;
    justify-content: center;
    flex-wrap      : wrap;
`;

class RecipeList extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }

    render() {
        console.log(this.props)
        let recipesToDisplay = [];
        if (this.props.filteredRecipes.length > 0) {
            recipesToDisplay = this.props.filteredRecipes;
        }
        else {
            recipesToDisplay = this.props.recipes;
        }
        return (
            <div>
                <SearchBar />
                <RecipeLists>
                    {recipesToDisplay.map(recipe => <Recipe recipe={recipe} />)}
                </RecipeLists>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    recipes: state.recipes,
    filteredRecipes: state.filteredRecipes
})

export default connect(
    mapStateToProps, {})(RecipeList);