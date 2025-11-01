-- Users table remains mostly the same
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),  -- Add name column since frontend collects it
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Products table updated
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    quantity INT DEFAULT 0,
    price NUMERIC(10,2),
    category VARCHAR(100),
    image TEXT,          -- store image URL
    user_email VARCHAR(255) REFERENCES users(email) ON DELETE CASCADE, -- changed from user_id
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
