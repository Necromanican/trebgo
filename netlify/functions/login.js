exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed"
    };
  }

  const { username, password } = JSON.parse(event.body);

  if (
    username === process.env.LOGIN_USERNAME &&
    password === process.env.LOGIN_PASSWORD
  ) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true
      })
    };
  }

  return {
    statusCode: 401,
    body: JSON.stringify({
      success: false
    })
  };
};