import { Schema, model, Document } from 'mongoose'

// Define the User interface
export interface IUser extends Document {
    last_name: string
    first_name: string
    email: string
    password: string
    connexion_count: number
    last_conn: Date
}

// Define the User schema
const UserSchema = new Schema<IUser>({
    last_name: { type: String, required: true },
    first_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    connexion_count: { type: Number, default: 0 },
    last_conn: { type: Date, default: null },
})

// Create and export the User model
export const User = model<IUser>('User', UserSchema)
