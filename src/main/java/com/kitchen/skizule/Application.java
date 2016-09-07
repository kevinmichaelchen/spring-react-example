package com.kitchen.skizule;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class Application extends SpringBootServletInitializer
{
	@Override
	protected SpringApplicationBuilder configure( SpringApplicationBuilder builder )
	{
		return builder.sources( Application.class );
	}

	@RequestMapping( value = "/test", method = RequestMethod.GET )
	public String test()
	{
		return "TEst";
	}

	public static void main( String[] args )
	{
		SpringApplication.run( Application.class, args );
	}
}