const crypto = require('crypto');

const document = 'Hello world';
const hash = crypto.createHash('sha256').update(document).digest('hex');

console.log('Document Hash:', hash);