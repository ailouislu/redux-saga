import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./Counter";
import { getUser, getIsFixedRate } from "./redux/ducks/user";
import "./styles.css";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
    dispatch(getIsFixedRate());
  }, [dispatch]);

  const user = useSelector((state) => state.user.user);
  console.log('user', user);
  const isFixedRate = useSelector((state) => state.user.isFixedRate);
  console.log('isFixedRate', isFixedRate);

  const count = useSelector((state) => state.counter.count);
  console.log(count);
  const voters = [
    "Anthony Sistilli ",
    "Bob Smith",
    "Stephanie Foo",
    "Kevin Ma"
  ];
  return (
    <div className="App">
      {user && <h1> Hello, {user.firstName}  </h1>}
      <h1>Redux made easy, {isFixedRate}</h1>
      <h2> Total Votes: {count}</h2>
      {voters.map((voter) => (
        <Counter key={voter} name={voter} />
      ))}
    </div>
  );
}
