package com.example.demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
	

	 @RequestMapping("/") // /hello
	    public String home(){
	        return "<h1>Hello HOME2</h1>";
	        
	 }

}
