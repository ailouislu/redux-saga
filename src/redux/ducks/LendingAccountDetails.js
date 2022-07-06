export const GET_INTEREST_RATE_TYPE = "GET_INTEREST_RATE_TYPE";
const SET_INTEREST_RATE_TYPE = "SET_INTEREST_RATE_TYPE";
export const GET_IS_FIXED_RATE = "GET_IS_FIXED_RATE";
const SET_IS_FIXED_RATE= "SET_IS_FIXED_RATE";

const initialState = {
  interestRateType: undefined,
  isFixedRate: undefined
};

export const getInterestRateType = () => ({
  type: GET_INTEREST_RATE_TYPE
});

export const setInterestRateType = (interestRateType) => ({
  type: SET_INTEREST_RATE_TYPE,
  interestRateType
});

export const setIsFixedRate = (isFixedRate) => ({
  type: SET_IS_FIXED_RATE,
  isFixedRate
});

export const getIsFixedRate = () => ({
  type: GET_IS_FIXED_RATE
});


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INTEREST_RATE_TYPE:
      const { interestRateType } = action;
      return { ...state, interestRateType };
    case SET_IS_FIXED_RATE:
      const { isFixedRate } = action;
      return { ...state, isFixedRate };
    default:
      return state;
  }
};
