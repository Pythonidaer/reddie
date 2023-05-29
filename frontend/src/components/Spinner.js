import React from 'react'

/**
 * Spinner component that displays a loading spinner.
 */
const Spinner = () => {
  return (
    <div className='loadingSpinnerContainer'>
      <div className='loadingSpinner'></div>
    </div>
  )
}

export default Spinner
/*
The Spinner component is a functional component that represents a loading spinner.
It returns JSX code to render the spinner.
The spinner is wrapped in a div element with the class name 'loadingSpinnerContainer'.
The actual spinner is represented by another div element with the class name 'loadingSpinner'.
This component is typically used when there is a need to indicate that the application is in a loading state, such as when waiting for data or performing an operation.
Additional styling for the loading spinner can be applied using CSS rules that target the class names 'loadingSpinnerContainer' and 'loadingSpinner'.
*/
