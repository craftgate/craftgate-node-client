const Craftgate = require("../../dist");

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: 'https://sandbox-api.craftgate.io'
});

function createDate(days, hours, minutes, seconds) {
  let date = new Date();
  date.setDate(date.getDate() + days);
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(seconds);
  return date;
}

const request = {
  page: 0,
  size: 10,
  fileStatus: Craftgate.Model.FileStatus.Created,
  startDate: createDate(-1, 0, 0, 0),
  endDate: new Date()
};

craftgate.settlementReporting().searchPayoutRow(request)
  .then(result => console.info("Search payout rows", result))
  .catch(err => console.error("Failed to search payout rows", err));
