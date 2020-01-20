import React, { useState } from 'react'

const Newsletter = () => {
  const [useEmail, setEmail] = useState('isaac@weareplayground.co')
  const [useError, setError] = useState()
  const [useSubscribed, setSubscribed] = useState(false)

  const handleChange = ({ target }) => {
    setEmail(target.value)
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      const response = await fetch('/.netlify/functions/subscribe', {
        method: 'post',
        body: JSON.stringify({
          email: useEmail,
        }),
      })

      const body = await response.json()

      if (response.status === 500) {
        setError(body.msg)
      } else {
        setError(null)
        setSubscribed(true)
        setEmail('')
      }
    } catch (err) {
      console.log('err', err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={useEmail}
        onChange={() => handleChange()}
      ></input>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Newsletter
