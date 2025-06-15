# Healthcare Backend API

This project is a backend system for a healthcare application built using Node.js, Express.js, Sequelize, and PostgreSQL. It allows users to register, log in, and manage doctor-patient records securely.

## Features

- User registration and login with JWT authentication
- CRUD operations for patients and doctors
- Assigning doctors to patients through mapping
- Secure APIs using middleware for authentication
- Sequelize ORM for database interaction
- Proper error handling and validations

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- JWT (JSON Web Tokens)
- bcryptjs
- dotenv

## API Endpoints

### Authentication Routes

| Method | Endpoint              | Description        |
|--------|-----------------------|--------------------|
| POST   | /api/auth/register    | Register a user    |
| POST   | /api/auth/login       | Login a user       |

### Patient Routes

| Method | Endpoint              | Description              |
|--------|-----------------------|--------------------------|
| POST   | /api/patients         | Add a new patient        |
| GET    | /api/patients         | Get all patients         |
| GET    | /api/patients/:id     | Get patient by ID        |
| PUT    | /api/patients/:id     | Update patient details   |
| DELETE | /api/patients/:id     | Delete a patient         |

### Doctor Routes

| Method | Endpoint              | Description             |
|--------|-----------------------|-------------------------|
| POST   | /api/doctors          | Add a new doctor        |
| GET    | /api/doctors          | Get all doctors         |
| GET    | /api/doctors/:id      | Get doctor by ID        |
| PUT    | /api/doctors/:id      | Update doctor details   |
| DELETE | /api/doctors/:id      | Delete a doctor         |

### Mapping Routes

| Method | Endpoint                      | Description                          |
|--------|-------------------------------|--------------------------------------|
| POST   | /api/mappings                 | Assign doctor to patient             |
| GET    | /api/mappings                 | Get all mappings                     |
| GET    | /api/mappings/:patientId      | Get doctors for a specific patient   |
| DELETE | /api/mappings/:id             | Remove doctor from a patient         |
