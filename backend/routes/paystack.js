import { request } from 'https'


const params = JSON.stringify({
  "email": "nutiattor@gmail.com",
  "amount": "5",
  "currency": "GHS",
  "metadata": {
    "custom_fields": [
      {
        "display_name": "Nuti Attor",
        "variable_name": "nuti_attor"
      }
    ]
  },
  "mobile_money": {
    "phone" : "0502297337",
    "provider" : "Vodafone"
  },
  "birthday": "1995-12-23"
})
const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/charge',
  method: 'POST',
  headers: {
    Authorization: 'Bearer SECRET_KEY',
    'Content-Type': 'application/json'
  }
}
const req = request(options, res => {
  let data = ''
  res.on('data', (chunk) => {
    data += chunk
  });
  res.on('end', () => {
    console.log(JSON.parse(data))
  })
}).on('error', error => {
  console.error(error)
})
req.write(params)
req.end()