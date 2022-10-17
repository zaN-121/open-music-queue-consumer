const config = {
  rabbitMq: {
    server: process.env.RABBITMQ_SERVER,
  },
  nodemailerConfig: {
    mailHost: process.env.MAIL_HOST,
    mailPort: process.env.MAIL_PORT,
    mailAddress: process.env.MAIL_ADDRESS,
    mailPassword: process.env.MAIL_PASSWORD,
  },
};

module.exports = config;
