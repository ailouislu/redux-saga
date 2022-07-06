import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./components/Counter";
import { getInterestRateType, getIsFixedRate } from "./redux/reducers/LendingAccountDetailsReducer";
import { getUser } from "./redux/reducers/userReducer";
import "./styles/styles.css";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
    dispatch(getIsFixedRate());
    dispatch(getInterestRateType());
  }, [dispatch]);

  const user = useSelector((state) => state.user.user);
  const interestRateType = useSelector((state) => state.LendingAccountDetails.interestRateType);
  const isFixedRate = useSelector((state) => state.LendingAccountDetails.isFixedRate);

  const count = useSelector((state) => state.counter.count);
  const voters = [
    "Anthony Sistilli ",
    "Bob Smith",
    "Stephanie Foo",
    "Kevin Ma"
  ];
  return (
    <div className="App">
      {user && <h1> Hello, {user.firstName}  </h1>}
      <h1>{`Your Interest Rate Type is: ${interestRateType}`}</h1>
      <h1>Is it Fixed Rate? {String(isFixedRate)}</h1>
      <h2> Total Votes: {count}</h2>
      {voters.map((voter) => (
        <Counter key={voter} name={voter} />
      ))}
    </div>
  );
}
