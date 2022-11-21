package com.Ezenweb.service.index;

import com.Ezenweb.domain.dto.IcategoryDto;
import com.Ezenweb.domain.dto.IndexDto;
import com.Ezenweb.domain.entity.board.BoardEntity;
import com.Ezenweb.domain.entity.index.IndexlistEntity;
import com.Ezenweb.domain.entity.index.IndexlistRepository;
import com.Ezenweb.domain.entity.indexcategory.IndexcategoryEntity;
import com.Ezenweb.domain.entity.indexcategory.IndexcategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class IndexlistService {

    // --------------- 1. 전역변수 선언 ---------------- //
    @Autowired
    private HttpServletRequest request; // 요청객체
    @Autowired
    private IndexlistRepository indexlistRepository;    // 방명록
    @Autowired
    private IndexcategoryRepository indexcategoryRepository;    // 카테고리

    // -------------- 2. 서비스기능 -------------- //
    // 1. 게시물 쓰기
    @Transactional
    public boolean setboard( IndexDto indexDto ){
        // 선택한 카테고리 번호 --> 엔티티 검색
        Optional<IndexcategoryEntity> optional = indexcategoryRepository.findById( indexDto.getIno() );
        if( !optional.isPresent() ){ return false; }
        IndexcategoryEntity indexcategoryEntity = optional.get();
        //
        IndexlistEntity indexlistEntity = indexlistRepository.save( indexDto.toEntity() );
        if( indexlistEntity.getIno() !=0 ){
            // 카테고리 <--> 게시물 연관관계 대입
            indexlistEntity.setIndexcategoryEntity( indexcategoryEntity );
            indexcategoryEntity.getIndexlistEntityList().add( indexlistEntity );
            return true;    // 생성된 엔티티에서 게시물번호가 0이 아니면 성공
        }
        else{ return false; } // 0이면 엔티티 생성 실패
    }

    // 2. 게시물 목록 조회
    @Transactional
    public List<IndexDto> boardlist( int icno ){
        List<IndexlistEntity> elist = null;
        // 카테고리 번호가 0이면 전체보기
        if( icno == 0 ){  elist = indexlistRepository.findAll(); }
        else{   // 선택된 카테고리 번호가 0이 아니면 선택된 카테고리별 보기
            IndexcategoryEntity icEntity = indexcategoryRepository.findById( icno ).get();
            elist = icEntity.getIndexlistEntityList();
        }

        // 2. 컨트롤에게 전달 --> 형변환 [ entity --> dto ]
        List<IndexDto> dlist = new ArrayList<>();
        // 3. 변환
        for( IndexlistEntity entity : elist ){ dlist.add( entity.toDto()); }
        // 4. 변환된 리스트 dlist 반환
        return dlist;
    }

    // 3. 게시물 개별조회
    @Transactional
    public IndexDto getboard( int ino ){
        // 1. 입력받은 게시물번호로 엔티티 검색
        Optional<IndexlistEntity> optional = indexlistRepository.findById( ino );
        // 2. Optional 안에 내용물 확인
        if( optional.isPresent() ){
            // 3. 엔티티 꺼내기
            IndexlistEntity indexlistEntity = optional.get();
            return indexlistEntity.toDto(); // 4. 형변환
        }else{
            return null;    // 4. 없으면 null
        }
    }

    // 4. 카테고리 등록
    public boolean setbcategory( IcategoryDto dto ){
        IndexcategoryEntity ice = indexcategoryRepository.save( dto.toEntity() );
        if( ice.getIcno() != 0 ){ return true; }
        else{ return false; }
    }

    // 5. 모든 카테고리 출력
    public List<IcategoryDto> icategorylist(){
        List<IndexcategoryEntity> entityList = indexcategoryRepository.findAll();
        List<IcategoryDto> dtolist = new ArrayList<>();
        entityList.forEach( e -> dtolist.add( e.toDto()) );
        return dtolist;
    }


} // class end
