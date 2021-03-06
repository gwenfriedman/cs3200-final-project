package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;
import java.sql.Date;

@Entity
@Table(name="albums")
public class Album {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private Date releaseDate;

    @Column(columnDefinition = "ENUM('INDIE`, 'COUNTRY`, 'ROCK`, 'RAP`, 'CLASSICAL`, 'POP`)")
    @Enumerated(EnumType.STRING)
    private Genre genre;

    @ManyToOne
    private Singer singer;

    @OneToMany(mappedBy = "album")
    @JsonIgnore
    private List<Song> songs;

    public List<Song> getSongs() {
        return songs;
    }

    public void setSongs(List<Song> songs) {
        this.songs = songs;
    }

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

    public Date getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(Date date) {
        this.releaseDate = date;
    }

    public Genre getGenre() {
        return genre;
    }

    public void setGenre(Genre genre) {
        this.genre = genre;
    }

    public Singer getSinger() {
        return this.singer;
    }

    public void setSinger(Singer singer) {
        this.singer = singer;
    }

    public Album(String title, Date releaseDate, Genre genre, Singer singer, List<Song> songs) {
        this.title = title;
        this.releaseDate = releaseDate;
        this.genre = genre;
        this.singer = singer;
        this.songs = songs;
    }

    public Album() {}
}