const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  prenom: {
    type: String,
    required: true,
  },
  nom: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    validate: {
      validator: (val) => {
        return val.indexOf('@') !== -1;
      }
    }
  }
});

module.exports = mongoose.model('Contact', contactSchema);
