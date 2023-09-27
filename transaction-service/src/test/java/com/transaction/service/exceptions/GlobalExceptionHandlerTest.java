package com.transaction.service.exceptions;

import com.transaction.service.exception.AuthenticationFailedException;
import com.transaction.service.exception.GlobalExceptionHandler;
import com.transaction.service.exception.InvalidAmountException;
import com.transaction.service.exception.InvalidAccountIdException;
import com.transaction.service.exception.NotFoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

public class GlobalExceptionHandlerTest {

    private GlobalExceptionHandler globalExceptionHandler;

    @Mock
    private AuthenticationFailedException authenticationFailedException;

    @Mock
    private InvalidAmountException invalidAmountException;

    @Mock
    private InvalidAccountIdException invalidAccountIdException;

    @Mock
    private NotFoundException notFoundException;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        globalExceptionHandler = new GlobalExceptionHandler();
    }

    @Test
    public void testHandleAuthenticationFailedException() {
        when(authenticationFailedException.getMessage()).thenReturn("Authentication failed");
        ResponseEntity<String> response = globalExceptionHandler.handleException(authenticationFailedException);
        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals("Authentication failed", response.getBody());
    }

    @Test
    public void testHandleInvalidAmountException() {
        when(invalidAmountException.getMessage()).thenReturn("Invalid amount");
        ResponseEntity<String> response = globalExceptionHandler.handleException(invalidAmountException);
        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals("Invalid amount", response.getBody());
    }

    @Test
    public void testHandleInvalidAccountIdException() {
        when(invalidAccountIdException.getMessage()).thenReturn("Invalid account ID");
        ResponseEntity<String> response = globalExceptionHandler.handleException(invalidAccountIdException);
        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals("Invalid account ID", response.getBody());
    }

    @Test
    public void testHandleNotFoundException() {
        when(notFoundException.getMessage()).thenReturn("Resource not found");
        ResponseEntity<String> response = globalExceptionHandler.handleException(notFoundException);
        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals("Resource not found", response.getBody());
    }
}

