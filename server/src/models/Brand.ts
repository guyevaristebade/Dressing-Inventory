import mongoose, { Schema, Document, model } from 'mongoose'

interface IBrand extends Document {
    brand_name: string
}
const BrandSchema = new Schema<IBrand>({
    brand_name: {
        type: String,
        required: true,
    },
})
BrandSchema.set('timestamps', true)

export const Brand = model<IBrand>('Brand', BrandSchema)

BrandSchema.index({ brand_name: 1 }, { unique: true })
