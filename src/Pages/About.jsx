import React from 'react';
import './About.css'; // Import the CSS file

// Fruit data
const fruits = [
  {
    name: 'Apple',
    description: 'A sweet, crunchy fruit with a range of colors including red, green, and yellow.',
    vitamins: 'Vitamin C, Vitamin A, Vitamin K',
    specialty: 'Rich in fiber and antioxidants.',
    image: 'https://via.placeholder.com/150?text=Apple'
  },
  {
    name: 'Banana',
    description: 'A soft, sweet fruit with a yellow peel and white flesh inside.',
    vitamins: 'Vitamin B6, Vitamin C, Potassium',
    specialty: 'Excellent source of energy and potassium.',
    image: 'https://via.placeholder.com/150?text=Banana'
  },
  {
    name: 'Orange',
    description: 'A citrus fruit known for its tangy flavor and bright orange color.',
    vitamins: 'Vitamin C, Folate, Fiber',
    specialty: 'Boosts immune system and skin health.',
    image: 'https://via.placeholder.com/150?text=Orange'
  },
  {
    name: 'Strawberry',
    description: 'A red, juicy fruit with a sweet flavor and tiny seeds on its surface.',
    vitamins: 'Vitamin C, Manganese, Folate',
    specialty: 'Rich in antioxidants and low in calories.',
    image: 'https://via.placeholder.com/150?text=Strawberry'
  },
  {
    name: 'Grapes',
    description: 'Small, round fruits that come in clusters and can be red, green, or black.',
    vitamins: 'Vitamin C, Vitamin K, Antioxidants',
    specialty: 'Good for heart health and hydration.',
    image: 'https://via.placeholder.com/150?text=Grapes'
  },
  {
    name: 'Pineapple',
    description: 'A tropical fruit with a tough, spiky exterior and sweet, tangy flesh.',
    vitamins: 'Vitamin C, Vitamin B6, Manganese',
    specialty: 'Contains bromelain, which aids digestion.',
    image: 'https://via.placeholder.com/150?text=Pineapple'
  },
  {
    name: 'Mango',
    description: 'A tropical stone fruit with a sweet, juicy flavor and vibrant color.',
    vitamins: 'Vitamin A, Vitamin C, Vitamin E',
    specialty: 'High in vitamins and antioxidants.',
    image: 'https://via.placeholder.com/150?text=Mango'
  },
  {
    name: 'Blueberry',
    description: 'Small, round berries that are blue or purple and have a sweet-tart flavor.',
    vitamins: 'Vitamin C, Vitamin K, Manganese',
    specialty: 'Packed with antioxidants and beneficial for brain health.',
    image: 'https://via.placeholder.com/150?text=Blueberry'
  },
  {
    name: 'Kiwi',
    description: 'A small, brown fruit with a fuzzy skin and bright green, tangy flesh.',
    vitamins: 'Vitamin C, Vitamin K, Vitamin E',
    specialty: 'High in vitamin C and dietary fiber.',
    image: 'https://via.placeholder.com/150?text=Kiwi'
  },
  {
    name: 'Watermelon',
    description: 'A large, green fruit with sweet, red flesh and black seeds.',
    vitamins: 'Vitamin C, Vitamin A, Magnesium',
    specialty: 'Great for hydration and refreshing on hot days.',
    image: 'https://via.placeholder.com/150?text=Watermelon'
  },
  {
    name: 'Cherry',
    description: 'A small, round fruit that is typically red or black and has a sweet-tart taste.',
    vitamins: 'Vitamin C, Vitamin A, Potassium',
    specialty: 'Good for reducing inflammation and improving sleep quality.',
    image: 'https://via.placeholder.com/150?text=Cherry'
  }
];

// FruitList Component
const About = () => {
  return (
    <div className="fruit-list">
      <h1>Fruit List</h1>
      <div className="fruit-cards">
        {fruits.map((fruit, index) => (
          <div key={index} className="fruit-card">
            <img src={fruit.image} alt={fruit.name} className="fruit-image" />
            <h2 className="fruit-name">{fruit.name}</h2>
            <p className="fruit-description">{fruit.description}</p>
            <p className="fruit-vitamins"><strong>Vitamins:</strong> {fruit.vitamins}</p>
            <p className="fruit-specialty"><em>Specialty:</em> {fruit.specialty}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
