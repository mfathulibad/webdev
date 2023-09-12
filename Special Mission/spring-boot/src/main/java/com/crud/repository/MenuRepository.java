package com.crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.crud.model.Menu;

public interface MenuRepository extends JpaRepository<Menu, String> {
	@Query("SELECT m FROM Menu m WHERE m.id = :id")
    Menu getMenuById(@Param("id") String id_product);
}
