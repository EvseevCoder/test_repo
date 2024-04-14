function getDog() {
  fetch("https://random.dog/woof.json").then((data) => {
    console.log(data);
  });
}
