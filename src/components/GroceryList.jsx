import GroceryItem from "./GroceryItem";
import styles from "./GroceryList.css";

export const GroceryList = ({ groceries, deleteGrocery }) => {
  return (
    <div className="item_arrange">
      {groceries.map((grocery) => (
        <GroceryItem
          key={grocery.id}
          grocery={grocery}
          deleteGrocery={deleteGrocery}
        />
      ))}
    </div>
  );
};
