import './styles.css';
import { RECIPE } from './recipe-data';
import IngredientList from './IngredientList';

const RecipeCard = () => {
  return (
    <div className='card'>
      <img src={RECIPE.imgSrc} alt='debris' />
      <IngredientList ingredients={RECIPE.ingredients} />
      <h2>Instructions</h2>
      <ol>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ol>
    </div>
  );
};

export default RecipeCard;
