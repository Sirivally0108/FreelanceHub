-- ==========================================
-- FreelanceHub Database Schema
-- PostgreSQL Database
-- ==========================================


-- ======================
-- USERS TABLE
-- ======================
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role VARCHAR(20) NOT NULL CHECK (role IN ('client', 'freelancer')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- ======================
-- PROJECTS TABLE
-- ======================
CREATE TABLE projects (
    project_id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    budget DECIMAL(10,2),
    status VARCHAR(30) DEFAULT 'open',
    client_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (client_id)
    REFERENCES users(user_id)
    ON DELETE CASCADE
);


-- ======================
-- PROPOSALS TABLE
-- ======================
CREATE TABLE proposals (
    proposal_id SERIAL PRIMARY KEY,
    project_id INT NOT NULL,
    freelancer_id INT NOT NULL,
    proposal_text TEXT NOT NULL,
    proposed_budget DECIMAL(10,2),
    status VARCHAR(30) DEFAULT 'pending',
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (project_id)
    REFERENCES projects(project_id)
    ON DELETE CASCADE,

    FOREIGN KEY (freelancer_id)
    REFERENCES users(user_id)
    ON DELETE CASCADE
);


-- ======================
-- MESSAGES TABLE
-- ======================
CREATE TABLE messages (
    message_id SERIAL PRIMARY KEY,
    sender_id INT NOT NULL,
    receiver_id INT NOT NULL,
    message TEXT NOT NULL,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (sender_id)
    REFERENCES users(user_id)
    ON DELETE CASCADE,

    FOREIGN KEY (receiver_id)
    REFERENCES users(user_id)
    ON DELETE CASCADE
);


-- ======================
-- REVIEWS TABLE
-- ======================
CREATE TABLE reviews (
    review_id SERIAL PRIMARY KEY,
    reviewer_id INT NOT NULL,
    reviewed_user_id INT NOT NULL,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    review_text TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (reviewer_id)
    REFERENCES users(user_id)
    ON DELETE CASCADE,

    FOREIGN KEY (reviewed_user_id)
    REFERENCES users(user_id)
    ON DELETE CASCADE
);


-- ======================
-- NOTIFICATIONS TABLE
-- ======================
CREATE TABLE notifications (
    notification_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    notification_message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
    REFERENCES users(user_id)
    ON DELETE CASCADE
);


-- ==========================================
-- END OF FREELANCEHUB DATABASE SCHEMA
-- ==========================================