package com.semillero2023.practica5.ws;

import java.util.Date;
import java.util.List;

//import org.apache.juli.logging.Log;
//import org.apache.juli.logging.LogFactory;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.semillero2023.practica5.dto.CertificadosDto;
import com.semillero2023.practica5.entity.Certificados;
import com.semillero2023.practica5.repository.CertificadosRepository;
import com.semillero2023.practica5.wsint.CertificadosServiceInt;

@Component
public class CertificadoService implements CertificadosServiceInt{
	
	//private static final Log LOG = LogFactory.getLog(Certificados.class);
	private ModelMapper modelMapper = new ModelMapper();
	
	@Autowired
	CertificadosRepository certificadosRepository;
	

	@Override
	public String test() {
		return "Todo bien todo correcto desde Certificados";
	}

	@Override
	public List<Certificados> verTodos() {
		return certificadosRepository.findAll();
	}

	@Override
	public Certificados addCliente(CertificadosDto certificadoDto) {
		Date date = new Date();
		certificadoDto.setGrabacionFecha(date);
		certificadoDto.setModificacionFecha(date);
		
		certificadoDto.setEstado('a');
		
		Certificados nuevo = modelMapper.map(certificadoDto, Certificados.class);
		
		return certificadosRepository.save(nuevo);
	}

	@Override
	public Certificados modificarCliente(CertificadosDto certificadoDto) {
		Date date = new Date();
		certificadoDto.setModificacionFecha(date);
		
		Certificados nuevo = modelMapper.map(certificadoDto, Certificados.class);
		
		return certificadosRepository.save(nuevo);
	}

	@Override
	public ResponseEntity<Page<Certificados>> verTodos2(Integer page, Integer size) {
		Pageable paging = PageRequest.of(page, size);
		return new ResponseEntity<>(certificadosRepository.findAllByOrderById(paging), HttpStatus.OK);
	}

}
