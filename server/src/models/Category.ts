import mongoose, { Schema, Document, model } from 'mongoose'

interface ICategory extends Document {
    category_name: 'chaussures' | 'vêtements' | 'accessoire'
}

const CategorySchema = new Schema<ICategory>({
    category_name: {
        type: String,
        enum: ['chaussures', 'vêtements', 'accessoire'],
        required: true,
    },
})

CategorySchema.set('timestamps', true)

export const Category = model<ICategory>('Category', CategorySchema)
