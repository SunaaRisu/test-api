import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.listen(5001, "0.0.0.0", () => console.log('Api running on port 5001'));

app.get('/', (req, res) => res.json('My api running'));