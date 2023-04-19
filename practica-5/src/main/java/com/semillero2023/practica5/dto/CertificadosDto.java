package com.semillero2023.practica5.dto;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Date;

import lombok.Data;

@Data
public class CertificadosDto {
	
	private BigDecimal id;
	
    private BigInteger codigoContratante;
    
    private BigInteger codigoAsegurado;
    
    private BigDecimal prima;
    
    private BigDecimal sumaAsegurada;

    private Date fechaInicio;

    private Date fechaFin;

    private Character estado;

    private String grabacionUsuario;

    private Date grabacionFecha;
    
    private String modificacionUsuario;

    private Date modificacionFecha;

    private BigDecimal seguroId;

}
