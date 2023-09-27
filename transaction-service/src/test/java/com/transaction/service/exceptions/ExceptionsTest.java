package com.transaction.service.exceptions;

import com.transaction.service.exception.AuthenticationFailedException;
import com.transaction.service.exception.InvalidAccountIdException;
import com.transaction.service.exception.InvalidAmountException;
import com.transaction.service.exception.NotFoundException;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.assertEquals;

@RunWith(SpringRunner.class)
@SpringJUnitConfig
public class ExceptionsTest {

    @Test
    public void testAuthenticationFailedException() {
        AuthenticationFailedException exception = new AuthenticationFailedException("Authentication failed");
        assertEquals("Authentication failed", exception.getMessage());
    }

    @Test
    public void testInvalidAccountIdException() {
        InvalidAccountIdException exception = new InvalidAccountIdException("Invalid account ID");
        assertEquals("Invalid account ID", exception.getMessage());
    }

    @Test
    public void testInvalidAmountException() {
        InvalidAmountException exception = new InvalidAmountException("Invalid amount");
        assertEquals("Invalid amount", exception.getMessage());
    }

    @Test
    public void testNotFoundException() {
        NotFoundException exception = new NotFoundException("Resource not found");
        assertEquals("Resource not found", exception.getMessage());
    }
}
