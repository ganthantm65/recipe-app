package com.recipeApp.api.repository;

import com.recipeApp.api.datamodel.Model;
import com.recipeApp.api.datamodel.UsersModel;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepository extends JpaRepository<UsersModel,Integer> {
    @Query("SELECT r FROM UsersModel r WHERE r.user_name = :user AND r.password = :password")
    UsersModel findUser(@Param("user") String user, @Param("password") String password);

    @Modifying
    @Transactional
    @Query("UPDATE UsersModel r SET r.favs =:favs WHERE r.user_id =:id")
    void updateFavourites(@Param("id") int id, @Param("favs")List<Model> favs);
}
