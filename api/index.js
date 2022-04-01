const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log('Database connected successfully');
    }).catch((err) => console.log(err));
}

app.listen(8000, () => {
    console.log('listening on port 8000');
});