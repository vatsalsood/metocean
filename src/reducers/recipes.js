const recipeReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_RECIPES":
      return action.recipes;
    case "GET_RECIPE":
      for (let i = 0; i < state.length; i++) {
        if (state[i].title === action.title) {
          console.log(state[i]);
          return state[i];
        }
      }
    default:
      return state;
  }
};

export default recipeReducer;
