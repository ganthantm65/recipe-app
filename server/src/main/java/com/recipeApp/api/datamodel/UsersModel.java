package com.recipeApp.api.datamodel;


import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.util.*;

@Entity
@Data
@Table(name = "recipe_user")
public class UsersModel {
    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int user_id;

    @Column(name = "user_name")
    private String user_name;

    @Column(name = "password")
    private String password;

    @Column(name = "favs")
    @JdbcTypeCode(SqlTypes.JSON)
    private List<Model> favs;

    @Column(name = "your_recipe")
    @JdbcTypeCode(SqlTypes.JSON)
    private List<Model> your_recipe;

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Model> getFavs() {
        return favs;
    }

    public void setFavs(List<Model> favs) {
        this.favs = favs;
    }

    public List<Model> getYour_recipe() {
        return your_recipe;
    }

    public void setYour_recipe(List<Model> your_recipe) {
        this.your_recipe = your_recipe;
    }

    @Override
    public String toString() {
        return "UsersModel{" +
                "user_id=" + user_id +
                ", user_name='" + user_name + '\'' +
                ", password='" + password + '\'' +
                ", favs='" + favs + '\'' +
                ", your_recipe='" + your_recipe + '\'' +
                '}';
    }
}
