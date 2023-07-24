import React from 'react';
import salad from '../../assets/img/greek_salad.jpg';
import bruscheta from '../../assets/img/bruschetta.jpg';
import desert from '../../assets/img/lemon_dessert.jpg';
import './style.css';
import MenuCard from './MenuCard';

const menuList = [
  {
    id: 1,
    img: salad,
    title: 'Greek salad',
    price: '$ 12.99',
    description:
      'The famous greek salad of crispy letuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic adn rosemary croutons',
  },
  {
    id: 2,
    img: bruscheta,
    title: 'Brucheta',
    price: '$ 5.99',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil',
  },
  {
    id: 3,
    img: desert,
    title: 'Lemon Dessert',
    price: '$ 5.00',
    description:
      'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined',
  },
];

function Menu() {
  return (
    <section className="menu block">
      <div className="container">
        <div className="menu__inner">
          <h2 className="menu__title title">This weeks specials!</h2>
          <button className="menu__btn primary-btn">Online Menu</button>
        </div>
        <ul className="menu__list">
          {menuList.map((dish) => {
            return <MenuCard key={dish.id} {...dish} />;
          })}
        </ul>
      </div>
    </section>
  );
}

export default Menu;
