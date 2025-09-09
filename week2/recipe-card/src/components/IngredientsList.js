import './RecipeCard.css';

const IngredientsList = (props) => {
  const { data } = props;
  return (
    <div className='ingredients-list'>
      <h3 className='list-title'>Ingredients</h3>
      <ul>
        {data.map((item, index) => {
          return (
            <li className='list-item' key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default IngredientsList;
