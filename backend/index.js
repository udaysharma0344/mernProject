const app = require('./server.js');
const connectDB = require('./database/connect.js');
const userRoutes = require('./modules/user/route.js');


app.use('/api/v1/user',userRoutes);

connectDB();

