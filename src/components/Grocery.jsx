import { useState } from "react";
import { GroceryList } from "./GroceryList";
import { GroceryInput } from "./GroceryInput";
import { nanoid } from "nanoid";

export const Grocery = () => {
  const [groceries, setGroceries] = useState([]);

  const addGrocery = (grocery) => {
    setGroceries([
      ...groceries,
      {
        id: nanoid(7),
        name: grocery,
      },
    ]);
  };

  const deleteGrocery = (id) => {
    setGroceries(groceries.filter((grocery) => grocery.id !== id));
  };

  return (
    <div>
      <GroceryInput addGrocery={addGrocery} />
      <GroceryList groceries={groceries} deleteGrocery={deleteGrocery} />
    </div>
  );
};
