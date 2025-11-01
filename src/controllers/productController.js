import { pool } from '../db/index.js';

export const getProducts = async (req, res) => {
  const userId = req.user.userId;
  const { rows } = await pool.query('SELECT * FROM products WHERE user_id = $1', [userId]);
  res.json(rows);
};

export const addProduct = async (req, res) => {
  const userId = req.user.userId;
  const { name, description, quantity, price, category,image } = req.body;
  await pool.query(
    'INSERT INTO products (name, description, quantity, price, category, user_id) VALUES ($1,$2,$3,$4,$5,$6)',
    [name, description, quantity, price, category,image, userId,]
  );
  res.json({ message: 'Product added successfully' });
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, quantity, price, category } = req.body;
  await pool.query(
    'UPDATE products SET name=$1, description=$2, quantity=$3, price=$4, category=$5 WHERE id=$6',
    [name, description, quantity, price, category, id]
  );
  res.json({ message: 'Product updated' });
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM products WHERE id=$1', [id]);
  res.json({ message: 'Product deleted' });
};

export const getLowStock = async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM products WHERE quantity < 5');
  res.json(rows);
};
