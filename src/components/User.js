import { useState } from "react";

const User = () => {
    const [count,setCount]=useState(0);
  return (
    <div className="user-card">
        <h1 onClick={()=>{
            
            setCount(count++);
        }}>Count={count}</h1>
      <h2>Name: Mritunjay</h2>
      <h3>Location: Ghazipur</h3>
      <h4>Contact: @mritunjay98</h4>
    </div>
  );
};

export default User;
