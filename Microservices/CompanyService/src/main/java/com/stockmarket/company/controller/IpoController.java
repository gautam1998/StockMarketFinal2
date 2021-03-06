package com.stockmarket.company.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import com.stockmarket.company.model.IpoDetail;
import com.stockmarket.company.service.IpoService;
import com.stockmarket.company.shared.IpoRequest;

@RestController
@RequestMapping("/api/ipo")
public class IpoController {

	private IpoService ipoService;

	
	public IpoController(IpoService ipoService) {
		super();
		this.ipoService = ipoService;
	}
	
	@GetMapping("/ipos")
	@LoadBalanced
	public ResponseEntity<Iterable<IpoDetail>> findAllIpos(){
		return ResponseEntity.
				status(HttpStatus.FOUND).
				body(ipoService.findAllIpos());
	}
	
	@GetMapping("/ipos/company_id/{companyId}")
	@LoadBalanced
	public ResponseEntity<Iterable<IpoDetail>> findByCompanyId(@PathVariable Integer companyId){
		return ResponseEntity.
				status(HttpStatus.FOUND).
				body(ipoService.findIpoByCompanyId(companyId));
	}
	
	@GetMapping("/ipos/exchange/{exchange}")
	@LoadBalanced
	public ResponseEntity<Iterable<IpoDetail>> findByExchange(@PathVariable String exchange){
		return ResponseEntity.
				status(HttpStatus.FOUND).
				body(ipoService.findIpoByExchange(exchange));
	}
	
	@PostMapping("/ipos")
	@LoadBalanced
	public ResponseEntity<IpoDetail> addNewIpo(@RequestBody IpoRequest ipoRequest){		
		
		return ResponseEntity.
				status(HttpStatus.CREATED).
				body(ipoService.addIpo(ipoRequest));
	}
}
