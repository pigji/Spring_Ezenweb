package com.Ezenweb.domain.entity.board;

import org.springframework.data.jpa.repository.JpaRepository;

                                        // < 엔티티 클래스명, 해당 엔티티 아이디 자료형 >
public interface BoardRepository extends JpaRepository< BoardEntity, Integer> {


} // end
