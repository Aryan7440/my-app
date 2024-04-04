import React, { useState, useEffect } from 'react'
import './carousel.css'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
const CarouselSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const carouselItems = [
    {
      imgSrc: img1,
      head: 'This is the first item',
      text: 'sample text',
    },
    {
      imgSrc: img2,
      head: 'This is the second item',
      text: 'sample text',
    },
    {
      imgSrc: img3,
      head: 'This is the third item',
      text: 'sample text',
    },
    // Add more items as needed
  ]

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + carouselItems.length) % carouselItems.length
    )
  }
  useEffect(() => {
    const timer = setInterval(nextSlide, 3000)

    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <div className="carousel">
      <button className="caro-btn-left" onClick={prevSlide}>
        <i class="arrow left"></i>
      </button>
      <div className="carousel-content">
        <img
          src={carouselItems[currentSlide].imgSrc}
          alt={`Slide ${currentSlide}`}
        />
        <div className="caro-text">
          <h1 className="caro-head">{carouselItems[currentSlide].head}</h1>
          <p className="caro-para">{carouselItems[currentSlide].text}</p>
        </div>
      </div>
      <button className="caro-btn-right" onClick={nextSlide}>
        <i class="arrow right"></i>
      </button>
    </div>
  )
}

export default CarouselSection
