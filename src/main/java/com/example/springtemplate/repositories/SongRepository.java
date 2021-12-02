package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Song;
import org.springframework.data.repository.CrudRepository;

public interface SongRepository
        extends CrudRepository<Song, Integer> {
}
