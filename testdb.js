const mongoose = require('mongoose');

const uri = 'mongodb+srv://ankan108:Ankan2004@cluster0.ap4zayq.mongodb.net/farm-u?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('✅ MongoDB connected successfully!');
    process.exit(0);
})
.catch(err => {
    console.error('❌ MongoDB connection failed:');
    console.error(err);
    process.exit(1);
});
