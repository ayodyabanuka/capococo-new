import nodemailer from 'nodemailer';

const email = 'cococapo268@gmail.com';
const pass = 'qopjyrojixjoyiqm';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: 'info@capococo.com',
  subject: 'New Email From capococo.com',
};
