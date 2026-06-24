-- ==========================================
-- FreelanceHub Sample Data
-- ==========================================


-- USERS
INSERT INTO users (name, email, password, role)
VALUES
('Alice Johnson', 'alice@gmail.com', 'alice123', 'client'),
('Robert Smith', 'robert@gmail.com', 'robert123', 'client'),
('John Davis', 'john@gmail.com', 'john123', 'freelancer'),
('Emma Wilson', 'emma@gmail.com', 'emma123', 'freelancer');


-- PROJECTS
INSERT INTO projects (title, description, budget, status, client_id)
VALUES
('E-commerce Website Development',
 'Build a responsive online shopping website',
 50000,
 'open',
 1),

('Mobile App Design',
 'Create UI/UX design for a food delivery application',
 25000,
 'open',
 2);


-- PROPOSALS
INSERT INTO proposals 
(project_id, freelancer_id, proposal_text, proposed_budget, status)
VALUES
(1,
 3,
 'I have 3 years experience in web development and can complete this project efficiently.',
 45000,
 'pending'),

(2,
 4,
 'I specialize in UI/UX design and can provide a modern application design.',
 22000,
 'pending');


-- MESSAGES
INSERT INTO messages (sender_id, receiver_id, message)
VALUES
(1, 3, 'Hello, I reviewed your proposal. Let us discuss the project.'),
(3, 1, 'Thank you. I am available for discussion.');


-- REVIEWS
INSERT INTO reviews 
(reviewer_id, reviewed_user_id, rating, review_text)
VALUES
(1,
 3,
 5,
 'Excellent work and professional communication.'),

(2,
 4,
 4,
 'Good design skills and completed the work on time.');


-- NOTIFICATIONS
INSERT INTO notifications 
(user_id, notification_message, is_read)
VALUES
(3,
 'Your proposal has been received by the client.',
 FALSE),

(4,
 'You have a new project recommendation.',
 FALSE);


-- ==========================================
-- END OF SAMPLE DATA
-- ==========================================