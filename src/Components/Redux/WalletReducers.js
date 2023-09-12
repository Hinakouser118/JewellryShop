// import { ADD_MONEY, REMOVE_MONEY } from './Constants';

// const initialState = {
//   walletBalance: 0,
// };

// const WalletReducers = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_MONEY:
//       return {
//         ...state,
//         walletBalance: state.walletBalance + action.amount,
//       };
//     case REMOVE_MONEY:
//       return {
//         ...state,
//         walletBalance: state.walletBalance - action.amount,
//       };
//     default:
//       return state;
//   }
// };

// export default WalletReducers;
import { ADD_MONEY, REMOVE_MONEY } from './Constants';

const initialState = {
  walletBalance: 0,
};

const WalletReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MONEY:
      return {
        ...state,
        walletBalance: state.walletBalance + action.amount,
      };
    case REMOVE_MONEY:
      return {
        ...state,
        walletBalance: state.walletBalance - action.amount,
      };
    default:
      return state;
  }
};

export default WalletReducers;
