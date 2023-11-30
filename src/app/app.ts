const express = require('express');
const { json } = require('express');
require('express-async-errors');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();


app.use(cors());
app.use(json());


export default app;