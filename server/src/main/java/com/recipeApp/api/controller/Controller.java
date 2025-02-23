package com.recipeApp.api.controller;

import com.recipeApp.api.datamodel.Review;
import com.recipeApp.api.datamodel.UsersModel;
import com.recipeApp.api.service.ApiService;
import com.recipeApp.api.datamodel.Model;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/recipe")
public class Controller {

    @Autowired
    ApiService service;

    @GetMapping
    public List<Model> getRequest() {
        return service.getAllData();
    }

    @PostMapping
    public void addRequest(@RequestBody Model model){
        service.addData(model);
    }

    @PostMapping("/login")
    public UsersModel findUser(@RequestBody UsersModel usersModel){
        return service.findUser(usersModel);
    }

    @PostMapping("/signup")
    public void addUser(@RequestBody UsersModel usersModel){
         service.createUser(usersModel);
    }

    @GetMapping("/search/{recipeDetails}")
    public List<Model> searchRecipe(@PathVariable String recipeDetails){
        return service.searchRecipe(recipeDetails);
    }

    @PutMapping("/favourites/{id}")
    public void updateFavourites(@PathVariable int id,@RequestBody List<Model> models){
        service.updateFavourites(id,models);
    }
}