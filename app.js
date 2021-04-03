const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('hbs');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

// View engine setup
app.set('view engine', 'hbs');

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/career', (req, res) => {
  res.render('career');
});

app.post('/contact', (req, res) => {
  const output = `
      <p>New Contact Request</p>
      <h3>Contact Details</h3>
      <ul>  
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.number}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'info.bajraexports919@gmail.com', // generated ethereal user
      pass: 'bajraExports#9897'  // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"BAJRA EXPORTS" <info.bajraexports919@gmail.com>', // sender address
    to: 'jaspreetsingh08042@gmail.com', // list of receivers
    subject: 'CONTACT REQUEST FROM WEBSITE', // Subject line
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      res.render('contact', { msg: 'Email has not been sent' });
      return console.log(error);
    }
    res.render('contact', { msg: 'Email has been sent' });
  });
});

app.listen(3000, () => console.log('Server started...'));