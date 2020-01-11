const createResp = array => {
  let result = "";

  for (let i = 0; i < array.length; i++) {
    result += `${i + 1}: ${array[i]}\n`
  }

  const response = {
    "response_type": "in_channel",
    "text": "\n\n*【結果】*\n>" + "\n================\n" + result + "================\n",
  };

  return response;
};

export default createResp;
