const qs = require("querystring");

import shuffleArray from "./_modules/shuffleArray"
import createResp from "./_modules/createResp"

exports.handler = (event, context, callback) => {
  const params = qs.parse(event.body);
  const targetString = params.payload ? JSON.parse(params.payload).actions[0].value : params.text;

  if (!targetString) {
    // 値なしの時
    callback(null, {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: "`/shuffle aaa,bbb,ccc,ddd`の形で入力してください。"
    });
    return;
  }

  const randomArray = shuffleArray((targetString).split(","));
  callback(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(createResp(randomArray))
  });
};
