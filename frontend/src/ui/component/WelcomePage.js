import React, { Component } from 'react';
import { Carousel, Panel } from 'react-bootstrap';
import { Link } from 'react-router';

export default class WelcomePage extends Component {

  render() {

    return (
      <div className="welcome-page">
        <div className="jumbotron">

          <Panel.Heading componentClass="h2">Програма лояльності "В формі". <Link to="/shop" className="btn btn-success btn-md">Перейти до магазину</Link></Panel.Heading>
          <Panel.Body componentClass="h3">Дана програма розроблена для спортивних торгових марок : Nike, Puma, Adidas</Panel.Body>
          <Carousel>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500"
                src="http://www.fashionfresta.com/wp-content/uploads/2015/05/Adidas-History-700x400.jpg" />
              <Carousel.Caption>
                <h1>Тільки в нас шалені знижки!</h1>
                <p>Остання колекція Аdidas</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src="https://citygu.ru/wp-content/uploads/2017/03/AdPum_700_5.jpg" />
              <Carousel.Caption>
                <h3>Бонуси нараховуються моментально!</h3>
                <p>Остання колекція Puma</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500"
                src="http://kicksdeals.ca/wp-content/uploads/2018/01/nikeflashgsale-700x400.jpg" />
              <Carousel.Caption>
                <h3>1 бонус = 1 гривня!</h3>
                <p>Остання колекція Nike</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

        </div>
      </div>
    );
  }
}
