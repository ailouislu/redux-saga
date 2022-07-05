export const GET_USER = "GET_USER";
const SET_USER = "SET_USER";
export const GET_IS_FIXED_RATE = "GET_IS_FIXED_RATE";
const SET_IS_FIXED_RATE= "SET_IS_FIXED_RATE";

export const getUser = () => ({
  type: GET_USER
});

export const setUser = (user) => ({
  type: SET_USER,
  user
});

export const setIsFixedRate = (isFixedRate) => ({
  type: SET_IS_FIXED_RATE,
  isFixedRate
});

export const getIsFixedRate = () => ({
  type: GET_IS_FIXED_RATE
});


const initialState = {
  user: undefined,
  isFixedRate: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      const { user } = action;
      return { ...state, user };
    case SET_IS_FIXED_RATE:
      const { isFixedRate } = action;
      return { ...state, isFixedRate };
    default:
      return state;
  }
};
