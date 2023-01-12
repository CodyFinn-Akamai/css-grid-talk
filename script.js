const appendButton = document.querySelector('#append-button');
const app = document.querySelector('#app');
appendButton.onclick = () => {
  const newElement = document.createElement('p');
  newElement.innerText = 'Hello World';
  app.append(newElement);
}
console.log(appendButton);
