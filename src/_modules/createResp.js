const createResp = (array) => {

  let result = "";

  for (let i = 0; i < randomArray.length; i++) {
    result += `${i + 1}: ${randomArray[i]}\n`
  }

  const response = {
    "response_type": "in_channel",
    "text": "\n\n*【結果】*\n>" + targetString + "\n================\n" + result + "================\n",
  };

  return response;
};

export default createResp;
