package com.example.springtemplate.daos;

import com.example.springtemplate.models.Singer;
import com.example.springtemplate.models.Album;
import com.example.springtemplate.repositories.SingerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class SingerDao {
    @Autowired
    SingerRepository singerRepository;

    @PostMapping("/api/singers")
    public Singer createSinger(@RequestBody Singer singer) {
        return singerRepository.save(singer);
    }

    @GetMapping("/api/singers")
    public List<Singer> findAllSingers() {
        return (List<Singer>) singerRepository.findAll();
    }

    @GetMapping("/api/singers/{singerId}")
    public Singer findSingerById(
            @PathVariable("singerId") Integer id) {
        return singerRepository.findById(id).get();
    }

    @PutMapping("/api/singers/{singerId}")
    public Singer updateSinger(
            @PathVariable("singerId") Integer id,
            @RequestBody() Singer newSinger) {
        Singer singer = this.findSingerById(id);
        singer.setFirstName(newSinger.getFirstName());
        singer.setLastName(newSinger.getLastName());
        singer.setUsername(newSinger.getUsername());
        singer.setPassword(newSinger.getPassword());
        singer.setEmail(newSinger.getEmail());
        singer.setDateOfBirth(newSinger.getDateOfBirth());
        singer.setAlbums(newSinger.getAlbums());

        return singerRepository.save(singer);
    }

    @DeleteMapping("/api/singers/{singerId}")
    public void deleteSinger(
            @PathVariable("singerId") Integer id) {
        singerRepository.deleteById(id);
    }

    @GetMapping("/api/singers/{singerId}/albums")
    public List<Album> findAllAlbums( @PathVariable("singerId") Integer id) {
//        return (List<Album>) findSingerById(id).getAlbums();

        return singerRepository.findById(id).get()
                .getAlbums();
    }
}