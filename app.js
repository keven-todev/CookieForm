const form = document.querySelector("form");
form.addEventListener("submit", handleForm);

function handleForm(e) {
  e.preventDefault();
  const newTab = [];

  let isAnyInputEmpty = false;

  const inputs = document.querySelectorAll("input");
  const inputValue = [];

  inputs.forEach((input) => {
    if (input.value === "") {
      isAnyInputEmpty = true;
      alert("Veuillez remplir correctement tous les champs.");
    }
    newTab.push(input.value);
    inputValue.push(input.value);
  });

  if (!isAnyInputEmpty) {
    console.log(newTab);
    validation(inputValue);
  }
}

function validation(input) {
  const card = document.createElement("div");
  card.className = "cookie";
  card.innerHTML = `
        <h3 class="title-cookie"> 
            Votre cookie a été créé
        </h3>
    `;

  document.body.appendChild(card);

  setTimeout(function () {
    card.remove();
  }, 5000);

  
  showCookie(input);
}

const showInput = document.getElementById("show");

function showCookie(inputValue) {

  const showCookie = document.createElement("div");
  showCookie.className = "showCookie";
  showCookie.innerHTML = `
    <h1 class="title-show">
        Le nom : ${inputValue[0]}
    </h1>
    <h1 class="title-show">
        La valeur : ${inputValue[1]}
    </h1>
  `;

  setTimeout(function () {
    card.remove();
  }, 5000);


  document.body.appendChild(showCookie);
}
