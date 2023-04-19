package com.semillero2023.practica5.dto;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Date;

import lombok.Data;

@Data
public class SegurosDto {
	
	private BigDecimal id;
	
    private String tipo;

    private Date fechaInicio;

    private Date fechaFin;

    private BigInteger codigoContratante;

    private BigDecimal primaTotal;

    private BigDecimal sumaAsegurada;

    private Character estado;

    private String grabacionUsuario;

    private Date grabacionFecha;

    private String modificacionUsuario;

    private Date modificacionFecha;



}
