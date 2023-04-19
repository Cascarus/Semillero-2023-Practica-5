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

import com.semillero2023.practica5.dto.SegurosDto;
import com.semillero2023.practica5.entity.Seguros;
import com.semillero2023.practica5.repository.SegurosRepository;
import com.semillero2023.practica5.wsint.SegurosServicesInt;

@Component
public class SegurosService implements SegurosServicesInt{
	
	private ModelMapper modelMapper = new ModelMapper();
	
	@Autowired
	SegurosRepository segurosRepository;

	@Override
	public String test() {
		return "Todo bien todo correcto desde seguros";
	}

	@Override
	public List<Seguros> verTodos() {
		return segurosRepository.findAll();
	}

	@Override
	public Seguros addCliente(SegurosDto segurosDto) {
		Date date = new Date();
		segurosDto.setGrabacionFecha(date);
		segurosDto.setModificacionFecha(date);
		
		segurosDto.setEstado('a');
		
		Seguros nuevo = modelMapper.map(segurosDto, Seguros.class);
		
		return segurosRepository.save(nuevo);
	}

	@Override
	public Seguros modificarCliente(SegurosDto segurosDto) {
		Date date = new Date();
		segurosDto.setModificacionFecha(date);
		
		Seguros nuevo = modelMapper.map(segurosDto, Seguros.class);
		
		return segurosRepository.save(nuevo);
	}

	@Override
	public ResponseEntity<Page<Seguros>> verTodos2(Integer page, Integer size) {
		Pageable paging = PageRequest.of(page, size);
		return new ResponseEntity<>(segurosRepository.findAllByOrderById(paging), HttpStatus.OK);
	}

}
