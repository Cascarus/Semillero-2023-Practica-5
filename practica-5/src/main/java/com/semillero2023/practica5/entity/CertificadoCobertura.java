package com.semillero2023.practica5.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.Data;

@Entity
@Table(name = "CERTIFICADO_COBERTURA")
@DynamicUpdate @DynamicInsert
@Data
public class CertificadoCobertura implements Serializable{
	
	private static final long serialVersionUID = 5679389034307386528L;
	
	@EmbeddedId
    protected CertificadoCoberturaPK certificadoCoberturaPK;
    @Column(name = "ESTADO")
    private Character estado;
    @Column(name = "GRABACION_USUARIO")
    private String grabacionUsuario;
    @Column(name = "GRABACION_FECHA")
    @Temporal(TemporalType.TIMESTAMP)
    private Date grabacionFecha;
    @Column(name = "MODIFICACION_USUARIO")
    private String modificacionUsuario;
    @Column(name = "MODIFICACION_FECHA")
    @Temporal(TemporalType.TIMESTAMP)
    private Date modificacionFecha;
    @JoinColumn(name = "CERTIFICADO_ID", referencedColumnName = "ID", insertable = false, updatable = false)
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    private Certificados certificados;
    @JoinColumn(name = "COBERTURA_ID", referencedColumnName = "ID", insertable = false, updatable = false)
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    private Coberturas coberturas;

}
