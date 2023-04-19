package com.semillero2023.practica5.entity;

import java.io.Serializable;
import java.math.BigInteger;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.Data;

@Embeddable
@Data
public class CertificadoCoberturaPK implements Serializable{

	private static final long serialVersionUID = -2666532414428433306L;
	
	@Basic(optional = false)
    @Column(name = "CERTIFICADO_ID")
    private BigInteger certificadoId;
    @Basic(optional = false)
    @Column(name = "COBERTURA_ID")
    private BigInteger coberturaId;

}
