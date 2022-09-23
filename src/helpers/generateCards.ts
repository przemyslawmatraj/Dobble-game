const generateCards = () => {
  const cards = [];
  for (let i = 1; i <= 9; i++) {
    cards.push({
      id: i,
      name: `card${i}`,
      isFlipped: false,
      matched: false,
    });
  }
  for (let i = 1; i <= 9; i++) {
    cards.push({
      id: 9 + i,
      name: `card${i}`,
      isFlipped: false,
      matched: false,
    });
  }
  return [...cards];
};

export default generateCards();
