package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name="songs")
public class Song {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private Integer numberOfPlays;

    @ManyToOne
    @JsonIgnore
    private Album album;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getNumberOfPlays() {
        return numberOfPlays;
    }

    public void setNumberOfPlays(Integer plays) {
        this.numberOfPlays = plays;
    }

    public Album getAlbum() {
        return album;
    }

    public void setAlbum(Album album) {
        this.album = album;
    }

    public Song(String title, Integer plays) {
        this.title = title;
        this.numberOfPlays = plays;
    }

    public Song() {}
}