# FreelanceHub Database Documentation

## Overview

The FreelanceHub database is designed using PostgreSQL to support an online freelance marketplace where clients can post projects and freelancers can submit proposals, communicate, receive reviews, and get notifications.

---

## Database Tables

### 1. Users

Stores the details of clients and freelancers.

Attributes:
- user_id (Primary Key)
- name
- email
- password
- role
- created_at

---

### 2. Projects

Stores projects posted by clients.

Attributes:
- project_id (Primary Key)
- title
- description
- budget
- status
- client_id (Foreign Key → Users)
- created_at

---

### 3. Proposals

Stores freelancer proposals submitted for projects.

Attributes:
- proposal_id (Primary Key)
- project_id (Foreign Key → Projects)
- freelancer_id (Foreign Key → Users)
- proposal_text
- proposed_budget
- status
- submitted_at

---

### 4. Messages

Stores communication between clients and freelancers.

Attributes:
- message_id (Primary Key)
- sender_id (Foreign Key → Users)
- receiver_id (Foreign Key → Users)
- message
- sent_at

---

### 5. Reviews

Stores ratings and feedback between users.

Attributes:
- review_id (Primary Key)
- reviewer_id (Foreign Key → Users)
- reviewed_user_id (Foreign Key → Users)
- rating
- review_text
- created_at

---

### 6. Notifications

Stores system notifications for users.

Attributes:
- notification_id (Primary Key)
- user_id (Foreign Key → Users)
- notification_message
- is_read
- created_at

---

## Entity Relationships

- One user can create many projects.
- One project can receive many proposals.
- One freelancer can submit many proposals.
- One user can send and receive many messages.
- One user can give and receive many reviews.
- One user can have multiple notifications.

---

## SQL Files

### schema.sql
Creates all database tables and relationships.

### seed.sql
Inserts sample data for testing and demonstration.

### queries.sql
Contains commonly used database retrieval queries.

---

## Technologies Used

- PostgreSQL
- SQL
- Draw.io (ER Diagram)
- Git and GitHub for version control
