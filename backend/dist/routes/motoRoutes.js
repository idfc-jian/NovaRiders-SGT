"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const motoController_1 = require("../controllers/motoController");
const router = (0, express_1.Router)();
router.post('/', motoController_1.addMoto);
router.get('/motos', motoController_1.getAllMotos);
exports.default = router;
