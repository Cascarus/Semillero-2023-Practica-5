package com.semillero2023.practica5.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.SequenceGenerator;
import lombok.Data;

@Entity
@Table(name = "CLIENTES")
@DynamicUpdate @DynamicInsert
@Data
public class Clientes implements Serializable{
	
	private static final long serialVersionUID = 5468450459076157924L;
	
	@Id
    @Basic(optional = false)
    @Column(name = "ID")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_clientes")
	@SequenceGenerator(sequenceName = "seq_clientes", allocationSize = 1, name = "seq_clientes")
    private BigDecimal id;
    @Column(name = "NOMBRE")
    private String nombre;
    @Column(name = "APELLIDO")
    private String apellido;
    @Column(name = "NIT")
    private String nit;
    @Column(name = "DPI")
    private String dpi;
    @Column(name = "ESTADO")
    private Character estado = 'a';
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
    @OneToMany(mappedBy = "clienteId", fetch = FetchType.LAZY)
    private List<Direcciones> direccionesList;
    @OneToMany(mappedBy = "clienteId", fetch = FetchType.LAZY)
    private List<Facturas> facturasList;
	
}
