package com.kitchen.skizule;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@SpringBootApplication
public class Application {
	@RequestMapping(value = "/test", method = RequestMethod.GET)
	public ResponseEntity index() {
		return ResponseEntity.ok( "Test" );
	}

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}