package com.semillero2023.practica5.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Date;
import java.util.List;
import javax.persistence.Basic;
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
@Table(name = "SEGUROS")
@DynamicUpdate @DynamicInsert
@Data
public class Seguros implements Serializable{

	private static final long serialVersionUID = -6693134245770718121L;
	
	@Id
    @Basic(optional = false)
    @Column(name = "ID")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_SEGUROS")
	@SequenceGenerator(sequenceName = "seq_SEGUROS", allocationSize = 1, name = "seq_SEGUROS")
    private BigDecimal id;
    @Column(name = "TIPO")
    private String tipo;
    @Column(name = "FECHA_INICIO")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaInicio;
    @Column(name = "FECHA_FIN")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaFin;
    @Column(name = "CODIGO_CONTRATANTE")
    private BigInteger codigoContratante;
    @Column(name = "PRIMA_TOTAL")
    private BigDecimal primaTotal;
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
    @OneToMany(mappedBy = "seguroId", fetch = FetchType.LAZY)
    private List<Certificados> certificadosList;
    @OneToMany(mappedBy = "seguroId", fetch = FetchType.LAZY)
    private List<Facturas> facturasList;

}
