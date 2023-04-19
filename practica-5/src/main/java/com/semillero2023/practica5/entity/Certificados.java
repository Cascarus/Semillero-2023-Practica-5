package com.semillero2023.practica5.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.math.BigInteger;
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
@Table(name = "CERTIFICADOS")
@DynamicUpdate @DynamicInsert
@Data
public class Certificados implements Serializable {

	private static final long serialVersionUID = 4561914922529735876L;
	
	@Id
    @Basic(optional = false)
    @Column(name = "ID")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_CERTIFICADOS")
	@SequenceGenerator(sequenceName = "seq_CERTIFICADOS", allocationSize = 1, name = "seq_CERTIFICADOS")
    private BigDecimal id;
    @Column(name = "CODIGO_CONTRATANTE")
    private BigInteger codigoContratante;
    @Column(name = "CODIGO_ASEGURADO")
    private BigInteger codigoAsegurado;
    @Column(name = "PRIMA")
    private BigDecimal prima;
    @Column(name = "SUMA_ASEGURADA")
    private BigDecimal sumaAsegurada;
    @Column(name = "FECHA_INICIO")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaInicio;
    @Column(name = "FECHA_FIN")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaFin;
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
    @Column(name = "SEGURO_ID")
    private BigDecimal seguroId;
    @OneToMany(mappedBy = "certificadoId", fetch = FetchType.LAZY)
    private List<Siniestros> siniestrosList;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "certificados", fetch = FetchType.LAZY)
    private List<CertificadoCobertura> certificadoCoberturaList;
	
}
