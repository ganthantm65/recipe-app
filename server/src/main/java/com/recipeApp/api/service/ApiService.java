package com.recipeApp.api.service;

import com.recipeApp.api.datamodel.UsersModel;
import com.recipeApp.api.repository.ApiRepository;
import com.recipeApp.api.datamodel.Model;
import com.recipeApp.api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class ApiService {
    @Autowired
    ApiRepository apiRepository;

    @Autowired
    UserRepository userRepository;

    public List<Model> getAllData(){
        List<Model> data = apiRepository.findAll();
        System.out.println("Database records: " + data.toString());
        return data;
    }


    public void addData(Model data) {
        apiRepository.save(data);

    }

    public List<Model> getCuisine(String cuisine){
        return apiRepository.getCuisine(cuisine);
    }

    public UsersModel findUser(UsersModel userDetails){
        return userRepository.findUser(userDetails.getUser_name(),userDetails.getPassword());
    }

    public void createUser(UsersModel userDetails){
        userRepository.save(userDetails);
    }
}
