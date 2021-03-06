package io.codekaffee.dsvendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.codekaffee.dsvendas.dto.SellerDTO;
import io.codekaffee.dsvendas.services.SellerService;

@RestController
@RequestMapping("/sellers")
public class SellerController {
    
    @Autowired
    private SellerService service;


    @GetMapping
    public ResponseEntity<List<SellerDTO>> findAll(){
        List<SellerDTO> sellers = service.findAll();
        return ResponseEntity.ok(sellers);
    }

    @GetMapping("/{id}")
    public ResponseEntity<SellerDTO> findById(@PathVariable("id") Long id){
        SellerDTO seller = service.findById(id);
        return ResponseEntity.ok(seller);
    }
}
