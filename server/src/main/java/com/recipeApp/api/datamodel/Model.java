package com.recipeApp.api.datamodel;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.util.*;

@Entity
@Table(name="Recipe")
@Data
public class Model {
    @Id
    @Column(name="recipe_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "recipe_name")
    private String recipe_name;

    @Column(name = "cuisine")
    private String cuisine;

    @Column(name = "chef_name")
    private String chef_name;

    @Column(name = "description")
    private String description;

    @Column(name = "ingredients")
    @JdbcTypeCode(SqlTypes.JSON)
    private List<String> ingredients;

    @Column(name = "steps")
    @JdbcTypeCode(SqlTypes.JSON)
    private List<String> steps;

    @Column(name = "review")
    @JdbcTypeCode(SqlTypes.JSON)
    private List<Review> reviews;

    @Column(name = "image")
    private String image;
    public Model() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getRecipe_name() {
        return recipe_name;
    }

    public void setRecipe_name(String recipe_name) {
        this.recipe_name = recipe_name;
    }

    public String getCuisine() {
        return cuisine;
    }

    public void setCuisine(String cuisine) {
        this.cuisine = cuisine;
    }

    public String getChef_name() {
        return chef_name;
    }

    public void setChef_name(String chef_name) {
        this.chef_name = chef_name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<String> getIngredients() {
        return ingredients;
    }

    public void setIngredients(List<String> ingredients) {
        this.ingredients = ingredients;
    }

    public List<String> getSteps() {
        return steps;
    }

    public void setSteps(List<String> steps) {
        this.steps = steps;
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
