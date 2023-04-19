package com.semillero2023.practica5.repository;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.semillero2023.practica5.entity.Clientes;

@Repository("ClientesRepository")
public interface ClientesRepository extends JpaRepository<Clientes, Serializable>{
	
	@Query(value="SELECT * "
			+ "FROM CLIENTES "
			+ "WHERE LOWER(CONCAT(NOMBRE, CONCAT(' ', APELLIDO))) LIKE ?1 OR NIT = ?2 OR DPI = ?3", nativeQuery = true)
	public List<Clientes> findByNameOrNitOrDpi(String name, String nit, String dpi);
	
	Page<Clientes> findAllByOrderById(Pageable pageable);
}
