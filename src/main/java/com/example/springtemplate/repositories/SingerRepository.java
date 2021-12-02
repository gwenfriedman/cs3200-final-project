package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Singer;
import org.springframework.data.repository.CrudRepository;

public interface SingerRepository
        extends CrudRepository<Singer, Integer> {
}