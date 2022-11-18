package com.Ezenweb.domain.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

/*
    p. 242
    AuditingEntityListener : 엔티티 감시[ Auditing ] 정보를 주입하는 JPA 엔티티 리스너 클래스
    @EntityListener : 엔티티 정보를 적용하기 전후로 콜백을 요청할 수 있는 어노테이션
*/

@Getter @Setter // 롬복
@MappedSuperclass   // 상속받을 경우 자식 클래스에게 매핑 정보 전달
@EntityListeners( AuditingEntityListener.class )
public class BaseEntity {

    @CreatedDate    // 데이터의 생성날짜 자동주입 어노테이션
    @Column( updatable = false )    // 수정불가
    private LocalDateTime cdate;

    @LastModifiedDate   // 데이터 수정날짜를 자동주입 어노테이션
    private LocalDateTime udate;


} // class end
