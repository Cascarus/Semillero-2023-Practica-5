package com.semillero2023.practica5.ws;

import java.util.Date;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.semillero2023.practica5.dto.CoberturasDto;
import com.semillero2023.practica5.entity.Coberturas;
import com.semillero2023.practica5.repository.CoberturasRepository;
import com.semillero2023.practica5.wsint.CoberturasServicesInt;

@Component
public class CoberturasServices implements CoberturasServicesInt{
	
	private ModelMapper modelMapper = new ModelMapper();
	
	@Autowired
	CoberturasRepository coberturaRepository;

	@Override
	public String test() {
		return "Todo bien todo correcto desde cobertura";
	}

	@Override
	public List<Coberturas> verTodos() {
		return coberturaRepository.findAll();
	}
	
	@Override
	public Coberturas addCoberturas(CoberturasDto coberturasDto) {
		Date date = new Date();
		coberturasDto.setGrabacionFecha(date);
		coberturasDto.setModificacionFecha(date);
		
		coberturasDto.setEstado('a');
		
		Coberturas nuevo = modelMapper.map(coberturasDto, Coberturas.class); 
		
		return coberturaRepository.save(nuevo);
	}

	@Override
	public Coberturas modificarCliente(CoberturasDto coberturasDto) {
		Date date = new Date();
		coberturasDto.setModificacionFecha(date);
		
		Coberturas nuevo = modelMapper.map(coberturasDto, Coberturas.class); 
		
		return coberturaRepository.save(nuevo);
	}

	@Override
	public ResponseEntity<Page<Coberturas>> verTodos2(Integer page, Integer size) {
		Pageable paging = PageRequest.of(page, size);
		return new ResponseEntity<>(coberturaRepository.findAllByOrderById(paging), HttpStatus.OK);
	}

}
