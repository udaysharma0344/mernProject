const app = require('./server.js');
const connectDB = require('./database/connect.js');
const userRoutes = require('./modules/user/route.js');
const { authenticate } = require('./utils/auth.js');


app.use('/auth',authenticate)
app.use('/api/v1/user',userRoutes);

connectDB();

