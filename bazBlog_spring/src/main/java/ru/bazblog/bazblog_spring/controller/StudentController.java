package ru.bazblog.bazblog_spring.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentController {

    @RequestMapping(value = "info", method = RequestMethod.GET)
    public String info(){
        return "The App is up...";
    }
}
