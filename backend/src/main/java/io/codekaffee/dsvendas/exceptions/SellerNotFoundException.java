package io.codekaffee.dsvendas.exceptions;

public class SellerNotFoundException extends RuntimeException {

    public SellerNotFoundException() {
        super("Erro: Vendedor não encontrado");
    }

    public SellerNotFoundException(String message) {
        super(message);
    }

    public SellerNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
    
}
