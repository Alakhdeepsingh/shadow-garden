const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_URI;
console.log("Connecting to MongoDB at:", mongo_url); // 🔍 Debug log

mongoose.connect(mongo_url)
    .then(() => {
        console.log('✅ MongoDB Connected...');
    }).catch((err) => {
        console.log('❌ MongoDB Connection Error: ', err.message);
    });
