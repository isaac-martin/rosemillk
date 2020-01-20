import React, { useState } from 'react'

const Newsletter = () => {
  const [useFormData, setFormData] = useState({email:'', firstName: '', lastName: ''})
  const [useResponse, setResponse] = useState({status: null, msg: null})

  const handleChange = (key, { target }) => {
    setFormData({
      ...useFormData, [key]: target.value
    })
  }

  const handleSubmit = async evt => {
    const {email, firstName, lastName} = useFormData
    evt.preventDefault()
    try {
      const response = await fetch('/.netlify/functions/subscribe', {
        method: 'post',
        body: JSON.stringify({
          email: email,
          merge: {
            FNAME: firstName,
            LNAME: lastName
          }
        }),
      })

      const body = await response.json()

      if (response.status === 500 || 400)  {
        setResponse({status: 'error',msg: body.msg})
      } 
      if (response.status === 200)  {
        setResponse({status: 'success',msg: body.msg})
      } 
    } catch (err) {
      setResponse({status: 'error',msg: err})
    }
  }

  
  const { status, msg } = useResponse
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="fieldGroup">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        value={useFormData.email}
        onChange={(evt) => handleChange('email',evt)} />
      </div>
      <div class="splitGroup">
      <div className="fieldGroup">
      <label for="fistName">First Name</label>
      <input
        id="fistName"
        type="text"
        value={useFormData.firstName}
        onChange={(evt) => handleChange('firstName',evt)}
      />
      </div>
      <div className="fieldGroup">

      <label for="lastName">Last Name</label>
        <input
        id="lastName"
        type="text"
        value={useFormData.lastName}
        onChange={(evt) => handleChange('lastName',evt)}
      />
      </div>
      </div>
      {status && <p>{msg}</p>}
      <button className="Product__buy button" type="submit">Submit</button>
    </form>

</>
  )
}

export default Newsletter
