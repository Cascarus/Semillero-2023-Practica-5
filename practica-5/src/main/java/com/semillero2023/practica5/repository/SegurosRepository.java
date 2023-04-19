package com.semillero2023.practica5.repository;

import java.io.Serializable;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.semillero2023.practica5.entity.Seguros;

@Repository("SegurosRepository")
public interface SegurosRepository extends JpaRepository<Seguros, Serializable> {
	
	Page<Seguros> findAllByOrderById(Pageable pageable);

}
