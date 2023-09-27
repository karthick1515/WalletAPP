package com.transaction.service.dto;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;
import org.springframework.test.context.junit4.SpringRunner;

import com.transaction.service.model.Transaction;

@RunWith(SpringRunner.class)
@SpringJUnitConfig
public class AddMoneyRequestTest {

    private AddMoneyRequest addMoneyRequest;

    @BeforeEach
    void setUp() {
        addMoneyRequest = new AddMoneyRequest();
    }

    @Test
    public void testGettersAndSetters() {
        BankAccountDTO bankAccountDTO = new BankAccountDTO();
        Transaction transaction = new Transaction();

        addMoneyRequest.setBankAccount(bankAccountDTO);
        addMoneyRequest.setTransaction(transaction);

        assertNotNull(addMoneyRequest.getBankAccount());
        assertNotNull(addMoneyRequest.getTransaction());
        assertEquals(bankAccountDTO, addMoneyRequest.getBankAccount());
        assertEquals(transaction, addMoneyRequest.getTransaction());
    }
}
