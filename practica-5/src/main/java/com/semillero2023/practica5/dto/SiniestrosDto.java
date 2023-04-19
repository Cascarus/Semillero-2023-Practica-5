package com.semillero2023.practica5.dto;

import java.math.BigDecimal;
import java.util.Date;

import lombok.Data;

@Data
public class SiniestrosDto {
	
	private BigDecimal id;
	
    private Date fechaOcurrencia;
    
    private String solucion;
    
    private Character estado;
    
    private String grabacionUsuario;
    
    private Date grabacionFecha;
    
    private String modificacionUsuario;
    
    private Date modificacionFecha;
    
    private BigDecimal certificadoId;
	
}
