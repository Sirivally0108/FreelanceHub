-- ==========================================
-- FreelanceHub Database Queries
-- PostgreSQL Queries for Application Features
-- ==========================================


-- 1. View all available projects
SELECT 
    project_id,
    title,
    description,
    budget,
    status
FROM projects
WHERE status = 'open';


-- 2. View projects posted by a specific client
SELECT 
    p.project_id,
    p.title,
    p.description,
    p.budget,
    u.name AS client_name
FROM projects p
JOIN users u 
ON p.client_id = u.user_id
WHERE u.user_id = 1;


-- 3. View all proposals for a specific project
SELECT 
    p.proposal_id,
    u.name AS freelancer_name,
    p.proposal_text,
    p.proposed_budget,
    p.status
FROM proposals p
JOIN users u
ON p.freelancer_id = u.user_id
WHERE p.project_id = 1;


-- 4. View messages between two users
SELECT 
    sender.name AS sender_name,
    receiver.name AS receiver_name,
    m.message,
    m.sent_at
FROM messages m
JOIN users sender
ON m.sender_id = sender.user_id
JOIN users receiver
ON m.receiver_id = receiver.user_id
WHERE 
    (m.sender_id = 1 AND m.receiver_id = 3)
    OR
    (m.sender_id = 3 AND m.receiver_id = 1)
ORDER BY m.sent_at;


-- 5. View freelancer reviews and ratings
SELECT 
    u.name AS freelancer_name,
    r.rating,
    r.review_text,
    r.created_at
FROM reviews r
JOIN users u
ON r.reviewed_user_id = u.user_id
WHERE u.role = 'freelancer';


-- 6. View unread notifications
SELECT 
    notification_id,
    notification_message,
    created_at
FROM notifications
WHERE is_read = FALSE;


-- 7. Count the number of projects posted by each client
SELECT 
    u.name AS client_name,
    COUNT(p.project_id) AS total_projects
FROM users u
LEFT JOIN projects p
ON u.user_id = p.client_id
WHERE u.role = 'client'
GROUP BY u.name;


-- 8. Find all projects with their client details
SELECT 
    p.title,
    p.description,
    p.budget,
    u.name AS client_name,
    u.email AS client_email
FROM projects p
JOIN users u
ON p.client_id = u.user_id;


-- ==========================================
-- End of FreelanceHub Queries
-- ==========================================