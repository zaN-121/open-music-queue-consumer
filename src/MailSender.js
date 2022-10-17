const nodemailer = require('nodemailer');
const { nodemailerConfig } = require('./utils/config');

class MailSender {
  constructor() {
    this._transporter = nodemailer.createTransport({
      host: nodemailerConfig.mailHost,
      port: nodemailerConfig.mailPort,
      auth: {
        user: nodemailerConfig.mailAddress,
        pass: nodemailerConfig.mailPassword,
      },
    });
  }

  sendEmail(targetEmail, content) {
    const message = {
      from: 'Open Music Server App',
      to: targetEmail,
      subject: 'Export Playlist',
      text: 'Terlampir hasil dari export playlist',
      attachments: [
        {
          filename: 'playlist.json',
          content,
        },
      ],
    };
    return this._transporter.sendMail(message);
  }
}

module.exports = MailSender;
