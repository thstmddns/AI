package com.ssafy.arthorizon;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class BackApplication {

	// 여기서 올리면 진짜최종제대로가야함
	public static void main(String[] args) {
		SpringApplication.run(BackApplication.class, args);
	}

}
