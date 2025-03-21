import mongoose, { Schema, Document, model } from 'mongoose'

export const CLOTHING_TYPES = [
    'Robes',
    'Tops & T-shirts',
    'Pantalons & Leggings',
    'Jeans',
    'Chemises & Blouses',
    'Vestes & Blazers',
    'Maillots de bain',
    'Sweats & Sweats à capuche',
    'Jupes',
    'Pulls & Gilets',
    'Vêtements de sport',
    'Shorts & Bermudas',
    'Combinaisons & Salopettes',
    'Manteaux',
    'Lingerie',
    'Pyjamas & Nuisettes',
    'Chaussettes & Collants',
    'Sneakers',
    'Sandales & Nu-pieds',
    'Escarpins',
    'Talons hauts',
    'Chaussures plates',
    'Mules & Sabots',
    'Bottines',
    'Ballerines',
    'Bottes',
    'Chaussures de sport',
    'Sandales de plage',
    'Chaussures de mariée',
    'Chaussons',
    'Chaussures de marche',
    'Entretien',
    'Sacs & Valises',
    'Bijoux',
    'Lunettes de soleil',
    'Chapeaux & foulards',
    'Ceintures',
    'Montres',
    'Portefeuilles & Étuis',
    'Écharpes',
    'Lunettes lumière bleue',
    'Gants',
    'Parapluies',
    'Divers',
    'Lifestyle & électronique',
] as const

export type ClothingTypeName = (typeof CLOTHING_TYPES)[number]

export interface IType extends Document {
    type_name: ClothingTypeName
    category_id?: mongoose.Types.ObjectId
}

const TypeSchema = new Schema<IType>({
    type_name: {
        type: String,
        required: true,
        enum: CLOTHING_TYPES,
        unique: true,
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
})

TypeSchema.set('timestamps', true)

export const Type = model<IType>('Type', TypeSchema)
