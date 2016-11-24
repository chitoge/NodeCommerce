package com.tungnt.seproject.models;

/**
 * Created by kimla on 11/23/2016.
 */
public class ProductInCart {
    private String productId;
    private Integer number;

    public void setNumber(Integer number) {
        this.number = number;
    }

    public Integer getNumber() {
        return number;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public String getProductId() {
        return productId;
    }

    public ProductInCart(){}
    public ProductInCart(String productId, Integer numberProduct){
        this.productId = productId;
        this.number = numberProduct;
    }
}
