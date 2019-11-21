import { createClient } from 'redis';
import { Nohm } from 'nohm';
// 'bunkey-token-123456'
const client = createClient(process.env.REDIS_URI);
// console.log(client);
client.on('connect', function() {
    client.select(0);
    Nohm.setClient(client);
    // Nohm.setPrefix('bunkey');
});

module.exports = {
    nohm: Nohm
};
