const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Inisialisasi Client tanpa local auth
const client = new Client();

// Event ketika QR code dihasilkan
client.on('qr', (qr) => {
    // Tampilkan QR di terminal
    qrcode.generate(qr, { small: true });
});

// Event ketika bot berhasil terhubung ke WhatsApp
client.on('ready', () => {
    console.log('Bot is ready!');
});

// Event ketika menerima pesan
client.on('message', async (message) => {
    console.log(`Received message: ${message.body}`);

    // Kirim balasan otomatis
    if (message.body.toLowerCase() === 'halo') {
        message.reply('Halo! Ada yang bisa saya bantu?');
    }
});

// Memulai Client
client.initialize();
