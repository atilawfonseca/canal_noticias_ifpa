import React, {} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import aguaviva from '../img/carrosel/aguaviva.jpg'
import rocha from '../img/carrosel/rocha.jpg'
import flores from '../img/carrosel/flores.jpg'
import { ThemeProvider } from 'react-bootstrap';
import styles from './Carsel.module.css'

function Carsel() {
 
    return (
      <ThemeProvider  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
          <Carousel className={styles.container} controls={false} pause={false}>
            <Carousel.Item interval={3000}>
            <img 
              className="d-block w-100"
              src={flores}
              alt="First slide"
            />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src={aguaviva}
                alt="Second slide"
              />
              <Carousel.Caption >
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src={rocha}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src={rocha}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src={rocha}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </ThemeProvider>
      );

}

export default Carsel; 