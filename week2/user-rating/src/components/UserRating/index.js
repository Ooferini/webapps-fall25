import { useState } from 'react';
import { ReactComponent as Favorite } from '@material-design-icons/svg/filled/favorite.svg';
import './UserRating.css';

const UserRating = () => {
  const [count, setCount] = useState(0);

  const handlePlusClick = () => {
    if (count >= 5) {
      setCount(5);
      return;
    }
    setCount(count + 1);
  };

  const handleMinusClick = () => {
    if (count <= 0) {
      setCount(0);
      return;
    }
    setCount(count - 1);
  };

  return (
    <div>
      {count <= 0 ? null : <button onClick={handleMinusClick}>[-]</button>}
      {[...Array(count)].map((i, index) => {
        return (
          <span className='hearts' key={index}>
            <Favorite />
          </span>
        );
      })}
      {count >= 5 ? null : <button onClick={handlePlusClick}>[+]</button>}
    </div>
  );
};

export default UserRating;
