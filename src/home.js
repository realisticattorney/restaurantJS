const home = () => {
  const content = document.querySelector('#content');
  const img = document.createElement('img');
  img.setAttribute('src', './dist/Indian_Food_Cover.jpeg');
  const h1 = document.createElement('h1');
  const p1 = document.createElement('p');
  h1.textContent = 'Restorant';
  p1.textContent = 'Craving some delicious Greek food? Maybe you’re in the mood for a juicy steak? No matter what kind of meal you have in mind, The Spot Restaurant is ready to prepare it for you.Since 1973, The Spot Restaurant has been the go-to diner for residents of Binghamton, NY. Our diner serves breakfast all day, in addition to wholesome and flavorful dining options for lunch and dinner. From burgers to salads, seafood to pastas, you’ll find all kinds of hearty meals prepared fresh at The Spot Restaurant. Our diner also has a full bakery with delicious baked goods and other treats, including our famous cheesecake. Sounds delicious, right? We’re here to serve you the best food around, whenever you’re looking for a great American restaurant in Binghamton, NY';
  content.appendChild(h1);
  content.appendChild(img);
  content.appendChild(p1);
};


export default home;