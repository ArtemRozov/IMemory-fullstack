# Full-Stack Web Application (Java Spring Boot + React)

This project is a full-stack web application developed as an academic / pet project.
The main goal of the project is to practice backend development using Java and Spring Boot,
as well as frontend integration using React.

---

## 🚀 Technologies

### Backend
- Java
- Spring Boot
- Spring Data JPA
- PostgreSQL
- JWT Authentication
- Maven

### Frontend
- JavaScript
- React
- REST API integration

### Tools
- Git
- GitHub
- Postman

---

## 🧩 Project Description

The project represents a RESTful backend application with a connected React frontend.
It focuses on backend architecture, API design, authentication, and database interaction.

Main goals of the project:
- Practice backend development with Spring Boot
- Implement secure authentication using JWT
- Design and work with relational databases
- Integrate backend APIs with a frontend application

---

## 🏗 Architecture

The backend follows a layered architecture:

- **Controller layer** – handles HTTP requests and responses
- **Service layer** – contains business logic
- **Repository layer** – responsible for database interaction

This separation improves code readability, maintainability, and scalability.

---

## 🔐 Authentication

- JWT-based authentication
- Secure user login and authorization
- Token-based access to protected endpoints

---

## 🗄 Database

- PostgreSQL relational database
- Entity relationships mapped using JPA / Hibernate
- Structured schema design

---

## ▶️ How to Run the Project

### Backend
1. Clone the repository
2. Configure PostgreSQL connection in `application.properties`
3. Run the backend:
```bash
mvn spring-boot:run
