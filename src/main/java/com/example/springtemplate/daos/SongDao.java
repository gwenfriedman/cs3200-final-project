package com.example.springtemplate.daos;

import com.example.springtemplate.models.Song;
import com.example.springtemplate.repositories.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class SongDao {
    @Autowired
    SongRepository songRepository;

    @PostMapping("/api/songs")
    public Song createSong(@RequestBody Song song) {
        return songRepository.save(song);
    }

    @GetMapping("/api/songs")
    public List<Song> findAllSongs() {
        return (List<Song>) songRepository.findAll();
    }

    @GetMapping("/api/songs/{songId}")
    public Song findSongById(
            @PathVariable("songId") Integer id) {
        return songRepository.findById(id).get();
    }

    @PutMapping("/api/songs/{songId}")
    public Song updateSong(
            @PathVariable("songId") Integer id,
            @RequestBody() Song newSong) {
        Song song = this.findSongById(id);
        song.setTitle(newSong.getTitle());
        song.setNumberOfPlays(newSong.getNumberOfPlays());
        return songRepository.save(song);
    }

    @DeleteMapping("/api/songs/{songId}")
    public void deleteSong(
            @PathVariable("songId") Integer id) {
        songRepository.deleteById(id);
    }
}
