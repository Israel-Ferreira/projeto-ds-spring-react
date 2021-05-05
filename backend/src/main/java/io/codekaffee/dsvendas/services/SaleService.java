package io.codekaffee.dsvendas.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.codekaffee.dsvendas.dto.SaleDTO;
import io.codekaffee.dsvendas.repositories.SaleRepository;
import io.codekaffee.dsvendas.repositories.SellerRepository;

@Service
public class SaleService {
    
    @Autowired
    private SaleRepository saleRepository;

    @Autowired
    private SellerRepository sellerRepository;

    @Transactional(readOnly = true)
    public Page<SaleDTO> findAll(Pageable pageable){
        sellerRepository.findAll();
        var results = saleRepository.findAll(pageable);
        return results.map(sale -> new SaleDTO(sale));
    }


    
}
