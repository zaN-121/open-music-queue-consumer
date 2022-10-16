require('dotenv').config();
const amqplib = require('amqplib');
const Listener = require('./listener');
const MailSender = require('./MailSender');
const PlaylistsService = require('./PlaylistsService');
const { rabbitMq } = require('./utils/config');

const init = async () => {
  const mailSender = new MailSender();
  const playlistsService = new PlaylistsService();
  const listener = new Listener(playlistsService, mailSender);

  const connection = await amqplib.connect(rabbitMq.server);
  const channel = await connection.createChannel();

  await channel.assertQueue('export:playlist', {
    durable: true,
  });

  channel.consume('export:playlist', listener.listen, { noAck: true });
};

init();
