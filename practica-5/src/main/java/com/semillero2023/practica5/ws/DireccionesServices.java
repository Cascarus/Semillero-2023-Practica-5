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

import com.semillero2023.practica5.dto.DireccionesDto;
import com.semillero2023.practica5.entity.Direcciones;
import com.semillero2023.practica5.repository.DireccionesRepository;
import com.semillero2023.practica5.wsint.DireccionesServicesInt;

@Component
public class DireccionesServices implements DireccionesServicesInt{
	
	private ModelMapper modelMapper = new ModelMapper();
	
	@Autowired
	DireccionesRepository direccionesRepository;

	@Override
	public String test() {
		return "Todo bien todo correcto desde siniestros";
	}

	@Override
	public List<Direcciones> verTodos() {
		return direccionesRepository.findAll();
	}

	@Override
	public Direcciones addDirecciones(DireccionesDto siniestrosDto) {
		Date date = new Date();
		siniestrosDto.setGrabacionFecha(date);
		siniestrosDto.setModificacionFecha(date);
		
		siniestrosDto.setEstado('a');
		
		Direcciones nuevo = modelMapper.map(siniestrosDto, Direcciones.class);	
		return direccionesRepository.save(nuevo);
	}

	@Override
	public Direcciones modificarDirecciones(DireccionesDto siniestrosDto) {
		Date date = new Date();
		siniestrosDto.setModificacionFecha(date);
		
		Direcciones nuevo = modelMapper.map(siniestrosDto, Direcciones.class);	
		return direccionesRepository.save(nuevo);
	}

	@Override
	public ResponseEntity<Page<Direcciones>> verTodos2(Integer page, Integer size) {
		Pageable paging = PageRequest.of(page, size);
		return new ResponseEntity<>(direccionesRepository.findAllByOrderById(paging), HttpStatus.OK);
	}

}
