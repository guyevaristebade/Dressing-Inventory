import mongoose, { Schema } from 'mongoose'

export interface IClothes extends Document {
    clothe_name: string
    color: string
    size: string
    invoice?: string
    url_image: string
    washing_history?: Date[]
    nb_take_clothes: number
    price: number
    category_id: mongoose.Types.ObjectId // Assuming Category is another model
    brand_id: mongoose.Types.ObjectId // Assuming Brand is another model
    type_id: mongoose.Types.ObjectId
    user_id: mongoose.Types.ObjectId // Assuming user_id refers to a User model
}

const ClothesSchema = new Schema<IClothes>({
    clothe_name: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    color: {
        type: String,
        required: true,
    },
    invoice: {
        type: String,
        // required: true,
    },
    url_image: {
        type: String,
        // required: true,
    },
    washing_history: {
        type: [Date],
        default: [],
    },
    nb_take_clothes: {
        type: Number,
        default: 0,
        min: 0,
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    brand_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required: true,
    },
    type_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Type',
        required: true,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
})

ClothesSchema.set('timestamps', true)

export const Clothes = mongoose.model<IClothes>('Clothes', ClothesSchema)
