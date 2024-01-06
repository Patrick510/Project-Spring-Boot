package com.project.crud.javabeans;

import jakarta.persistence.*;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Entity
@Data
public class Programa {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)  
	private long idPrograma;
    private String nomePrograma;
    private LocalDate dataPrograma;
    
    @ElementCollection
    private List<String> nomeAutor;
    
    @ManyToMany
    @JoinTable(
        name = "programa_linguagem", 
        joinColumns = @JoinColumn(name = "idPrograma"),
        inverseJoinColumns = @JoinColumn(name = "linguagem_id"))
    private List<Linguagem> idLinguagem;
  

    public long getIdPrograma() {
    	System.out.println("Id do Programa recebido: "+idPrograma);
		return idPrograma;
	}

	public void setIdPrograma(long idPrograma) {
		this.idPrograma = idPrograma;
	}

	public List<Linguagem> getIdLinguagem() {
		System.out.println("Id da(s) linguagens recebidas: "+idLinguagem);
		return idLinguagem;
	}

	public void setIdLinguagem(List<Linguagem> linguagens) {
		this.idLinguagem = linguagens;
	}

	public List<String> getNomeAutor() {
		System.out.println("Nome do(s) autores recebidos: "+nomeAutor);
    	return nomeAutor;
    }
    
    public void setNomeAutor(List<String> nomeAutor) {
    	this.nomeAutor = nomeAutor;
    }
    
    public LocalDate getDataPrograma() {
    	System.out.println("Data do Programa recebido: "+dataPrograma);
    	return dataPrograma;
    }
    
    public void setDataPrograma(LocalDate dataPrograma) {
    	this.dataPrograma = dataPrograma;
    }
    
	public String getNomePrograma() {
		System.out.println("Nome do Programa recebido: "+nomePrograma);
		return nomePrograma;
	}
	public void setNomePrograma(String nomePrograma) {
		this.nomePrograma = nomePrograma;
	}
	
	
    public String getNomesLinguagens() {
        if (idLinguagem != null && !idLinguagem.isEmpty()) {
            return idLinguagem.stream()
                    .map(Linguagem::getNomeLinguagem)
                    .collect(Collectors.joining(", "));
        }
        return "";
    }
	
    @Override
    public String toString() {
        return "Programa{idPrograma=" + idPrograma +
                ", nomePrograma='" + nomePrograma + '\'' +
                ", dataPrograma=" + dataPrograma +
                ", nomeAutor=" + nomeAutor +
                ", idLinguagem=" + idLinguagem +
                '}';
    }
}