// DNSRecord.js
const mongoose = require('mongoose');

const dnsRecordSchema = new mongoose.Schema({
  domainId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Domain',
  },
  record: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('DNSRecord', dnsRecordSchema);
