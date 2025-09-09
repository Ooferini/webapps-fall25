import './RecipeCard.css';

const Card = (props) => {
  // children is a prop we get for free. Children can be text or any other tags that need to become the inner HTML of the element
  const { children } = props;
  return <div className='card'>{children}</div>;
};

export default Card;
