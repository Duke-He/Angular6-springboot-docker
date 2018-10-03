package com.integration.demo.controller;

import java.util.List;

import com.integration.demo.model.Hero;
import com.integration.demo.service.HeroService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HeroController {
    @Autowired
    HeroService heroService;

    @RequestMapping("/api/heroes")
    public List<Hero> heros() {
        return heroService.getHeros();
    }
}