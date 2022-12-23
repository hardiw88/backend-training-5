const express = require("express");
const router = express();
const { getallCrypto, getsingleCrypto, postCrypto, deleteCrypto, patchCrypto } = require("../controller/cryptoController");

//ROUTER
router.get("/", getallCrypto);
router.get("/:id", getsingleCrypto);
router.post("/", postCrypto);
router.delete("/:id", deleteCrypto);
router.patch("/:id", patchCrypto);

//EXPORTS MODULE
module.exports = router;
