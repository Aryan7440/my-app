import React, { useState } from 'react'
import './Form.css'
const Form = () => {
  const [step, setStep] = useState(0)

  const nextPrev = (n) => {
    if (n < 0) {
      setStep((prevStep) => (prevStep + n + 7) % 7)
    } else {
      setStep((prevStep) => (prevStep + n) % 7)
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    // Handle form submission here
  }
  return (
    <div>
      <form id="regForm" action="" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="tab-section">
          <div
            className="tab"
            style={{ display: step === 0 ? 'block' : 'none' }}
          >
            Name:
            <p>
              <input placeholder="First name..." />
            </p>
            <p>
              <input placeholder="Last name..." />
            </p>
          </div>

          <div
            className="tab"
            style={{ display: step === 1 ? 'block' : 'none' }}
          >
            Contact Info:
            <p>
              <input
                placeholder="E-mail..."
                onChange={() => (this.className = '')}
              />
            </p>
            <p>
              <input
                placeholder="Phone..."
                onChange={() => (this.className = '')}
              />
            </p>
          </div>

          <div
            className="tab"
            style={{ display: step === 2 ? 'block' : 'none' }}
          >
            Birthday:
            <p>
              <input placeholder="dd" onChange={() => (this.className = '')} />
            </p>
            <p>
              <input placeholder="mm" onChange={() => (this.className = '')} />
            </p>
            <p>
              <input
                placeholder="yyyy"
                onChange={() => (this.className = '')}
              />
            </p>
          </div>

          <div
            className="tab"
            style={{ display: step === 3 ? 'block' : 'none' }}
          >
            Login Info:
            <p>
              <input
                placeholder="Username..."
                onChange={() => (this.className = '')}
              />
            </p>
            <p>
              <input
                placeholder="Password..."
                onChange={() => (this.className = '')}
              />
            </p>
          </div>
          <div
            className="tab"
            style={{ display: step === 4 ? 'block' : 'none' }}
          >
            Explain your startup idea
            <p>
              <input
                placeholder="Idea..."
                onChange={() => (this.className = '')}
              />
            </p>
          </div>
          <div
            className="tab"
            style={{ display: step === 5 ? 'block' : 'none' }}
          >
            What kind of a person you are
            <p>
              <input
                placeholder="Tell us about yourself..."
                onChange={() => (this.className = '')}
              />
            </p>
          </div>
          <div
            className="tab"
            style={{ display: step === 6 ? 'block' : 'none' }}
          >
            What are your expectations?
            <p>
              <input
                placeholder="Expectations..."
                onChange={() => (this.className = '')}
              />
            </p>
          </div>
        </div>
        <div className="btn-section">
          <div className="lr">
            <button type="button" id="prevBtn" onClick={() => nextPrev(-1)}>
              Previous
            </button>
            <button type="button" id="nextBtn" onClick={() => nextPrev(1)}>
              Next
            </button>
          </div>
          <div className="submit-area">
            <button
              className="btn-submit"
              style={{ display: step === 6 ? 'block' : 'none' }}
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form
