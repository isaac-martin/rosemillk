const axios = require('axios')
require('dotenv').config()

export function handler(event, context, callback) {
  const APIKEY = process.env.MAILCHIMP_API_KEY
  const parsedBody = JSON.parse(event.body)
  const { email, merge } = parsedBody

  if (!APIKEY) {
    console.error('No MailChimp API Key include in environment variables')
    process.exit(1)
  }

  if (!parsedBody || !email) {
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({ msg: "Missing Email Paramater" }),
    })
  }

  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (!re.test(email)) {
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({ msg: "Invalid Email" }),
    })
  }


  const regionName = 'us4'
  const apiKey = APIKEY
  const listId = 'fda93b2e0b'
  const url = `https://${regionName}.api.mailchimp.com/3.0/lists/${listId}/members/`

  axios
    .post(
      url,
      {
        status: 'subscribed',
        email_address: email,
        merge_fields: {
          ...merge,
        },
      },
      {
        headers: {
          Authorization: `apikey ${apiKey}`,
        },
      }
    )
    .then(() => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({ msg: "Thanks for subscribing!" }),
      })
    })
    .catch(({ response }) => {
      let title = ""
      if (response && response.data && response.data.title) {
        title = response.data.title
      }
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          msg: `Failed to subscribe. ${title}`,
        }),
      })
    })
}
