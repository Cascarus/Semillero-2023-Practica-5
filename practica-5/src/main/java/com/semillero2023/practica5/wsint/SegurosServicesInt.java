package com.semillero2023.practica5.wsint;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.semillero2023.practica5.dto.SegurosDto;
import com.semillero2023.practica5.entity.Seguros;

@CrossOrigin
@RestController
@RequestMapping("/seguros")
public interface SegurosServicesInt {
	
	@GetMapping("/")
	public String test();
	
	@GetMapping("/verTodos")
	public List<Seguros> verTodos();
	
	@PostMapping("/crearSeguros")
	public Seguros addCliente(@RequestBody SegurosDto segurosDto);
	
	@PutMapping("/modificarSeguros")
	public Seguros modificarCliente(@RequestBody SegurosDto segurosDto);
	
	@GetMapping("/verTodos2")
	public ResponseEntity<Page<Seguros>> verTodos2(
			@RequestParam(name="page") Integer page,
			@RequestParam(name="size") Integer size);

}
