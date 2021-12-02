package com.example.springtemplate.daos;

import com.example.springtemplate.models.Album;
import com.example.springtemplate.repositories.AlbumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class AlbumDao {
    @Autowired
    AlbumRepository albumRepository;

    @PostMapping("/api/albums")
    public Album createAlbum(@RequestBody Album album) {
        return albumRepository.save(album);
    }

    @GetMapping("/api/albums")
    public List<Album> findAllAlbums() {
        return (List<Album>) albumRepository.findAll();
    }

    @GetMapping("/api/albums/{albumId}")
    public Album findAlbumById(
            @PathVariable("albumId") Integer id) {
        return albumRepository.findById(id).get();
    }

    @PutMapping("/api/albums/{albumId}")
    public Album updateAlbum(
            @PathVariable("albumId") Integer id,
            @RequestBody() Album newAlbum) {
        Album album = this.findAlbumById(id);
        album.setTitle(newAlbum.getTitle());
        album.setGenre(newAlbum.getGenre());
        album.setReleaseDate(newAlbum.getReleaseDate());
        album.setSongs(newAlbum.getSongs());

        return albumRepository.save(album);
    }

    @DeleteMapping("/api/albums/{albumId}")
    public void deleteAlbum(
            @PathVariable("albumId") Integer id) {
        albumRepository.deleteById(id);
    }
}
