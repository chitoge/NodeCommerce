package com.tungnt.seproject.controllers;

import com.tungnt.seproject.models.Person;
import com.tungnt.seproject.models.ProductInCart;
import com.tungnt.seproject.repositories.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by kimla on 11/23/2016.
 */
@RestController
@RequestMapping(value = "person")
public class PersonController {
    @Autowired
    PersonRepository repository;
    //add a person
    @RequestMapping(method = RequestMethod.POST)
    public Person addPerson(@RequestBody Person temp){
        return repository.save(temp);
    }

    //add product to person
    @RequestMapping(method = RequestMethod.POST, params = {"personId", "productId", "numberProduct"})
    public ResponseEntity<Person> setProductToCart(@RequestParam("personId")String personId, @RequestParam("productId") String productId
                                                    , @RequestParam("numberProduct") Integer numberProduct){
        Person person = repository.findOne(personId);
        if(person == null){
            return new ResponseEntity<Person>(HttpStatus.NOT_FOUND);
        } else {
            ProductInCart temp = new ProductInCart(productId, numberProduct);
            person.getCart().add(temp);
            repository.save(person);
            return new ResponseEntity<Person>(person, HttpStatus.OK);
        }
    }

    //delete the product in cart
    @RequestMapping(method = RequestMethod.DELETE, params = {"personId", "productId"})
    public ResponseEntity<Person> deleteProductInCart(@RequestParam("personId")String personId, @RequestParam("productId") String productId){
        Person person = repository.findOne(personId);
        if(person == null){
            return new ResponseEntity<Person>(HttpStatus.NOT_FOUND);
        } else {
            Boolean cartContainProductOrNot = false;
            for (ProductInCart temp:
                 person.getCart()) {
                if(temp.getProductId().equals(productId)){
                    cartContainProductOrNot =true;
                    //remove the product in cart
                    person.getCart().remove(temp);
                    break;
                }
            }
            if(!cartContainProductOrNot){
                return new ResponseEntity<Person>(HttpStatus.NOT_FOUND);
            }
            repository.save(person);
            return new ResponseEntity<Person>(person, HttpStatus.OK);
        }
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Person> getAllPerson(){
        return repository.findAll();
    }
}
