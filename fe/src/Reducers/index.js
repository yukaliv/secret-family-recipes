import {
    ADD_RECIPE_SUCCESS,
    ADD_RECIPE_START,
    ADD_RECIPE_FAILURE,
    SEARCH_RECIPE,
    EDIT_RECIPE,
    GET_RECIPES_START,
    GET_RECIPES_SUCCESS,
    GET_RECIPES_FAILURE,
    DELETE_RECIPE_SUCCESS,
    DELETE_RECIPE_FAILURE,
    DELETE_RECIPE_START,
    GET_CATEGORIES_START,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAILURE,
} from "../Actions";

const initialState = {
    recipes: [],
    filteredRecipes: [],
    categories: [],
    addingRecipe: false,
    fetchingRecipes: false,
    fetchingRecipe: false,
    updatingRecipe: false,
    deletingRecipe: false,
    fetchingCategories: false,
    error: null
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_RECIPES_START:
            return {
                ...state,
                fetchingRecipes: true
            }
        case GET_RECIPES_SUCCESS:
            return {
                ...state,
                fetchingRecipes: false,
                recipes: action.payload
            }
        case GET_RECIPES_FAILURE:
            return {
                ...state,
                fetchingRecipes: false,
                error: action.payload
            }
        case DELETE_RECIPE_START:
            return {
                ...state,
                deletingRecipe: true
            }
        case DELETE_RECIPE_SUCCESS:

            return {
                ...state,
                deletingRecipe: false
            }
        case DELETE_RECIPE_FAILURE:
            return {
                ...state,
                deletingRecipe: false,
                error: action.payload
            }
        case ADD_RECIPE_SUCCESS:
            return {
                ...state,
                // recipes: [
                //     ...state.recipes,
                //     action.payload
                // ],
                addingRecipe: true
            }
        case ADD_RECIPE_START:
            return {
                ...state,
                addingRecipe: true
            }
        case ADD_RECIPE_FAILURE:
            return {
                ...state,
                addingRecipe: false,
                error: action.payload
            }
        case SEARCH_RECIPE:
            return {
                ...state,
                filteredRecipes: action.payload
            }

        // case DELETE_RECIPE:
        //     // TODO(yuka) remove this once backend is ready

        //     console.log("this is recipe.id: ", typeof state.recipes[0].id);
        //     console.log("this is action.payload: ", typeof action.payload);
        //     let recipesWithoutDeletedRecipes = state.recipes.filter(recipe => recipe.id !== action.payload);
        //     let filteredRecipesWithoutDeletedRecipes = state.filteredRecipes.filter(recipe => recipe.id !== action.payload);
        //     return {
        //         ...state,
        //         recipes: recipesWithoutDeletedRecipes,
        //         filteredRecipes: filteredRecipesWithoutDeletedRecipes
        //     }
        case EDIT_RECIPE:
            let result = state.recipes.map(recipe => {
                if (recipe.id === action.payload.id) {
                    return action.payload;
                } else {
                    return recipe;
                }
            })
            return {
                ...state,
                // recipes: result
            }
        case GET_CATEGORIES_START:
            return {
                ...state,
                fetchingCategories: true
            }
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                fetchingCategories: false,
                categories: action.payload
            }
        case GET_CATEGORIES_FAILURE:
            return {
                ...state,
                fetchingCategories: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;