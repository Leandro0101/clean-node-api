export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb+srv://leand:leand123@cluster0.hn9en.mongodb.net/clean_mango?retryWrites=true&w=majority',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || 'l20d/~1'
}
