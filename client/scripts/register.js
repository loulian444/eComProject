const attemptRegister = async (registerInfo) => {
  try {
    const response = await fetch(`http://localhost:4444/auth/register`, {
      method: `POST`,
      headers: {
        "Content-Type": `application/json`,
      },
      body: JSON.stringify(registerInfo),
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
  const confirmPassword = document.querySelector(`#confirmPassword`).value;
  const email = document.querySelector(`#email`).value;

  if (password === confirmPassword) {
    const result = await attemptRegister({ username, password, email });

    if (result.token) {
      const tokenArr = result.token.split(`.`);
      const { id } = JSON.parse(atob(tokenArr[1]));
      window.location.href = `http://localhost:4444?id=${id}`;
    }
  }
});
