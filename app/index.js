const fs = require('fs');
const { IncomingWebhook } = require("@slack/client");
const promise = require('promise');
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
// ↓Change this URL to own value
const SLACK_WEBHOOK_URL = "https://hooks.slack.com/services/example";
const webhook = new IncomingWebhook(SLACK_WEBHOOK_URL);
const loadfile = new promise(function (resolve, reject) {
  fs.readFile('./passwd.txt', 'utf8', function (err, text) {
    resolve(text);
  });
});
loadfile.then(
  function slack(val) {
    webhook.send({
      "username": year + '/' + month + 'のパスワード',
      "icon_emoji": ":closed_lock_with_key:",
      attachments: [{
        text: val,
      }]
    })
  }
);