const shuffleArray = (array) => {

  for (let i = 0;  i < array.length; i++) {
    const rand = Math.floor(Math.random() * (i + 1));

    [array[i], array[rand]] = [array[rand], array[i]]
  }
  return array;
};

export default shuffleArray;
