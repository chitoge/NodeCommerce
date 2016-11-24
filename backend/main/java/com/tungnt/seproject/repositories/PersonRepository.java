package com.tungnt.seproject.repositories;

import com.tungnt.seproject.models.Person;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

/**
 * Created by kimla on 11/23/2016.
 */
public interface PersonRepository extends MongoRepository<Person, String>{
    public Person findOne(String id);
    public List<Person> findAll();
    public Person save(Person person);
    public void delete(Person person);
}
