import { combineReducers, legacy_createStore as createStore } from "redux";

const initialAppState = {
  correctAnswers: 0,
  category: "",
  difficulty: "",
  type: "",
};

const initialCounterState = {
  counter: 72,
};

const appReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case "countCorrectAnswer":
      return {
        ...state,
        correctAnswers: state.correctAnswers + 1,
      };
    case "resetCount":
      return {
        ...state,
        correctAnswers: initialAppState.correctAnswers,
        category: initialAppState.category,
        difficulty: initialAppState.difficulty,
        type: initialAppState.type,
      };

    case "setCategory":
      return {
        ...state,
        category: action.payload,
      };
    case "setDifficulty":
      return {
        ...state,
        difficulty: action.payload,
      };
    case "setType":
      return {
        ...state,
        type: action.payload,
      };
    default:
      return state;
  }
};

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
  // if (action.type === "increment") {
  //   return {
  //     ...state,
  //     counter: state.counter + 1,
  //   };
  // }

  // return state;
};

const rootReducer = combineReducers({
  app: appReducer,
  counter: counterReducer,
});

// const store = createStore(combineReducers({ appReducer, counterReducer }));
const store = createStore(rootReducer);

export default store;
