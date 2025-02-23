# 🍽️ Recipe App

A full-stack **Recipe Management App** built with **React.js** (frontend) and **Spring Boot** (backend). Users can browse recipes, add reviews, and manage their favorite dishes. 🍕🍔🥗

---

## 📌 Features

✅ User Authentication (Login/Logout) 👤🔐  
✅ Search Recipes by Name, Cuisine, or Chef 🔍  
✅ Add Recipes to Favorites ❤️  
✅ Post Reviews & Ratings 📝⭐  
✅ Backend with Spring Boot & MySQL 🏗️  
✅ REST API for Recipe Management 🌐  

---

## 🏗️ Tech Stack

### Frontend (React.js) ⚛️
- React.js
- React Router
- Blueprint.js (for notifications)
- FontAwesome (icons)

### Backend (Spring Boot) 🛠️
- Spring Boot
- Spring Data JPA
- Hibernate
- MySQL
- REST API

---

## 🚀 Getting Started

### 🔥 Frontend (React.js)

#### 1️⃣ Clone the repository:
```sh
git clone https://github.com/yourusername/recipe-app.git
cd recipe-app/frontend
```

#### 2️⃣ Install dependencies:
```sh
npm install
```

#### 3️⃣ Start the React app:
```sh
npm start
```

🔹 The React app will run at `http://localhost:3000/` 🎉

---

### ⚡ Backend (Spring Boot)

#### 1️⃣ Clone the backend repository:
```sh
cd recipe-app/backend
```

#### 2️⃣ Configure MySQL database:
- Update `application.properties` with your MySQL credentials:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/recipeDB
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
```

#### 3️⃣ Build and run the Spring Boot server:
```sh
mvn spring-boot:run
```

🔹 The backend API will be available at `http://localhost:8080/` 🚀

---

## 📌 API Endpoints

### 🥘 Recipes
- `GET /recipes` → Fetch all recipes
- `GET /recipe/{id}` → Get a single recipe by ID
- `POST /recipe` → Add a new recipe
- `PUT /recipe/{id}` → Update a recipe
- `PUT /recipe/{id}` → Delete a recipe

### ⭐ Reviews
- `POST /recipe/review/{id}` → Add a review

### ❤️ Favorites
- `PUT /recipe/favourites/{user_id}` → Update user favorites

---

## 🛠️ Improvements & TODOs

✅ Add JWT Authentication 🔑  
✅ Improve UI with better design 🎨  
✅ Optimize API performance 🚀  

---

## 🤝 Contributing
Feel free to submit issues and pull requests! Let's build something amazing! ✨

---


