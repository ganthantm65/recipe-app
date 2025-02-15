package com.recipeApp.api.repository;

import com.recipeApp.api.datamodel.UsersModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<UsersModel,Integer> {
    @Query("SELECT r FROM UsersModel r WHERE r.user_name = :user AND r.password = :password")
    UsersModel findUser(@Param("user") String user, @Param("password") String password);
}
