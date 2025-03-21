import { getUserIdFromToken } from '../utils'

export const isAuthenticated = (req: any, res: any, next: any) => {
    const token = req.headers['authorization']?.split(' ')[1]

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' })
    }

    const userId = getUserIdFromToken(token)
    if (!userId) {
        return res.status(401).json({ message: 'Unauthorized' })
    }

    req.user_id = userId
    next()
}
