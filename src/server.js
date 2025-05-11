const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

// Enable CORS for the specified link
app.use(cors({
  origin: 'https://salmon-forest-03480f110.6.azurestaticapps.net/'
}));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Handle React routing, return index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});