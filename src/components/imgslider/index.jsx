import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./style.css"

const ExampleCarouselImage = ({ text }) => {
    return <img className="foto" src={text} alt={text} />;
  };
  
const Index = () => {
    return (
        <div className="position-absolute top-0 start-0">
         <Carousel >
          <Carousel.Item>
            <ExampleCarouselImage text="/cola.png" />
            <Carousel.Caption>
  
           
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="/flint.png" />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="/lays.webp" />
            <Carousel.Caption>
             
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="/sansanych.png" />
            <Carousel.Caption>
             
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="/roshen.png" />
            <Carousel.Caption>
             
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
      )
    }

export default Index
