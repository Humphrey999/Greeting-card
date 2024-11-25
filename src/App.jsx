import React from 'react';
import GreetingCard from './greetingcard'; 
import Header from './header'; 

function App() {
  const cards = [
    {
      image: '/images/birthday.jpg', 
      title: 'Happy Birthday!',
      message: 'Wishing you a fantastic day filled with joy!',
    },
    {
      image: '/images/gradcap.jpg',
      title: 'Congratulations!',
      message: 'Great job on your achievement!',
    },
    {
      image: '/images/thankyou.jpg',
      title: 'Thank You!',
      message: 'Thanks for your kindness and support!',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <Header />
      <div className="flex flex-wrap justify-center mt-8 space-y-4">
        {cards.map((card, index) => (
          <GreetingCard
            key={index}
            image={card.image}
            title={card.title}
            message={card.message}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
