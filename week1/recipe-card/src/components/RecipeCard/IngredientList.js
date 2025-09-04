const IngredientList = (props) => {
  // this props parameter lets us do stuff outside of the return jsx
  const { ingredients } = props;
  return (
    <div>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingred, index) => {
          return <li key={index}>{ingred}</li>;
        })}
      </ul>
    </div>
  );
};

export default IngredientList;
