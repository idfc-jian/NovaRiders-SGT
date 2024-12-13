"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMoto = exports.getAllMotos = void 0;
const Moto_1 = __importDefault(require("../models/Moto"));
const getAllMotos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const motos = yield Moto_1.default.find();
        res.status(200).json(motos);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Ha ocurrido un error';
        res.status(500).json({ error: errorMessage });
    }
});
exports.getAllMotos = getAllMotos;
const addMoto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newMoto = new Moto_1.default(req.body);
        yield newMoto.save();
        res.status(201).json(newMoto);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Ha ocurrido un error';
        res.status(500).json({ error: errorMessage });
    }
});
exports.addMoto = addMoto;
