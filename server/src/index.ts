import dotenv from 'dotenv'
import app from './app'
dotenv.config()

const PORT: string = process.env.PORT || '3000'

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:3000')
})
