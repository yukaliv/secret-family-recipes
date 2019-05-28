export const ADD_RECIPE = 'ADD_RECIPE';
export const SEARCH_RECIPE = 'SEARCH_RECIPE';
export const DELETE_RECIPE ='DELETE_RECIPE';
export const EDIT_RECIPE ='EDIT_RECIPE';


export const addRecipe = (newRecipe) => {
    console.log(newRecipe);
    return {
        type: ADD_RECIPE,
        payload: newRecipe
    }
}

export const search = (searchString, recipes) => {

    let filteredRecipes= recipes.filter(recipe => recipe.title.includes(searchString) || recipe.category.includes(searchString))

    return {
        type: SEARCH_RECIPE,
        payload: filteredRecipes
    }
}

export const deleteRecipe = (id) => {
    return {
        type: DELETE_RECIPE,
        payload: id
    }
}

export const editRecipe = (newRecipe) =>{
    return {
        type: EDIT_RECIPE,
        payload: newRecipe
    }
}
