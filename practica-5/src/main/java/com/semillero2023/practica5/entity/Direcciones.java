package com.semillero2023.practica5.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.Data;


@Entity
@Table(name = "DIRECCIONES")
@DynamicUpdate @DynamicInsert
@Data
public class Direcciones implements Serializable{
	
	private static final long serialVersionUID = -430720933357568466L;
	
	@Id
    @Basic(optional = false)
    @Column(name = "ID")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_DIRECCIONES")
	@SequenceGenerator(sequenceName = "seq_DIRECCIONES", allocationSize = 1, name = "seq_DIRECCIONES")
    private BigDecimal id;
    @Column(name = "DIRECCION")
    private String direccion;
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
    @Column(name = "CLIENTE_ID")
    private BigDecimal clienteId;

}
