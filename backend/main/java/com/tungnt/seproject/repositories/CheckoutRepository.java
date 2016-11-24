package com.tungnt.seproject.repositories;

import com.tungnt.seproject.models.Checkout;
import com.tungnt.seproject.models.Person;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

/**
 * Created by kimla on 11/24/2016.
 */
public interface CheckoutRepository extends MongoRepository<Checkout, String>{
    Checkout findOne(String s);
    Checkout save(Checkout checkout);
    List<Checkout> findAll();
}
