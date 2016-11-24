package com.tungnt.seproject.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Created by kimla on 11/15/2016.
 */
@Document(collection = "products")
public class Product {
    @Id
    private String id;
    private Integer quantity;
    private String title;
    private String description;
    private String categories;
    private Long pricing;

    public void setId(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public void setCategories(String categories) {
        this.categories = categories;
    }

    public String getCategories() {
        return categories;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTitle() {
        return title;
    }

    public void setPricing(Long pricing) {
        this.pricing = pricing;
    }

    public Long getPricing() {
        return pricing;
    }

    public Product(){}

    public Product(String id, String title, String description, String categories, Integer quantity, Long pricing){
        this.id = id;
        this.title = title;
        this.description = description;
        this.categories = categories;
        this.quantity = quantity;
        this.pricing = pricing;
    }
    @Override
    public String toString() {
        return String.format(
                "Product[id= %s, title=%s, description=%s, quantity=%d, categories=%s]"
                ,id, title, description, quantity, categories
        );
    }
}
