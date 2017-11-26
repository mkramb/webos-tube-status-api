const { getAllStatus } = require('./services/status')

const response = (code, content) => ({
  statusCode: code,
  body: JSON.stringify(content)
})

const status = (event, context, callback) => {
  getAllStatus().then(results => {
    callback(null, response(200, results))
  })
}

module.exports = {
  status
}
