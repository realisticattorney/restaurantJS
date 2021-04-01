import Img from '../dist/restaurant-building-800x530.jpeg';

const contact = () => {
  const content = document.querySelector('#content');
  const img = new Image();
  img.src = Img;
  const h1 = document.createElement('h1');
  const p1 = document.createElement('p');
  h1.textContent = 'Get in touch with us';
  p1.textContent = 'Want to get in touch? We would love to hear from you';
  content.appendChild(h1);
  content.appendChild(img);
  content.appendChild(p1);
};


export default contact;