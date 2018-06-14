import React, {Component} from 'react';
import {Carousel, Panel} from 'react-bootstrap';

export default class WelcomePage extends Component {

  render() {

    return (
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <Panel.Heading componentClass="h1">Dental Clinic site</Panel.Heading>
        <Panel.Body componentClass="h2">Here can be placed basic information about clinic and listed services that this clinic provide</Panel.Body>
        <Carousel>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500"
                 src="https://static1.squarespace.com/static/51f796fae4b097de73d03da7/t/5388ac71e4b080089b777dbd/1430658122675/Dental+Clinic+%281+of+1%29.jpg?format=1500w"/>
            <Carousel.Caption>
              <h3>Dental Clinic site</h3>
              <p>Here can be placed basic information about clinic and listed services that this clinic provide</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="http://www.jalaramdentalclinic.com/img/medical-slide.jpg"/>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500"
                 src="http://carrollsmiles.com/wtiaccess/uploads/gallery/1471985126_1467904531_familyfun.png"/>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </div>
    );
  }
}
