package com.tungnt.seproject.controllers;

import com.tungnt.seproject.models.Checkout;
import com.tungnt.seproject.models.Person;
import com.tungnt.seproject.repositories.CheckoutRepository;
import com.tungnt.seproject.repositories.PersonRepository;
import com.tungnt.seproject.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by kimla on 11/24/2016.
 */
@RestController
@RequestMapping(value = "checkout")
public class CheckoutController {
    @Autowired
    CheckoutRepository repository;
    PersonRepository personRepository;
    @RequestMapping(method = RequestMethod.GET)
    public List<Checkout> getCheckout(){
        return repository.findAll();
    }

    @RequestMapping(params = {"id"}, method = RequestMethod.GET)
    public Checkout getCheckoutById(@RequestParam("id") String id){
        return repository.findOne(id);
    }
    //post checkout

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Checkout> addCheckout(@RequestBody Checkout tempCheckout){
        if(personRepository.findOne(tempCheckout.getCustomer()) == null){
            return new ResponseEntity<Checkout>(HttpStatus.NOT_FOUND);
        }else{
            repository.save(tempCheckout);
            return new ResponseEntity<Checkout>(tempCheckout, HttpStatus.OK);
        }
    }
}
