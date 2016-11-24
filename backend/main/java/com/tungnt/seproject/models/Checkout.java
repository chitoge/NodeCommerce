package com.tungnt.seproject.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Created by kimla on 11/15/2016.
 */
@Document(collection = "checkout")
public class Checkout {
    @Id
    private String id;
    private String customerId;
    private String paymentMethod;
    private String ship_address;

    public void setId(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public void setCustomer(String customerId) {
        this.customerId = customerId;
    }

    public String getCustomer() {
        return customerId;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public String getShip_address() {
        return ship_address;
    }

    public void setShip_address(String ship_address) {
        this.ship_address = ship_address;
    }

    public Checkout(){}

    public Checkout(String customerId, String paymentMethod, String ship_address){
        this.customerId = customerId;
        this.paymentMethod = paymentMethod;
        this.ship_address = ship_address;
    }
}
