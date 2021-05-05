package io.codekaffee.dsvendas.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.codekaffee.dsvendas.dto.SellerDTO;
import io.codekaffee.dsvendas.entities.Seller;
import io.codekaffee.dsvendas.exceptions.SellerNotFoundException;
import io.codekaffee.dsvendas.repositories.SellerRepository;

@Service
public class SellerService {

    @Autowired
    private SellerRepository sellerRepository;

    public List<SellerDTO> findAll() {
        var sellers = sellerRepository.findAll();

        return sellers.stream().map(seller -> new SellerDTO(seller)).collect(Collectors.toList());
    }

    public SellerDTO findById(Long id) {
        Seller seller = sellerRepository.findById(id).orElseThrow(SellerNotFoundException::new);

        return new SellerDTO(seller);
    }
}
