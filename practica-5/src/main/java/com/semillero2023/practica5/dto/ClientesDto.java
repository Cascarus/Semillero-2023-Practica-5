package com.semillero2023.practica5.dto;


import java.math.BigDecimal;
import java.util.Date;

import lombok.Data;

@Data
public class ClientesDto {
	
    private BigDecimal id;
    
    private String nombre;
    
    private String apellido;
    
    private String nit;
    
    private String dpi;
    
    private Character estado;
    
    private String grabacionUsuario;
    
    private Date grabacionFecha;
    
    private String modificacionUsuario;
    
    private Date modificacionFecha;
    
}
