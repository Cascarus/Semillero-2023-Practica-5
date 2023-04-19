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

import com.semillero2023.practica5.dto.SiniestrosDto;
import com.semillero2023.practica5.entity.Siniestros;
import com.semillero2023.practica5.repository.SiniestrosRepository;
import com.semillero2023.practica5.wsint.SiniestrosServicesInt;

@Component
public class SiniestrosServices implements SiniestrosServicesInt {
	
	private ModelMapper modelMapper = new ModelMapper();
	
	@Autowired
	SiniestrosRepository siniestrosRepository;

	@Override
	public String test() {
		return "Todo bien todo correcto desde siniestros";
	}

	@Override
	public List<Siniestros> verTodos() {
		return siniestrosRepository.findAll();
	}
	
	@Override
	public Siniestros addSiniestros(SiniestrosDto siniestrosDto) {
		Date date = new Date();
		siniestrosDto.setGrabacionFecha(date);
		siniestrosDto.setModificacionFecha(date);
		
		siniestrosDto.setEstado('a');
		
		Siniestros nuevo = modelMapper.map(siniestrosDto, Siniestros.class);	
		return siniestrosRepository.save(nuevo);
	}
	
	@Override
	public Siniestros modificarSiniestros(SiniestrosDto siniestrosDto) {
		Date date = new Date();
		siniestrosDto.setModificacionFecha(date);
		
		Siniestros nuevo = modelMapper.map(siniestrosDto, Siniestros.class);
		
		return siniestrosRepository.save(nuevo);
	}

	@Override
	public ResponseEntity<Page<Siniestros>> verTodos2(Integer page, Integer size) {
		Pageable paging = PageRequest.of(page, size);
		return new ResponseEntity<>(siniestrosRepository.findAllByOrderById(paging), HttpStatus.OK);
	}

}
