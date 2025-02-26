import React from 'react'
import carousel1 from '../../assets/1-min.png'
import carousel2 from '../../assets/2-min.png'
import carousel3 from '../../assets/3-min.png'

const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleControls" class="carousel slide mt-4" data-bs-ride="carousel">
        <div class="carousel-inner" data-bs-interval="3000">
          <div class="carousel-item active">
            <img src={carousel1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={carousel2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={carousel3} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel
