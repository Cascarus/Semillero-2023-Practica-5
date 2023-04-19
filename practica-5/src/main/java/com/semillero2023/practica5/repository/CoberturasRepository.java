package com.semillero2023.practica5.repository;

import java.io.Serializable;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.semillero2023.practica5.entity.Coberturas;

@Repository("CoberturasRepository")
public interface CoberturasRepository extends JpaRepository<Coberturas, Serializable>{
	
	Page<Coberturas> findAllByOrderById(Pageable pageable);
}
