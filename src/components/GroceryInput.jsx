import { useState } from "react";
import styles from "./GroceryInput.css";

export const GroceryInput = ({ addGrocery }) => {
  const [grocery, setGrocery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!grocery) return;
    addGrocery(grocery);
    setGrocery("");
  };

  return (
    <div className="form_div">
      <form className="input_form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={grocery}
          onChange={(e) => setGrocery(e.target.value)}
          placeholder="Add grocery item"
        />
      </form>
    </div>
  );
};
