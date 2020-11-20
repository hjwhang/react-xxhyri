import React, {useState} from "react";
import "./style.css";

export default function App() {
  const [user, setUser] = useState(null);
  const authenticated = user != null
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
