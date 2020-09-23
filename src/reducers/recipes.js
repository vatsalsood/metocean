let recipes = [];

const recipeReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_RECIPES":
      recipes = action.recipes;
      return action.recipes;
    case "GET_RECIPE":
      for (let i = 0; i < state.length; i++) {
        if (state[i].title === action.title) {
          console.log(state[i]);
          return state[i];
        }
      }
      break;
    case "RESET_RECIPES":
      return recipes;
    default:
      return state;
  }
};

export default recipeReducer;
