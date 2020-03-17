import { Schema, model, Document } from "mongoose";


interface CountModel extends Document {
    user : number
    tests : number
    labo : number
}

const CountSchema: Schema = new Schema({
    user: {
        type: Number,
        unique: true
    },
    tests: {
        type: Number,
        unique: true
    },
    labo: {
        type: Number,
        unique: true
    },
    Medicines: {
        type: Number,
        unique: true
    }
});

export const Count = model<CountModel>('Count', CountSchema)