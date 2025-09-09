import Card from './components/Card';
import RecipeImage from './components/RecipeImage';
import RecipeInfo from './components/RecipeInfo';
import IngredientsList from './components/IngredientsList';
import InstructionsList from './components/InstructionsList';
import './components/RecipeCard.css';
import { RECIPE } from './components/recipe-data';

const App = () => {
  return (
    <div>
      <Card>
        <RecipeImage data={RECIPE.imgSrc} />
        <div className='card-text'>
          <RecipeInfo title={RECIPE.title} description={RECIPE.description} />
          <div className='card-lists'>
            <IngredientsList data={RECIPE.ingredients} />
            <InstructionsList data={RECIPE.instructions} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default App;
