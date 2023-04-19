package com.semillero2023.practica5.dto;


import java.math.BigInteger;
import java.util.Date;

import lombok.Data;

@Data
public class CertificadoCoberturaDto {
	
	//private BigInteger certificadoId;
	
	//private BigInteger coberturaId;
	
	private CertCoberturaPkDto certificadoCoberturaPK;

    private Character estado;
    
    private String grabacionUsuario;
    
    private Date grabacionFecha;
    
    private String modificacionUsuario;
    
    private Date modificacionFecha;

}
