package com.Ezenweb.domain.dto;

import com.Ezenweb.domain.entity.room.RoomEntity;
import com.Ezenweb.domain.entity.room.RoomImgEntity;
import com.Ezenweb.domain.entity.room.RoomImgRepository;
import com.Ezenweb.domain.entity.room.RoomRepository;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter @ToString @Builder
public class RoomDto {

    private int rno;
    private String rtitle;
    private int rprice;
    private String rtrans;
    private List<MultipartFile> rimg;   // 저장용 이미지 인터페이스  // 첨부파일 여러개를 위한 List 자료형 사용

    private String rname;
    private String rlat;
    private String rlng;

    private String memail;  // 작성자
    private List<String> getrimg;   // 출력용 이미지

//    @Autowired
//    private RoomImgRepository roomImgRepository;

    public RoomEntity toEntity(){
        return RoomEntity.builder()
                .rtitle( this.rtitle)
                .rprice( this.rprice )
                .rtrans( this.rtrans )
                .rname( this.rname )
                .rlat( this.rlat )
                .rlng(this.rlng )
                .build();
    }

} // end
