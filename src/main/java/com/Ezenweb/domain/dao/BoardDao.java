package com.Ezenweb.domain.dao;

import com.Ezenweb.domain.dto.BoardDto;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

public class BoardDao {

    private Connection con;
    private PreparedStatement ps;
    private ResultSet rs;
    public BoardDao() {
        try{
            con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/springweb",
                    "root",
                    "1234");
        }catch (Exception e){ System.out.println("연동실패..");}
    }

    // 1. 게시물 등록 SQL
    public boolean setboard( BoardDto boardDto ){
        String sql = "insert into board( btitle , bcontent ) values( ?, ? )";
        try {
            ps = con.prepareStatement(sql);
            ps.setString(1, boardDto.getBtitle());
            ps.setString(2, boardDto.getBcontent());
            ps.executeUpdate(); return true;
        }catch (Exception e){ System.out.println("게시물등록오류 : "+e ); } return false;
    }

    // 2. 게시물 목록 보기
    public ArrayList<BoardDto> getboards() {
        ArrayList<BoardDto> boards = new ArrayList<>();
        String sql = "select * from board";
        try {
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();

            while (rs.next()) {
                boards.add( // 리스트 추가
                        BoardDto  // DTO 생성 --> 빌더 패턴
                                .builder()    // 빌더패턴 start
                                .btitle(rs.getString(1))
                                .bcontent(rs.getString(2))
                                .build() // 딜더 패턴 end
                );
            }

        } catch (Exception e) {
            System.out.println("게시물목록오류 : " + e);
        }
        return boards;
    }

} // class end
