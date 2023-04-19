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

import com.semillero2023.practica5.entity.Clientes;

import com.semillero2023.practica5.dto.ClientesDto;


@CrossOrigin
@RestController
@RequestMapping("/clientes")
public interface ClientesServiceInt {
	
	@GetMapping("/")
	public String test();
	
	@GetMapping("/verTodos")
	public List<Clientes> verTodos();
	
	@PostMapping("/mantenimiento-clientes")
	public ResponseEntity<List<Clientes>> mantenimientoClientes(@RequestBody ClientesDto clientedto);
	
	@PostMapping("/crearCliente")
	public Clientes addCliente(@RequestBody ClientesDto clientedto);
	
	@PutMapping("/modificarCliente")
	public Clientes modificarCliente(@RequestBody ClientesDto clientedto);
	
	@GetMapping("/verTodos2")
	public ResponseEntity<Page<Clientes>> verTodos2(
			@RequestParam(name="page") Integer page,
			@RequestParam(name="size") Integer size);

}
