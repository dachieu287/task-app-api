const sgMail = require('@sendgrid/mail');
const sendgridAPIKey = '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';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = function (email, name) {
  sgMail.send({
    to: email,
    from: 'dachieu287@gmail.com',
    subject: 'Thanks for joining in',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app`
  }).then(() => {
  }, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });
}

const sendCacelationEmail = function (email, name) {
  sgMail.send({
    to: email,
    from: 'dachieu287@gmail.com',
    subject: 'Sorry to see you go!',
    text: `Goodbye ${name}. I hope to see you back sometime soon.`
  }).then(() => {
    // console.log('OK');
  }, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });
}

module.exports = {
  sendWelcomeEmail,
  sendCacelationEmail
}