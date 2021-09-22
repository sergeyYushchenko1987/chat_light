const socket = io();

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const name = document.querySelector('.name');
const itemMessage = document.querySelector('.itemMessage');

const userName = prompt('Enter your name: ');
name.innerHTML = userName;
const date = new Date();
const nowtime = `${date.getHours()}:${
  date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
}`;
const today = `${date.getDay() < 10 ? `0${date.getDay()}` : date.getDay()}.${
  date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()
}.${date.getFullYear()}`;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (input.value) {
    socket.emit('new message', {
      message: input.value,
      name: userName,
      date: today,
      time: nowtime,
    });
    const item = document.createElement('li');
    item.innerHTML = `<div class="date">${today}</div><div class="time">${nowtime}</div><span class="user">${userName}</span> :   ${input.value} `;
    itemMessage.appendChild(item);
    input.value = '';
  }
});
socket.emit('get messages', {
  connect: true,
});
socket.on('get messages', (msg) => {
  msg.forEach((data) => {
    const item = document.createElement('li');
    item.innerHTML = `<div class="date">${data.date}</div><div class="time">${data.time}</div><span class="user">${data.author}</span> :   ${data.message} `;
    itemMessage.appendChild(item);
  });
});
socket.on('new message', (msg) => {
  const item = document.createElement('li');
  item.innerHTML = `<div class="date">${msg.date}</div><div class="time">${msg.time}</div><span class="user">${msg.name}</span> :   ${msg.message} `;
  itemMessage.appendChild(item);
});
