package net.kzn.shoppingbackend.dao;

import java.util.List;

import net.kzn.shoppingbackend.dto.Category;

/**
 * @author Akshay Tandon
 *
 */
public interface CategoryDAO {
	public List<Category> list();
	public Category get(int id);
}
