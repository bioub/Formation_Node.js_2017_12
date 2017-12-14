
exports.list = (req, res, next) => {
  res.json([{prenom: 'Romain'}]);
};

exports.create = (req, res, next) => {
  console.log(req.body);
  res.statusCode = 201;
  res.json({prenom: 'Romain'});
};

exports.show = (req, res, next) => {
  res.json({prenom: 'Romain'});
};

exports.delete = (req, res, next) => {
  res.json({prenom: 'Romain'});
};
