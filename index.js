const express = require('express');
const app = express();
const port = 8000;

// Middleware to parse JSON
app.use(express.json());

// Route 1: Users data
app.get('/api/users', (req, res) => {
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'admin'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'user'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      role: 'user'
    }
  ];
  res.status(200).json({ success: true, data: users, count: users.length });
});

// Route 2: Products data
app.get('/api/products', (req, res) => {
  const products = [
    {
      id: 1,
      name: 'Laptop',
      price: 999.99,
      category: 'Electronics',
      inStock: true
    },
    {
      id: 2,
      name: 'Coffee Mug',
      price: 12.99,
      category: 'Kitchen',
      inStock: true
    },
    {
      id: 3,
      name: 'Book',
      price: 24.99,
      category: 'Education',
      inStock: false
    }
  ];
  res.status(200).json({ success: true, data: products, count: products.length });
});

// Route 3: Company info
app.get('/api/company', (req, res) => {
  const companyInfo = {
    name: 'Tech Solutions Inc.',
    founded: 2020,
    employees: 150,
    headquarters: 'New York, NY',
    services: ['Web Development', 'Mobile Apps', 'Cloud Solutions'],
    contact: {
      phone: '+1-555-0123',
      email: 'info@techsolutions.com',
      website: 'https://techsolutions.com'
    }
  };
  res.status(200).json({ success: true, data: companyInfo });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

