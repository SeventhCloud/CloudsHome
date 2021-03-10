/* eslint-disable no-unused-vars */
/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Card from './components/Card';
import CardButton from './components/Button';
import Dialog from './components/Dialog';


function App() {
  const cardData = [
    {
      id: 0, title: 'Color Speed', imagePath: '/assets/colorspeed.jpeg', description: 'This Game was implemented by me with Java using the Java-Framework libGDX. It is available for Android/iOS/Web and Desktop.', buttons: [<CardButton key={0} link="https://github.com/SeventhCloud/ColorSpeed">Github</CardButton>, <CardButton key={1} link="http://color-speed.000webhostapp.com/">Play</CardButton>],
    },
    {
      id: 1, title: 'Suiweed', imagePath: '/assets/suiweed.jpg', description: 'An RPG Game created with 10 friends of mine using Java and slick2D. No Game engines were used.', buttons: [<CardButton key={0} link="https://github.com/SeventhCloud/suiweed">Github</CardButton>, <CardButton key={1} link="https://www.youtube.com/watch?v=G395uDd7aII">Youtube</CardButton>],
    },
    {
      id: 2, title: 'Colored Balls', imagePath: '/assets/coloured_balls.jpg', description: 'I developed this game in my spare time with the functional programming language ELM. The goal of the game is to mix the right color with the keys Q,W,R,S,E and destroy the balls of the same color.', buttons: [<CardButton key={0} link="https://github.com/SeventhCloud/ColoredBalls">Github</CardButton>, <CardButton key={1} link="http://coloredballs.42web.io">Play</CardButton>],
    },
  ];

  return (
    <>
      <div className="card-container">
        {cardData.map((data) => (
          <Card
            className="card"
            key={data.id}
            title={data.title}
            imgPath={data.imagePath}
            description={data.description}
            buttons={data.buttons}
          />
        ))}
      </div>
      <div className="app-credit">
        Made with
        <img src={logo} className="logo" alt="" />
      </div>
    </>
  );
}

export default App;
