require('dotenv').config();
const express = require('express');
const compression = require('compression');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

// Enable GZIP / Brotli compression
app.use(compression());

// Serve static files with custom cache behavior
const buildPath = path.join(__dirname, '../client/build');
app.use(express.static(buildPath, {
  etag: false,
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache');
    } else {
      res.setHeader('Cache-Control', 'public, max-age=31536000');
    }
  }
}));

// SPA fallback for React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
