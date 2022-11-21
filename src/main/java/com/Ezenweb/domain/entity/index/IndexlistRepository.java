package com.Ezenweb.domain.entity.index;

import com.Ezenweb.domain.entity.indexcategory.IndexcategoryEntity;
import com.Ezenweb.domain.entity.indexcategory.IndexcategoryRepository;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IndexlistRepository extends JpaRepository<IndexlistEntity, Integer> {

} // end
