import mongoose, { Schema, Document, model } from 'mongoose'

interface IOutfit extends Document {
    outfit_name: string
    user_id: mongoose.Types.ObjectId
    clothes: [mongoose.Types.ObjectId]
}

const OutfitSchema = new Schema<IOutfit>({
    outfit_name: {
        type: String,
        required: true,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    clothes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Clothes',
            required: true,
        },
    ],
})

OutfitSchema.set('timestamps', true)

export const Outfit = model<IOutfit>('Outfit', OutfitSchema)
