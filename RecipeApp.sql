-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: recipe_db
-- ------------------------------------------------------
-- Server version	8.0.40-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `recipe`
--

DROP TABLE IF EXISTS `recipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipe` (
  `recipe_id` int NOT NULL AUTO_INCREMENT,
  `chef_name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `ingredients` json DEFAULT NULL,
  `recipe_name` varchar(255) DEFAULT NULL,
  `cuisine` varchar(255) DEFAULT NULL,
  `steps` json DEFAULT NULL,
  `review` json DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`recipe_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipe`
--

LOCK TABLES `recipe` WRITE;
/*!40000 ALTER TABLE `recipe` DISABLE KEYS */;
INSERT INTO `recipe` VALUES (4,'Chef Mario','A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.','[\"Spaghetti\", \"Eggs\", \"Pancetta\", \"Parmesan Cheese\", \"Black Pepper\"]','Spaghetti Carbonara','Italian','[\"Boil pasta\", \"Cook pancetta\", \"Mix eggs and cheese\", \"Combine everything\", \"Serve hot\"]','[{\"review\": \"Delicious and easy to make!\", \"userName\": \"Alice\"}, {\"review\": \"Authentic taste!\", \"userName\": \"Bob\"}]','https://www.sipandfeast.com/wp-content/uploads/2022/09/spaghetti-carbonara-recipe-snippet-500x500.jpg'),(5,'Chef Ayesha','A fragrant rice dish made with spices, basmati rice, and marinated chicken.','[\"Basmati Rice\", \"Chicken\", \"Yogurt\", \"Spices\", \"Onions\"]','Chicken Biryani','Indian','[\"Marinate chicken\", \"Cook onions\", \"Layer rice and chicken\", \"Steam cook\", \"Serve with raita\"]','[{\"review\": \"Flavorful and rich!\", \"userName\": \"David\"}, {\"review\": \"Best homemade biryani!\", \"userName\": \"Emma\"}]','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaF6-1Auf1DuOXo9FhalxTrx1j-BnkoOu4A&s'),(6,'Chef Hiroshi','Delicious sushi rolls with fresh fish, rice, and seaweed.','[\"Sushi Rice\", \"Nori\", \"Salmon\", \"Avocado\", \"Soy Sauce\"]','Sushi Rolls','Japanese','[\"Prepare rice\", \"Slice ingredients\", \"Roll sushi\", \"Cut into pieces\", \"Serve with soy sauce\"]','[{\"review\": \"Very fresh and tasty!\", \"userName\": \"Chris\"}, {\"review\": \"Perfect sushi rolls!\", \"userName\": \"Sophia\"}]','https://www.kikkoman.eu/fileadmin/_processed_/0/f/csm_1025-recipe-page-Spicy-tuna-and-salmon-rolls_desktop_b6172c0072.jpg'),(7,'Chef Carlos','Traditional Mexican tacos with marinated pork and pineapple.','[\"Pork\", \"Pineapple\", \"Corn Tortillas\", \"Onion\", \"Cilantro\"]','Tacos al Pastor','Mexican','[\"Marinate pork\", \"Grill pork and pineapple\", \"Chop ingredients\", \"Assemble tacos\", \"Serve with lime\"]','[{\"review\": \"Authentic and flavorful!\", \"userName\": \"John\"}, {\"review\": \"Amazing tacos!\", \"userName\": \"Olivia\"}]','https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/05/al-pastor-3507w.jpg'),(8,'Chef Pierre','Flaky, buttery croissants with a crispy outer layer.','[\"Flour\", \"Butter\", \"Yeast\", \"Sugar\", \"Milk\"]','French Croissants','French','[\"Prepare dough\", \"Layer butter\", \"Fold and chill\", \"Shape croissants\", \"Bake until golden\"]','[{\"review\": \"Flaky and delicious!\", \"userName\": \"Liam\"}, {\"review\": \"Perfect with coffee!\", \"userName\": \"Mia\"}]','https://www.theflavorbender.com/wp-content/uploads/2020/05/French-Croissants-SM-2363.jpg');
/*!40000 ALTER TABLE `recipe` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-14  8:57:06
