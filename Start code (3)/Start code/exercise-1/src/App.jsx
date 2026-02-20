import React from "react";

export const userData = {
  firstName: "Mengseang", // feel free to replace the name value
  lastName: "Seng", // feel free to replace the name value
  title: "Heart Supporter", // feel free to replace the title value
};

// Edit the User component code to output the userData data
export function User() {
  const {firstName,lastName,title} = userData
  return (
    <div id="user" data-testid="user">
      <h2>{firstName}{" "}{lastName}</h2>
      <p>{title}</p>
    </div>
  );
}

// DON'T edit the App component code
function App() {
  return (
    <div id="app">
      <h1>WELCOME !!</h1>
      <p>PNV students are you ready to React Course ? You got this 💪</p>
      <User />
    </div>
  );
}

export default App;
