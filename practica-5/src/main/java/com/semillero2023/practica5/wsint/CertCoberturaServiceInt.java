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

import com.semillero2023.practica5.dto.CertificadoCoberturaDto;
import com.semillero2023.practica5.entity.CertificadoCobertura;

@CrossOrigin
@RestController
@RequestMapping("/certificado-cobertura")
public interface CertCoberturaServiceInt {
	
	@GetMapping("/")
	public String test();
	
	@GetMapping("/verTodos")
	public List<CertificadoCobertura> verTodos();
	
	@PostMapping("/crearCertCoberturas")
	public CertificadoCobertura addCertCoberturas(@RequestBody CertificadoCoberturaDto certificadoCoberturaDto);
	
	@PutMapping("/modificarCertCoberturas")
	public CertificadoCobertura modificarCertCoberturas(@RequestBody CertificadoCoberturaDto certificadoCoberturaDto);
	
	@GetMapping("/verTodos2")
	public ResponseEntity<Page<CertificadoCobertura>> verTodos2(
			@RequestParam(name="page") Integer page,
			@RequestParam(name="size") Integer size);

}
