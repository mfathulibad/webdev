package com.crud.model;
import javax.persistence.Entity;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Menu")
public class Menu {
	@Id
    @Column
    private String id;
	@Column
    private String code;
    @Column
    private String name;
    @Column
    private int price;
    @Column
    private boolean is_ready;
    @Column
    private String image;
    @Column
    private String description;
    
    public Menu(){
    	
    }

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public boolean isIs_ready() {
		return is_ready;
	}

	public void setIs_ready(boolean is_ready) {
		this.is_ready = is_ready;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	
    
    
}
