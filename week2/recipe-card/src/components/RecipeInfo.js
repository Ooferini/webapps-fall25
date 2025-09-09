import './RecipeCard.css';

// props={
//   title: 'Buttermilk',
//   description: 'hi im pancake'
// }

const RecipeInfo = (props) => {
  const { title, description } = props;
  return (
    <div className='recipe-info'>
      <h2 className='recipe-title'>{title}</h2>
      <p className='recipe-desc'>{description}</p>
    </div>
  );
};

export default RecipeInfo;
