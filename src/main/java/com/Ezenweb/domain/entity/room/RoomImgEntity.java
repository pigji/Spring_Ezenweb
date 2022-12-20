package com.Ezenweb.domain.entity.room;

import com.Ezenweb.domain.entity.member.MemberEntity;
import lombok.*;

import javax.persistence.*;

@Entity // 해당 연결된 DB의 테이블과 매핑[연결]
@Table( name="roomgimg")  // DB에서 사용될 테이블명
@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter @ToString @Builder
public class RoomImgEntity {

    @Id
    @GeneratedValue( strategy =  GenerationType.IDENTITY )
    private int rimgno;     // 이미지 번호
    private String rimg;    // 이미지

    // 연관관계
    @ManyToOne
    @JoinColumn(name = "rno")
    @ToString.Exclude
    private RoomEntity roomEntity;

} // end
