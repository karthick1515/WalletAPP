package com.transaction.service.model;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.time.LocalDate;
import java.time.LocalTime;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringJUnitConfig
public class TransactionTest {

    private Transaction transaction;

    @BeforeEach
    void setUp() {
        transaction = new Transaction();
    }

    @Test
    public void testGettersAndSetters() {
        transaction.setTransactionid(1L);
        transaction.setTransactionType("Deposit");
        transaction.setTransactionDate(LocalDate.of(2023, 9, 25));
        transaction.setTransactionTime(LocalTime.of(15, 30));
        transaction.setSenderorReceiverid(2L);
        transaction.setAmount(500.0);

        assertEquals(1L, transaction.getTransactionid());
        assertEquals("Deposit", transaction.getTransactionType());
        assertEquals(LocalDate.of(2023, 9, 25), transaction.getTransactionDate());
        assertEquals(LocalTime.of(15, 30), transaction.getTransactionTime());
        assertEquals(2L, transaction.getSenderorReceiverid());
        assertEquals(500.0, transaction.getAmount(), 0.001); 

      
}
}