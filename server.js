import express from "express";
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express();
const port = 3000;

app.use(express.static(join(__dirname, 'client/dist')));

// API routes would go here (if you have any)
// app.use('/api', apiRouter);

app.get('*', (req, res) => {
    res.sendFile(join(__dirname, 'client/dist/index.html'));
});

app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`)
});