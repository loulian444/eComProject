const attemptLogin = async (loginInfo) => {
  try {
    const response = await fetch(`http://localhost:4444/auth/login`, {
      method: `POST`,
      headers: {
        "Content-Type": `application/json`,
      },
      body: JSON.stringify(loginInfo),
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};

const form = document.querySelector(`form`);

form.addEventListener(`submit`, async (e) => {
  e.preventDefault();
  const username = document.querySelector(`#username`).value;
  const password = document.querySelector(`#password`).value;
  const result = await attemptLogin({ username, password });
  if (result.token) {
    const tokenArr = result.token.split(`.`);
    const { id } = JSON.parse(atob(tokenArr[1]));
    window.location.href = `http://localhost:4444?id=${id}`
  }
});
