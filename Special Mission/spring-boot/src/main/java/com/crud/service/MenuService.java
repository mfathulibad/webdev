package com.crud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crud.model.Menu;
import com.crud.repository.MenuRepository;

@Service
public class MenuService {
	@Autowired
    MenuRepository menuRepository;
	
	//Get all products
	public List<Menu> getAllMenu(){
		return menuRepository.findAll();
	}
	
	//Get product by id
	public Menu getMenuById(String id_product) {
		return menuRepository.getMenuById(id_product);
	}
	
}
