package com.recipeApp.api.repository;

import com.recipeApp.api.datamodel.Model;
import com.recipeApp.api.datamodel.Review;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ApiRepository extends JpaRepository<Model,Integer> {
    @Query("SELECT r FROM Model r WHERE r.cuisine = :cuisine")
    List<Model> getCuisine(@Param("cuisine") String cuisine);

    @Query("SELECT r FROM Model r WHERE r.recipe_name =: recipeDetails OR r.cuisine=:recipeDetails OR r.chef_name=:recipeDetails")
    List<Model> getRecipe(@Param("recipeDetails") String recipeDetails);

    @Modifying
    @Transactional
    @Query(value = "UPDATE recipe SET reviews = JSON_ARRAY_APPEND(reviews, '$', CAST(:review AS JSON)) WHERE recipe_id = :id", nativeQuery = true)
    void addReview(@Param("review") String review, @Param("id") int id);
}

