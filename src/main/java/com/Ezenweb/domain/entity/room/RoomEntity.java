package com.Ezenweb.domain.entity.room;

import com.Ezenweb.domain.entity.member.MemberEntity;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity // 해당연결된 DB의 테이블과 매핑[연결]
@Table(name="room") // db에서 사용될 테이블 이름
@NoArgsConstructor @AllArgsConstructor
@Getter @Setter @ToString @Builder
public class RoomEntity {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private int rno;
    private String rtitle;
    private int rprice;
    private String rtrans;
    private String rname;
    private String rlat;
    private String rlng;

    @ManyToOne
    @JoinColumn(name = "mno")
    @ToString.Exclude
    private MemberEntity memberEntity;

    @OneToMany( mappedBy = "roomEntity")
    @Builder.Default
    @ToString.Exclude
    private List<RoomImgEntity> roomImgEntityList = new ArrayList<>();

}