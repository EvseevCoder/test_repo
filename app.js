let block = document.querySelector(".block");
let newDog = document.querySelector(".newdog");

function getDog() {
  fetch("https://random.dog/woof.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      block.innerHTML += `<img src="${data.url}" alt=""/>`;
    });
}

getDog();

newDog.addEventListener("click", () => {
  getDog();
});
