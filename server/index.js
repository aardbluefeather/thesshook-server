const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json({ limit: '10MB' }));
app.use(cors());

app.use(express.static(__dirname + '/public/'));
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));

const port = process.env.PORT || 8200;
app.listen(port, () => console.log(`Server started on port ${port}`));
