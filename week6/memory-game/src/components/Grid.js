import { useState } from 'react';
import { useEffect } from 'react';
import cx from 'classnames';
import styles from './UI.module.css';
import CardPattern from '../assets/moroccan-flower-dark.png';
import Bilbo from '../assets/bilbo-baggins.png';
import Cameron from '../assets/cameron-poe.png';
import Nikki from '../assets/nikki-cage.png';
import Pollux from '../assets/pollux-troy.png';

const cardImages = [
  { src: Bilbo },
  { src: Cameron },
  { src: Nikki },
  { src: Pollux },
];

/*
const Grid = (props) =>{
  return()
}
*/

export default function Grid(props) {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const handleChoice = (card) => {
    // first, check if we have choiceOne. If so, incoming card gets set to choiceTwo. If not, incoming card sets to choiceOne
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    // but what if we have both choices?
    // we compare them! BUT NOT HERE!
    // if we do it here, it might fire possibly before our local state has even updated
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  // useEffect(() => {}, []); // only fires once on mount aka component first render
  useEffect(() => {
    // this is where we compare! but first we need to assign some logic to assigning choices
    // first - make sure we have both choices
    if (choiceOne && choiceTwo) {
      // if they both exist we can see if they match
      if (choiceOne.src === choiceTwo.src) {
        // we have an array of all of our shuffled cards inside cards (state)
        // we need to map through and assign a new property matched and set to true
        setCards((prevCards) => {
          // now we map to make a copy of everything, with and add the new property of matched to matched items
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              console.log('match!');
              return { ...card, matched: true };
              // spread the card properties and add a new one called matched—set to true
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        // else = they don't match
        console.log('no match... idiot');
        // we need the setTimeout or we won't see the second card flip back when correct
        setTimeout(() => resetTurn(), 750);
      }
    }
  }, [choiceOne, choiceTwo]);

  // duplicate our deck and shuffle the cards
  // then store them in state
  const shuffleCards = () => {
    // spread all of our card images twice so we have duplicates
    const shuffledCards = [...cardImages, ...cardImages]
      // add a sort function which fires a function for each item in our new array
      // when a number is negative, leave it where it is. when it's positive, swap it with another item (shuffle)
      .sort(() => Math.random() - 0.5)
      // now we map through each card in our 'shuffled' and add a unique ID
      .map((card) => ({ ...card, id: Math.round(Math.random() * 100000000) }));

    setCards(shuffledCards);
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(0);
  };
  return (
    <>
      <button onClick={shuffleCards}>New Game</button>
      <h2>Turns used: {turns}</h2>
      <div className={styles.container}>
        <div className={styles.grid}>
          {cards.map((card) => (
            <Card
              card={card}
              key={card.id}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function Card(props) {
  // update props to receive the entire card object
  const { card, handleChoice } = props;
  // add flipped state
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // setIsActive(!isActive)
    setIsActive((prevIsActive) => !prevIsActive);
    handleChoice(card);
  };

  return (
    <div className={styles.flip_card} onClick={handleClick}>
      <div
        className={cx(styles.flip_card_inner, {
          [styles.active]: isActive,
        })}
      >
        <div className={styles.flip_card_front}>
          <img src={CardPattern} alt='card front' />
        </div>
        <div className={styles.flip_card_back}>
          <img src={card.src} alt='card back' />
        </div>
      </div>
    </div>
  );
}
