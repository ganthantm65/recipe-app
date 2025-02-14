package com.recipeApp.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class ApiService {
    @Autowired
    ApiRepository apiRepository;

    public List<Model> getAllData(){
        List<Model> data = apiRepository.findAll();
        System.out.println("Database records: " + data.toString());
        return data;
    }


    public void addData(Model data){
        apiRepository.save(data);

    }

    public void updateData(int id,Model data){
        apiRepository.findById(id).map(recipe -> {
            recipe.setRecipe_name(data.getRecipe_name());
            recipe.setChef_name(data.getChef_name());
            recipe.setDescription(data.getDescription());
            recipe.setIngredients(data.getIngredients());
            return apiRepository.save(recipe);
        }).orElseThrow(() -> new RuntimeException("Recipe not found with id: " + id));
    }

    public void  deleteData(int id){
        apiRepository.deleteById(id);
    }
}
