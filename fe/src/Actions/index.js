import axios from 'axios';

export const ADD_RECIPE_SUCCESS = 'ADD_RECIPE_SUCCESS';
export const ADD_RECIPE_START = 'ADD_RECIPE_START';
export const ADD_RECIPE_FAILURE = 'ADD_RECIPE_FAILURE';

export const SEARCH_RECIPE = 'SEARCH_RECIPE';

export const DELETE_RECIPE_START = 'DELETE_RECIPE_START';
export const DELETE_RECIPE_SUCCESS = 'DELETE_RECIPE_SUCCESS';
export const DELETE_RECIPE_FAILURE = 'DELETE_RECIPE_FAILURE';

export const GET_RECIPE_START = 'GET_RECIPE_START';
export const GET_RECIPE_SUCCESS = 'GET_RECIPE_SUCCESS';
export const GET_RECIPE_FAILURE = 'GET_RECIPE_FAILURE';

export const GET_RECIPES_START = 'GET_RECIPES_START';
export const GET_RECIPES_SUCCESS = 'GET_RECIPES_SUCCESS';
export const GET_RECIPES_FAILURE = 'GET_RECIPES_FAILURE';

export const GET_CATEGORIES_START = 'GET_CATEGORIES_START';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE';

export const EDIT_RECIPE = 'EDIT_RECIPE';

const baseEndpoint = 'https://secret-family-recipes.herokuapp.com/api/';

export const addRecipe = (newRecipe) => dispatch => {
    console.log(newRecipe);
    dispatch({ type: ADD_RECIPE_START });
    return axios
        .post(baseEndpoint + 'recipes')
        .then(res => {
            dispatch({
                type: ADD_RECIPE_SUCCESS,
                payload: newRecipe
            })
        })
        .catch(err => {
            dispatch({
                type: ADD_RECIPE_FAILURE, payload: err
            })
        })
}

export const search = (searchString, recipes) => {

    let filteredRecipes = recipes.filter(recipe => recipe.name.includes(searchString) || recipe.category.includes(searchString))

    return {
        type: SEARCH_RECIPE,
        payload: filteredRecipes
    }
}

export const deleteRecipe = (id) => dispatch => {
    dispatch({
        type: DELETE_RECIPE_START
    })
    return axios
        .delete(baseEndpoint + 'recipes/' + id)
        .then(res => {
            dispatch({
                type: DELETE_RECIPE_SUCCESS, payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: DELETE_RECIPE_FAILURE, payload: err
            })
        })
}

export const editRecipe = (newRecipe) => {
    return {
        type: EDIT_RECIPE,
        payload: newRecipe
    }
}

export const getRecipe = (id) => dispatch => {
    dispatch({
        type: GET_RECIPE_START
    })
    return axios
        .get(baseEndpoint + 'recipes/' + id)
        .then(res => {
            dispatch({
                type: GET_RECIPE_SUCCESS, payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_RECIPE_FAILURE, payload: err
            })
        })
}

export const getRecipes = () => dispatch =>{
    dispatch({
        type: GET_RECIPES_START
    })
    return axios
        .get(baseEndpoint + 'recipes' )
        .then(res => {
            dispatch({
                type: GET_RECIPES_SUCCESS, payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_RECIPES_FAILURE, payload: err
            })
        })
}


export const getCategories = () => dispatch =>{
    dispatch({
        type: GET_CATEGORIES_START
    })
    return axios
        .get(baseEndpoint + 'categories' )
        .then(res => {
            dispatch({
                type: GET_CATEGORIES_SUCCESS, payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_CATEGORIES_FAILURE, payload: err
            })
        })
}