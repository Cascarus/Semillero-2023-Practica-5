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

import com.semillero2023.practica5.dto.SiniestrosDto;
import com.semillero2023.practica5.entity.Siniestros;

@CrossOrigin
@RestController
@RequestMapping("/siniestros")
public interface SiniestrosServicesInt {
	
	@GetMapping("/")
	public String test();
	
	@GetMapping("/verTodos")
	public List<Siniestros> verTodos();
	
	@PostMapping("/crearSiniestros")
	public Siniestros addSiniestros(@RequestBody SiniestrosDto siniestrosDto);
	
	@PutMapping("/modificarSiniestros")
	public Siniestros modificarSiniestros(@RequestBody SiniestrosDto siniestrosDto);
	
	@GetMapping("/verTodos2")
	public ResponseEntity<Page<Siniestros>> verTodos2(
			@RequestParam(name="page") Integer page,
			@RequestParam(name="size") Integer size);

}
