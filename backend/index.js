require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const { v4: uuidv4 } = require('uuid');

const app = express();
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

app.use(cors());
app.use(express.json());

// Example endpoint: Register new service
app.post('/register-service', async (req, res) => {
  const { uid } = req.body;
  const password = uuidv4();
  
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});


  try {
    const result = await pool.query(
      'INSERT INTO services (uid, password) VALUES ($1, $2) RETURNING *',
      [uid, password]
    );
    res.status(201).json({ password: result.rows[0].password });
  } catch (err) {
    res.status(500).json({ error: 'Could not register service.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(\`RblxAuth(C) backend running on port \${PORT}\`));
