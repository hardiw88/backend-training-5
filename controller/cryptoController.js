const Crypto = require("../model/cryptoModel");
const mongoose = require("mongoose");

const getallCrypto = async (req, res) => {
  try {
    const model = await Crypto.find({}).sort({ createdAt: -1 });
    res.status(200).json(model);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getsingleCrypto = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "NO CRYPTO FOUND!" });
  }

  const model = await Crypto.findById({ _id: id });

  if (!model) {
    return res.status(404).json({ error: "NO CRYPTO FOUND!" });
  }
  res.status(200).json(model);
};

const postCrypto = async (req, res) => {
  const { name, lot, price } = req.body;
  try {
    const model = await Crypto.create({ name, lot, price });
    res.status(200).json(model);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCrypto = async (req, res) => {
  const { id } = req.params;

  try {
    const model = await Crypto.findByIdAndDelete({ _id: id });

    res.status(200).json(model);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const patchCrypto = async (req, res) => {
  const { id } = req.params;

  try {
    const model = await Crypto.findByIdAndUpdate({ _id: id }, { ...req.body });
    res.status(200).json(model);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getallCrypto,
  getsingleCrypto,
  postCrypto,
  deleteCrypto,
  patchCrypto,
};
