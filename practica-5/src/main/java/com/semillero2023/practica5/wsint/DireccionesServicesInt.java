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

import com.semillero2023.practica5.dto.DireccionesDto;
import com.semillero2023.practica5.entity.Direcciones;

@CrossOrigin
@RestController
@RequestMapping("/direcciones")
public interface DireccionesServicesInt {
	
	@GetMapping("/")
	public String test();
	
	@GetMapping("/verTodos")
	public List<Direcciones> verTodos();
	
	@PostMapping("/crearDirecciones")
	public Direcciones addDirecciones(@RequestBody DireccionesDto siniestrosDto);
	
	@PutMapping("/modificarDirecciones")
	public Direcciones modificarDirecciones(@RequestBody DireccionesDto siniestrosDto);
	
	@GetMapping("/verTodos2")
	public ResponseEntity<Page<Direcciones>> verTodos2(
			@RequestParam(name="page") Integer page,
			@RequestParam(name="size") Integer size);

}
