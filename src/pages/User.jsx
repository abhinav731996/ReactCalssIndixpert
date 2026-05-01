import React from "react";

const initialState = [
  {
    id: 1,
    score: 0,
    name: "abhinav",
  },
  {
    id: 2,
    score: 0,
    name: "sahil",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return state.map((player)=>{
        if(player.id === action.id){
          return{...player, score: player.score+1}
        }
      })
      break;
  
    default:
      break;
  }
}
const User = () => {
  return <div>

  </div>;
};

export default User;
