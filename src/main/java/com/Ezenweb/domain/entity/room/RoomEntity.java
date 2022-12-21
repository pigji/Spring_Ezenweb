package com.Ezenweb.domain.entity.room;

import com.Ezenweb.domain.dto.RoomDto;
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

    // 연관관계1[ 회원 <---> 방 등록 ]
    @ManyToOne
    @JoinColumn(name = "mno")
    @ToString.Exclude
    private MemberEntity memberEntity;  // 작성자가 엔티티

    // 연관관계2[ 방 등록[작성자] <--> 이미지 등록 ]
    @OneToMany( mappedBy = "roomEntity")
    @Builder.Default
    @ToString.Exclude
    private List<RoomImgEntity> roomImgEntityList = new ArrayList<>();

    public RoomDto toDto() {

        // 이미지엔티티에서 이미지 이름만 추출
        List<String> list = new ArrayList<>();
        roomImgEntityList.forEach( (img) -> {
            list.add( img.getRimg() );
        });

        return RoomDto.builder()
                .rno( this.rno )
                .rtitle( this.rtitle )
                .rprice( this.rprice )
                .rtrans( this.rtrans )
                .rname( this.rname )
                .rlat( this.rlat )
                .rlng( this.rlng )
                .memail( this.getMemberEntity().getMemail() )   // memberEntity --> 작성자
                .getrimg( list )    // 이미지 엔티티 --> 이미지 이름들
                .build();
    }
} // end