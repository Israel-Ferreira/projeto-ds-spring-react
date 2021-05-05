package io.codekaffee.dsvendas.controllers.handlers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import io.codekaffee.dsvendas.exceptions.SellerNotFoundException;

@RestControllerAdvice
public class SellerNotFoundExceptionHandler {

    @ResponseStatus(value = HttpStatus.NOT_FOUND)
    @ExceptionHandler(SellerNotFoundException.class)
    public Map<String, Object> handleSellerNotFoundException(SellerNotFoundException e) {
        Map<String, Object> response =  new HashMap<>();

        response.put("Mensagem", e.getLocalizedMessage());
        response.put("Status", HttpStatus.NOT_FOUND.value());

        return response;
    }
}
