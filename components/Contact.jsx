import React from 'react'

const Contact = () => {
  return (
    <div>
        <h1>Let's work together</h1>
        <form >
            <div>
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email' />
            </div>
            <input type="text" placeholder='Subject' />
            <textarea cols="30" rows="10" placeholder='Message'></textarea>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Contact