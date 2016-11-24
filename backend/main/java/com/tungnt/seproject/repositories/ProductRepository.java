package com.tungnt.seproject.repositories;

import com.tungnt.seproject.models.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

/**
 * Created by kimla on 11/15/2016.
 */
public interface ProductRepository extends MongoRepository<Product, String> {
    public List<Product> findAll();
    public Product findOne(String id);
    public Product save(Product product);
    public void delete(Product product);
    public List<Product> findByCategoriesContaining(String category);
    public List<Product> findByPricingBetween(Double from, Double to);
    public List<Product> findByTitleContaining(String name);
}
