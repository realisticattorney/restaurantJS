const navTabs = ['Home', 'Menu', 'Contact'];
const navBar = () => {
  const content = document.querySelector('#content');
  const nav = document.createElement('nav');
  const div = document.createElement('div');
  const ul = document.createElement('ul');
  navTabs.map((tab) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.innerHTML = tab;
    a.id = tab.toLocaleLowerCase();
    a.href = '#';
    li.appendChild(a);
    ul.appendChild(li);
    return true;
  });
  div.appendChild(ul);
  nav.appendChild(div);
  content.appendChild(nav);
};

export default navBar;
