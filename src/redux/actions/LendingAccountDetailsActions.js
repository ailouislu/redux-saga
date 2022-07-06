const GET_INTEREST_RATE_TYPE = Symbol('GET_INTEREST_RATE_TYPE');
const SET_INTEREST_RATE_TYPE = Symbol('SET_INTEREST_RATE_TYPE');
const GET_IS_FIXED_RATE = Symbol('GET_IS_FIXED_RATE');
const SET_IS_FIXED_RATE = Symbol('SET_IS_FIXED_RATE');

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

export {
    GET_INTEREST_RATE_TYPE,
    SET_INTEREST_RATE_TYPE,
    GET_IS_FIXED_RATE,
    SET_IS_FIXED_RATE,
};
