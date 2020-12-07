import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { data } from '../helpers/services';
import destinations from '../assets/destinations.png';
import previous from '../assets/previous.png';
import next from '../assets/next.png';
import Card from './Card';

class NewHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[3],
    };
  }
  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    if (newIndex >= 8) {
      this.setState({
        property: data.properties[0],
      });
    } else {
      this.setState({
        property: data.properties[newIndex],
      });
    }
  };

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: data.properties[newIndex],
    });
  };
  componentDidMount() {
    setInterval(this.nextProperty, 3000);
  }
  render() {
    const { properties, property } = this.state;
    return (
      <React.Fragment>
        <Container className="home-container">
          <Row className='home-flex d-flex'>
            <Col className='home-intro-text'>
              <h1>Let us take you to your happy place</h1>
              <p>
                Welcome! At Barefoot Nomad, we value customers. We believe that
                customers' happiness is our happiness. Do not hesitate to work
                with us. Hit the button below to get started.
              </p>
              <Link to='/login' className='start-btn'>
                Get Started
              </Link>
            </Col>
            <Col>
              <img
                src={destinations}
                alt='Destination'
                className='destination'
              />
            </Col>
          </Row>
          <h1 className='pop-services'>Our Popular Services</h1>
          <div className='services'>
            <button
              onClick={() => this.prevProperty()}
              disabled={property.index === 0}
              className='service-btn prev-btn'
              data-testid='prev'
            >
              <img src={previous} />
            </button>
            <div className='page'>
              <div className='custom-col'>
                <div className={`cards-slider active-slide-${property.index}`}>
                  <div
                    className='cards-slider-wrapper'
                    style={{
                      transform: `translateX(-${
                        property.index * (100 / properties.length)
                      }%)`,
                    }}
                  >
                    {properties.map((property) => (
                      <Card key={property._id} property={property} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => this.nextProperty()}
              disabled={property.index === data.properties.length - 1}
              className='service-btn next-btn'
              data-testid='next'
            >
              <img src={next} />
            </button>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default NewHomePage;
