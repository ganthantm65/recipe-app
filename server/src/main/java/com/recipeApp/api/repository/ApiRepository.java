package com.recipeApp.api.repository;

import com.recipeApp.api.datamodel.Model;
import com.recipeApp.api.datamodel.UsersModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ApiRepository extends JpaRepository<Model,Integer> {
    @Query("SELECT r FROM Model r WHERE r.cuisine = :cuisine")
    List<Model> getCuisine(@Param("cuisine") String cuisine);

}

