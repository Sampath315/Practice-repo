"use client";
import { useState } from "react";

export default function FirstClient() {
  const [count, setCount] = useState(0);
  console.log("FirstClient");
  return (
    <div>
      <h1>First Client Component</h1>
      <p>This is a client component</p>
      <p>Count: {count}</p>
      <button
        style={{
          background: "white",
          color: "blue",
          borderRadius: "5px",
          padding: "5px",
        }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}
