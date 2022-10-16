const config = {
  rabbitMq: {
    server: process.env.RABBITMQ_SERVER,
  },
  nodemailerConfig: {
    mailHost: process.env.MAIL_HOST,
    mailPort: process.env.MAIL_PORT,
    mailUser: process.env.MAIL_USER,
    mailPassword: process.env.MAIL_PASSWORD,
  },
};

module.exports = config;
