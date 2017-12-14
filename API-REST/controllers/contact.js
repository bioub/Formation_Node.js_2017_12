const Contact = require('../models/contact');

exports.list = async (req, res, next) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

exports.create = async (req, res, next) => {
  try {
    const contact = await Contact.create(req.body);
    res.statusCode = 201;
    res.json(contact);
  }
  catch (err) {
    res.statusCode = 500;
    res.json(err);
  }
};

// Exercice intégrer mongoose ici
exports.show = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return next();
    }

    res.json(contact);
  }
  catch (err) {
    res.statusCode = 500;
    res.json(err);
  }
};

// Exercice intégrer mongoose ici
exports.delete = (req, res, next) => {
  Contact.findByIdAndRemove(req.params.id)
    .then((contact) => {
      if (!contact) {
        return next();
      }

      res.json(contact);
    })
    .catch((err) => {
      res.statusCode = 500;
      res.json(err);
    })
};
