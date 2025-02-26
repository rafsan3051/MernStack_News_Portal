const authModel = require('../models/authModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class authController {
    login = async (req, res) => {
        const {email, password} = req.body

        if (!email) {
            return res.status(404).json({ message: 'Please provide your email' })
        }
        if (!password) {
            return res.status(404).json({ message: 'Please provide your password' })
        }

        try {
            const user = await authModel.findOne({ email }).select('+password')
            if (user) {
                const match = await bcrypt.compare(password, user.password)
                if (match) {
                    const obj = {
                        id: user.id,
                        name: user.name,
                        category: user.category,
                        role: user.role
                    }
                    const token = await jwt.sign(obj, process.env.secret, {
                        expiresIn: process.env.exp_time
                    })
                    return res.status(200).json({ message: 'Logged in successfully', token })
                } else {
                    return res.status(404).json({ message: 'Invalid password' })
                }
            } else {
                return res.status(404).json({ message: 'User not found!' })
            }
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Server error' })
        }
    }
}

module.exports = new authController()