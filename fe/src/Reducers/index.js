import { ADD_RECIPE, SEARCH_RECIPE, DELETE_RECIPE, EDIT_RECIPE } from "../Actions";

const initialState = {
    recipes: [{
        id: 0,
        title: 'Tuna',
        source: 'grandma',
        ingredients: 'mayo',
        instructions: 'cook it',
        category: 'dinner'
    }
    ],
    filteredRecipes: []
}

// TODO(yuka) remove this
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_RECIPE:
            // TODO(yuka) remove this
            action.payload.id = getRandomInt(1, 10000)
            return {
                ...state,
                recipes: [
                    ...state.recipes,
                    action.payload
                ]

            }
        case SEARCH_RECIPE:
            return {
                ...state,
                filteredRecipes: action.payload
            }

        case DELETE_RECIPE:
            // TODO(yuka) remove this once backend is ready

            let recipesWithoutDeletedRecipes = state.recipes.filter(recipe => recipe.id !== action.payload)
            let filteredRecipesWithoutDeletedRecipes = state.filteredRecipes.filter(recipe => recipe.id !== action.payload)
            return {
                ...state,
                recipes: recipesWithoutDeletedRecipes,
                filteredRecipes: filteredRecipesWithoutDeletedRecipes
            }
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
                recipes: result
            }

        default:
            return state;
    }
}

export default reducer;