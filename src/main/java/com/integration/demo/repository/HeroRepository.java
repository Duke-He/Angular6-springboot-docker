package com.integration.demo.repository;

import java.util.List;

import com.integration.demo.model.Hero;

import org.springframework.data.jpa.repository.JpaRepository;

public interface HeroRepository extends JpaRepository<Hero, Long> {
    List<Hero> findAll();
}