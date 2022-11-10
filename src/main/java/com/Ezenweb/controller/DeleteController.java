package com.Ezenweb.controller;

import org.springframework.web.bind.annotation.*;

// p.75
@RestController //
@RequestMapping("/api/v1/delete-api")
public class DeleteController {

    // 1. [ p.76 ]
    @DeleteMapping("/{variable}")
    public String DeleteVariable(@PathVariable("variable") String variable) {
        return variable;
    }

    // 2. [ p.76 ]
    @DeleteMapping("request1")
    public String getRequestParam1(@RequestParam("variable1") String variable) {
        return variable;
    }

} // class end
