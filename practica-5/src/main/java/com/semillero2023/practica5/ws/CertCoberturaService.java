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

import com.semillero2023.practica5.dto.CertificadoCoberturaDto;
import com.semillero2023.practica5.entity.CertificadoCobertura;
import com.semillero2023.practica5.entity.CertificadoCoberturaPK;
import com.semillero2023.practica5.repository.CertificadoCoberturaRepository;
import com.semillero2023.practica5.wsint.CertCoberturaServiceInt;

@Component
public class CertCoberturaService implements CertCoberturaServiceInt{
	
	private ModelMapper modelMapper = new ModelMapper();
	
	@Autowired
	CertificadoCoberturaRepository certCoberturaRepository;

	@Override
	public String test() {
		return "Todo bien todo correcto desde cobertura ciniestros";
	}

	@Override
	public List<CertificadoCobertura> verTodos() {
		return certCoberturaRepository.findAll();
	}

	@Override
	public CertificadoCobertura addCertCoberturas(CertificadoCoberturaDto certificadoCoberturaDto) {
		Date date = new Date();
		certificadoCoberturaDto.setGrabacionFecha(date);
		certificadoCoberturaDto.setModificacionFecha(date);
		
		certificadoCoberturaDto.setEstado('a');
		
		CertificadoCoberturaPK temp = modelMapper.map(certificadoCoberturaDto.getCertificadoCoberturaPK(), CertificadoCoberturaPK.class);
		CertificadoCobertura nuevo = modelMapper.map(certificadoCoberturaDto, CertificadoCobertura.class);
		nuevo.setCertificadoCoberturaPK(temp);
		
		return certCoberturaRepository.save(nuevo);
	}

	@Override
	public CertificadoCobertura modificarCertCoberturas(CertificadoCoberturaDto certificadoCoberturaDto) {
		Date date = new Date();
		certificadoCoberturaDto.setModificacionFecha(date);
		
		CertificadoCobertura nuevo = modelMapper.map(certificadoCoberturaDto, CertificadoCobertura.class);	
		return certCoberturaRepository.save(nuevo);
	}

	@Override
	public ResponseEntity<Page<CertificadoCobertura>> verTodos2(Integer page, Integer size) {
		Pageable paging = PageRequest.of(page, size);
		return new ResponseEntity<>(certCoberturaRepository.findAll(paging), HttpStatus.OK);
	}

}
