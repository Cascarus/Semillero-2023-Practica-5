package com.semillero2023.practica5.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.Data;

@Entity
@Table(name = "COBERTURAS")
@DynamicUpdate @DynamicInsert
@Data
public class Coberturas implements Serializable{
	
	private static final long serialVersionUID = -6429196919331878014L;
	
	@Id
    @Basic(optional = false)
    @Column(name = "ID")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_COBERTURAS")
	@SequenceGenerator(sequenceName = "seq_COBERTURAS", allocationSize = 1, name = "seq_COBERTURAS")
    private BigDecimal id;
    @Column(name = "DESCRIPCION")
    private String descripcion;
    @Column(name = "COSTO")
    private BigDecimal costo;
    @Column(name = "SUMA_ASEGURADA")
    private BigDecimal sumaAsegurada;
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
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "coberturas", fetch = FetchType.LAZY)
    private List<CertificadoCobertura> certificadoCoberturaList;
}
