import Img from '../dist/Indian_Food_Cover.jpeg';

const menuCategories = ['Option 1:', 'Option 2:', 'Option3:'];
const elements = [['Empanadas', 'Pasta Marinara', 'Teriyaki Chicken'], ['Roasted vegetables', 'Caesar Salad', 'Hand Tossed Salad'], ['Strawberry Cake', 'Cheese cake', 'Ice Cream']];

const menu = () => {
  const content = document.querySelector('#content');
  const img = new Image();
  img.src = Img;
  const h1 = document.createElement('h1');
  const p1 = document.createElement('h2');
  h1.textContent = 'Our menu';
  p1.textContent = 'Dinner Options. Main Dish, Salad & Dessert';
  content.appendChild(h1);
  content.appendChild(img);
  content.appendChild(p1);
  const div = document.createElement('div');
  const ol = document.createElement('ol');
  let i = 0;
  menuCategories.map((tab) => {
    const li = document.createElement('h3');
    const ul = document.createElement('ul');
    ul.className = 'ul-ul';
    li.innerHTML = tab;
    ul.appendChild(li);
    ol.appendChild(ul);
    elements.map((el) => {
      const p = document.createElement('p');
      p.innerHTML = `- ${el[i]}\n\n`;
      ul.appendChild(p);
      return true;
    });
    i += 1;
    return true;
  });
  div.appendChild(ol);
  content.appendChild(div);
};

export default menu;