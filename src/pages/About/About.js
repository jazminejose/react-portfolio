
import Alert from 'react-bootstrap/Alert'
import selfie from '../../assets/portfolioPicture.jpg'

const About = () => {
  return (
    <>

      <Alert
        variant='danger'
      >
        <h1>Jazmine Jose</h1>
        <p>
          <img src={selfie} alt='selfie' />
          Welcome to my react portfolio!<br></br>
          Majored in Psychology but switched it up and now I am aspiring web developer.<br></br>Currently attending UCI Coding Bootcamp.<br></br>
          Cant wait to use my new found skillset in the world of coding.
        </p>
        <hr />
        <p className='mb-0'>

          <ul className='mb-0'>
            <h3>Knowledge of: </h3>
            <li>HTML & CSS</li>
            <li>Javascript</li>
            <li>jQuery</li>
            <li>MySQL & MongoDB</li>
            <li>Progressive Web Apps</li>
            <li>React.js</li>
          </ul>
        </p>
      </Alert>

    </>

  )
}

export default About
