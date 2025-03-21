import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const SECRET_KEY = process.env.JWT_SECRET || 'secret'

export const hashPassword = async (password: string) => {
    return await bcrypt.hash(password, 10)
}

export const comparePassword = async (password: string, hash: string) => {
    return await bcrypt.compare(password, hash)
}

export const generateToken = (userId: string) => {
    return jwt.sign({ userId }, SECRET_KEY, { expiresIn: '7d' })
}

export const verifyToken = (token: string) => {
    try {
        return jwt.verify(token, SECRET_KEY)
    } catch (error) {
        return null
    }
}

export const getUserIdFromToken = (token: string) => {
    const decoded = verifyToken(token)
    return decoded ? (decoded as any).user_id : null
}
