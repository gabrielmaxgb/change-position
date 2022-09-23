import { useEffect, useState } from "react";


const ChangePosition = () => {
  const [letters, setLetters] = useState([
    {
      id: 1,
      letter: "A",
    },
    {
      id: 2,
      letter: "B",
    },
    {
      id: 3,
      letter: "C",
    }
  ]);

  const handleLetterClick = (letter, index) => {
    setLetters([letter, ...letters.filter(el => el.id !== letter.id)]);
  };

  const renderLetters = () => { 
    return letters.map((letter, index) => {
      return (
        <li key={letter.id} onClick={() => handleLetterClick(letter, index)}>{letter.letter}</li>
      );
    })
  };

  return (
    <ul>
      {renderLetters()}
    </ul>
  );
};
  
export default ChangePosition;