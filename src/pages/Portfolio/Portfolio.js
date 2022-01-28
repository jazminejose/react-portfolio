import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

import Workout from '../../assets/4Uworkout.png'
import Anime from '../../assets/animearchive.png'
import TeamProfile from '../../assets/teamProfile.png'
import Weather from '../../assets/weather.png'
import ecommerce from '../../assets/ecommerce.png'

const Portfolio = () => {
  return (
    <>
      <Alert variant='danger'>
        <h1>Portfolio</h1>
        <p>
          <Row>
            <Col sm>
              <Card
                border='dark'
                style={{ width: '25rem' }}
              >
                <Card.Header>Employee Tracker</Card.Header>
                <Card.Img variant='top' src={TeamProfile} />
                <Card.Body>
                  <Card.Text>
                    Used to track employees for a company
                  </Card.Text>
                  <Button variant='outline-danger' href='https://github.com/jazminejose/employeeTracker'>GitHub</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card border='dark' style={{ width: '25rem' }}>
                <Card.Header>Weather Dashboard</Card.Header>
                <Card.Img variant='top' src={Weather} />
                <Card.Body>
                  <Card.Text>
                    Current weather + 5-day forecast
                  </Card.Text>
                  <Button variant='outline-danger' href='https://github.com/jazminejose/weatherDashboard'>GitHub</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card border='secondary' style={{ width: '25rem' }}>
                <Card.Header>eCommerce</Card.Header>
                <Card.Img variant='top' src={ecommerce} />
                <Card.Body>
                  <Card.Text>
                    Oganize business products
                  </Card.Text>
                  <Button variant='outline-danger' href='https://github.com/jazminejose/eCommerce'>GitHub</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          {/* <Row>
            <Col sm>
              <Card border='secondary' style={{ width: '25rem' }}>
                <Card.Img variant='top' src='holder.js/100px180' />
                <Card.Header>Password Generator</Card.Header>
                <Card.Body>
                  <Card.Title>Password Generator</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card border='secondary' style={{ width: '25rem' }}>
                <Card.Header>Team Profile</Card.Header>
                <Card.Body>
                  <Card.Title>Primary Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card border='secondary' style={{ width: '25rem' }}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                  <Card.Title>Primary Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br /> */}

        </p>

        <hr />
        <p className='mb-0'>
          <h2>Group Projects</h2>
          <Row>
            <Col sm>
              <Card border='secondary' style={{ width: '25rem' }}>
                <Card.Header>4U Workout</Card.Header>
                <Card.Img variant='top' src={Workout} />
                <Card.Body>
                  <Card.Title>4U Workout</Card.Title>

                  <Card.Text>
                    Search a workout and add a song to your workout
                  </Card.Text>

                  <Button variant='outline-danger' href='https://github.com/jazminejose/project_1'>GitHub</Button>{' '}
                  <Button variant='outline-danger' href='https://jazminejose.github.io/project_1/'>Live Site</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card border='secondary' style={{ width: '25rem' }}>

                <Card.Header>Anime Archive</Card.Header>
                <Card.Img variant='top' src={Anime} />
                <Card.Body>
                  <Card.Title>Anime Archive</Card.Title>
                  <Card.Text>
                    Searching app for anime shows and movies etc
                  </Card.Text>
                  <Button variant='outline-danger' href='https://github.com/jazminejose/employeeTracker'>GitHub</Button>{' '}
                  <Button variant='outline-danger' href='https://anotheranimearchive.herokuapp.com/'>Heroku</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card border='secondary' style={{ width: '25rem' }}>
                <Card.Header>Budget Tracking</Card.Header>
                <Card.Body>
                  <Card.Title>Budget Tracking</Card.Title>
                  <Card.Text>
                    Budget Tracking Text
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </p>
      </Alert>

    </>

  )
}

export default Portfolio
