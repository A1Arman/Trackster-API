module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENC || 'development',
    DB_URL: process.env.DB_URL || 'postgresql://dundermifflin@localhost/trackster',
    JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret'
}