package com.semillero2023.practica5.ws;

import java.util.Date;
import java.util.List;

import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.semillero2023.practica5.dto.ClientesDto;
import com.semillero2023.practica5.entity.Clientes;
import com.semillero2023.practica5.repository.ClientesRepository;
import com.semillero2023.practica5.wsint.ClientesServiceInt;

@Component
public class ClientesService implements ClientesServiceInt {
	
	private static final Log LOG = LogFactory.getLog(Clientes.class);
	private ModelMapper modelMapper = new ModelMapper();
	
	@Autowired
	ClientesRepository clientesRepository;
	
	@Override
	public String test() {
		return "Todo bien todo correcto desde clientes";
	}

	@Override
	public List<Clientes> verTodos() {
		return clientesRepository.findAll();
	}

	@Override
	public ResponseEntity<List<Clientes>> mantenimientoClientes(ClientesDto clientedto) {
		
		if(clientedto.getNombre() == null) {
			clientedto.setNombre("");
		}else {
			clientedto.setNombre("%" + clientedto.getNombre() + "%");
		}
		
		if(clientedto.getNit() == null) {
			clientedto.setNit("");
		}
		
		if(clientedto.getDpi() == null) {
			clientedto.setDpi("");
		}
		
		LOG.info(String.format("nombre: %s   nit: %s     dpi: %s", clientedto.getNombre().toLowerCase(), clientedto.getNit(), clientedto.getDpi()));
		
		return new ResponseEntity<>(clientesRepository.findByNameOrNitOrDpi(clientedto.getNombre().toLowerCase(), clientedto.getNit(), clientedto.getDpi()), HttpStatus.OK);
	}

	@Override
	public Clientes addCliente(ClientesDto cliente) {
		Date date = new Date();
		cliente.setGrabacionFecha(date);
		cliente.setModificacionFecha(date);
		
		cliente.setEstado('a');
		
		Clientes nuevo = modelMapper.map(cliente, Clientes.class);
		return clientesRepository.save(nuevo);
	}

	@Override
	public Clientes modificarCliente(ClientesDto clientedto) {
		Date date = new Date();
		clientedto.setModificacionFecha(date);
		
		Clientes nuevo = modelMapper.map(clientedto, Clientes.class);
		return clientesRepository.save(nuevo);
	}
	
	@Override
	public ResponseEntity<Page<Clientes>> verTodos2(Integer page, Integer size) {
		Pageable paging = PageRequest.of(page, size);
		return new ResponseEntity<>(clientesRepository.findAllByOrderById(paging), HttpStatus.OK);
	}

}
