
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

const Contact = () => {
  return (
    <>
      <Alert variant='danger'>
        <h1>Contact</h1>
        <hr />
        <p className='mb-0'>
          <h3>Email: jazzi.lyn217@gmail.com </h3>
          {' '}
          <Button variant='secondary' href='/'>LinkedIn</Button>{' '}
          <Button variant='secondary' href='www.github.com/jazminejose'>GitHub</Button>
        </p>
      </Alert>

    </>
  )
}
export default Contact
