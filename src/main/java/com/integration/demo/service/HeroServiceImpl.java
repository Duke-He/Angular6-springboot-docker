package com.integration.demo.service;

import java.util.List;

import com.integration.demo.model.Hero;
import com.integration.demo.repository.HeroRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("HeroService")
public class HeroServiceImpl implements HeroService{

    @Autowired
    private HeroRepository heroRepository;

    @Override
    public List<Hero> getHeros() {
        return heroRepository.findAll();
    }
}