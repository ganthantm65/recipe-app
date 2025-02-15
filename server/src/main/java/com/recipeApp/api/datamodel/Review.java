package com.recipeApp.api.datamodel;

public class Review {
    private String userName;
    private String review;

    public Review() {
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    @Override
    public String toString() {
        return "Review{" +
                "userName='" + userName + '\'' +
                ", review='" + review + '\'' +
                '}';
    }
}
