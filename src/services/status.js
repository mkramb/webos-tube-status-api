const fetch = require('node-fetch')
const API_STATUS_ALL = 'https://api.tfl.gov.uk/line/mode/tube,overground,dlr,tflrail/status'

const getAllStatus = () => 
  fetch(API_STATUS_ALL)
    .then(response => response.json())
    .then(items =>
      items.map((item) => ({
        name: item.name,
        status: (
          item.lineStatuses &&
          item.lineStatuses.length &&
          item.lineStatuses[0].statusSeverityDescription
        )
      }))
    )

module.exports = {
  getAllStatus
}