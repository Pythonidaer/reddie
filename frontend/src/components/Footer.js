import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// Footer component
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            {/* Display the copyright */}
            Copyright &copy; Reddie
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
/*
The component returns JSX markup that represents the footer section of the page.
The Container, Row, and Col components are imported from the react-bootstrap library. They provide a grid-based layout system for building responsive web pages.
The footer is wrapped inside a footer element.
The Container component is used to contain the footer content and provides horizontal padding.
The Row component is used to create a row within the container.
The Col component represents a column within the row and is used to define the content alignment and styling.
Inside the Col component, we have a text-center class to center-align the content and a py-3 class for vertical padding.
The content of the footer is a text string that displays the copyright information.

Overall, this Footer component provides a basic structure for a footer section with centered content and a copyright notice. It can be used in a React application to maintain consistent footer styling across multiple pages.
*/
