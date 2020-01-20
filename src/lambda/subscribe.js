const axios = require('axios')
require('dotenv').config()

export function handler(context, callback) {
  const APIKEY = process.env.MAILCHIMP_API_KEY
  if (!APIKEY) {
    console.error('No MailChimp API Key include in environment variables')
    process.exit(1)
  }
  if (!context.body || !context.body.email) {
    callback('Missing email parameter')
    return
  }

  console.log('isaac')

  const { email } = context.body

  const regionName = 'us1'
  const apiKey = APIKEY
  const listId = 'xxxxxxxxxx'
  const url = `https://${regionName}.api.mailchimp.com/3.0/lists/${listId}/members/`

  axios
    .post(
      url,
      {
        status: 'subscribed',
        email_address: email,
      },
      {
        headers: {
          Authorization: `apikey ${apiKey}`,
        },
      }
    )
    .then(() => {
      callback(null, { message: 'Email subscribed!' })
    })
    .catch(error => {
      callback(error.response.data)
    })
}
