"use client";
import { useState } from "react";

function Counter({ users }) {
  const [count, setCount] = useState(0);
  console.log(users);
  return (
    <>
      <p>There is a {users.length} of users</p>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </>
  );
}

export default Counter;
