package com.tungnt.seproject.controllers;

import com.tungnt.seproject.models.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.tungnt.seproject.repositories.ProductRepository;

import javax.validation.Valid;
import java.util.List;

/**
 * Created by kimla on 11/15/2016.
 */
@RestController
@RequestMapping(value = "product")
public class ProductController {

    @Autowired
    ProductRepository repository;
    
    @RequestMapping(method = RequestMethod.GET)
    public List<Product> getAllProduct(){
        return repository.findAll();
    }
    
    @RequestMapping(method = RequestMethod.POST)
    public Product postProduct(@RequestBody Product temp){
        return repository.save(temp);
    }
    
    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    public ResponseEntity<Product> getOneProduct(@PathVariable("id")String id){
        Product product = repository.findOne(id);
        if(product == null) {
            return new ResponseEntity<Product>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<Product>(product, HttpStatus.OK);
        }
    }

    @RequestMapping(value="{id}", method=RequestMethod.PUT)
    public ResponseEntity<Product> updateTodo(@Valid @RequestBody Product product, @PathVariable("id") String id) {
        Product tempProduct = repository.findOne(id);
        if(tempProduct == null) {
            return new ResponseEntity<Product>(HttpStatus.NOT_FOUND);
        }
        tempProduct.setTitle(product.getTitle());
        tempProduct.setDescription(product.getDescription());
        tempProduct.setCategories(product.getCategories());
        tempProduct.setPricing(product.getPricing());
        tempProduct.setQuantity(product.getQuantity());
        Product updatedTodo = repository.save(tempProduct);
        return new ResponseEntity<Product>(updatedTodo, HttpStatus.OK);
    }

    //search request
    //find by categories
    @RequestMapping(value = "find", params = "categories")
    public List<Product> getProductByCategory(@RequestParam("categories")String category){
        return repository.findByCategoriesContaining(category);
    }

    //find by pricing from to
    @RequestMapping(value = "find", params = {"from", "to"})
    public List<Product> getProductByPricing(@RequestParam("from") Double from, @RequestParam("to") Double to){
        return repository.findByPricingBetween(from, to);
    }

    //find by name
    @RequestMapping(value = "find", params = "name")
    public List<Product> getProductByName(@RequestParam("name") String name){
        return repository.findByTitleContaining(name);
    }

}
