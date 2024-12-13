import mongoose, { Schema, Document } from "mongoose";

export interface IMoto extends Document {
    name: string;
    category: string;
    description: string;
    price: String;
    imagenUrl: string;
};

const MotoSchema: Schema=new Schema({
    name: { type: String, required: true},
    category: {type: String, required: true},
    description: {type: String, required: true},
    price: { type: String, required: true},
    imagenUrl: { type: String, required: true},
});

export default mongoose.model<IMoto>('Moto', MotoSchema);