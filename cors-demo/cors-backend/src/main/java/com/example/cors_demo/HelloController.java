package com.example.cors_demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:5173")  //This is fixing CORS issue at the controller level
public class HelloController {

    @GetMapping("/api/message")
    public Map<String, String> getMessage() {
        return Map.of(
                "message", "Hello from Spring Boot!",
                "status", "success"
        );
    }
}