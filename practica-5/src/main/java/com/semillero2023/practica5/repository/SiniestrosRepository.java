package com.semillero2023.practica5.repository;

import java.io.Serializable;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.semillero2023.practica5.entity.Siniestros;

@Repository("SiniestrosRepository")
public interface SiniestrosRepository extends JpaRepository<Siniestros, Serializable>{
	
	Page<Siniestros> findAllByOrderById(Pageable pageable);

}
