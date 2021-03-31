import navBar from './navbar';
import home from './home';
import contact from './contact';
import menu from './menu';


const append = (option) => {
  document.getElementById('content').innerHTML = '';
  navBar();
  document.getElementById('home').addEventListener('click', () => {
    append(1);
  });
  document.getElementById('contact').addEventListener('click', () => {
    append(2);
  });
  document.getElementById('menu').addEventListener('click', () => {
    append(3);
  });
  if (option === 1) {
    home();
  }
  if (option === 2) {
    contact();
  }
  if (option === 3) {
    menu();
  }
};


append();
