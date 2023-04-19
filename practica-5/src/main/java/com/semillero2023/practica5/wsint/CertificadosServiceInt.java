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

import com.semillero2023.practica5.dto.CertificadosDto;
import com.semillero2023.practica5.entity.Certificados;

@CrossOrigin
@RestController
@RequestMapping("/certificados")
public interface CertificadosServiceInt {
	
	@GetMapping("/")
	public String test();
	
	@GetMapping("/verTodos")
	public List<Certificados> verTodos();
	
	@PostMapping("/crearCertificados")
	public Certificados addCliente(@RequestBody CertificadosDto certificadodto);
	
	@PutMapping("/modificarCertificados")
	public Certificados modificarCliente(@RequestBody CertificadosDto certificadodto);
	
	@GetMapping("/verTodos2")
	public ResponseEntity<Page<Certificados>> verTodos2(
			@RequestParam(name="page") Integer page,
			@RequestParam(name="size") Integer size);

}
