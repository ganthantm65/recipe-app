package com.recipeApp.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class Controller {

    @Autowired
    ApiService service;
    @GetMapping("/recipe")
    public List<Model> getRequest(){
        return service.getAllData();
    }

    @PostMapping("/recipe")
    public void addRequest(@RequestBody Model model){
        service.addData(model);
    }

    @PutMapping("/recipe/{id}")
    public void updateRequest(@PathVariable int id,@RequestBody Model model){
        service.updateData(id,model);
    }

    @DeleteMapping("/recipe/{id}")
    public void deleteRequest(@PathVariable int id){
        service.deleteData(id);
    }
}
