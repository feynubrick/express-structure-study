const main = function (req, res) {
  console.log('req.query: ', req.query);
  res.status(200).send({ success: true });
};

module.exports = {
  main,
};
