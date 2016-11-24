package com.tungnt.seproject.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * Created by kimla on 11/15/2016.
 */
@Document(collection = "person")
public class Person {
    @Id
    private String id;
    private String name;
    private String address;

    @Field(value = "yearOfBirth")
    private Integer yearOfBirth;

    @Field(value = "cart")
    private ArrayList<ProductInCart> cart;

    public void setId(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getAddress() {
        return address;
    }

    public void setCart(ArrayList<ProductInCart> cart) {
        this.cart = cart;
    }

    public ArrayList<ProductInCart> getCart() {
        return cart;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setYearOfBirth(Integer yearOfBirth) {
        this.yearOfBirth = yearOfBirth;
    }

    public Integer getYearOfBirth() {
        return yearOfBirth;
    }

    public Person(){}

    public Person(String name, String address, Integer yearOfBirth, ArrayList<ProductInCart> cart){
        this.name = name;
        this.address = address;
        this.yearOfBirth = yearOfBirth;
        this.cart = cart;
    }
}
