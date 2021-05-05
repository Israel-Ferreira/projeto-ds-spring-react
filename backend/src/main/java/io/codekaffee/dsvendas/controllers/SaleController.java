package io.codekaffee.dsvendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.codekaffee.dsvendas.dto.SaleDTO;
import io.codekaffee.dsvendas.dto.SaleSuccessDTO;
import io.codekaffee.dsvendas.dto.SaleSumDTO;
import io.codekaffee.dsvendas.services.SaleService;

@RestController
@RequestMapping("/sales")
public class SaleController {

    @Autowired
    private SaleService saleService;

    @GetMapping
    public ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable){
        Page<SaleDTO> page = saleService.findAll(pageable);
        return ResponseEntity.ok(page);
    }


    @GetMapping("/amount-by-seller")
    public ResponseEntity<List<SaleSumDTO>> amountBySeller(){
        List<SaleSumDTO> list =  saleService.amountGroupedBySeller();
        return ResponseEntity.ok(list);
    }


    @GetMapping("/success-by-seller")
    public ResponseEntity<List<SaleSuccessDTO>> successRateBySeller(){
        List<SaleSuccessDTO> list = saleService.successRateBySeller();
        return ResponseEntity.ok(list);
    }

}
