package com.transaction.service.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringJUnitConfig
public class WalletAccountTest {

    private WalletAccount walletAccount;

    @BeforeEach
    void setUp() {
        walletAccount = new WalletAccount();
    }

    @Test
    public void testGettersAndSetters() throws ParseException {
        walletAccount.setId(1L);
        walletAccount.setFullName("Karthick");
        walletAccount.setEmailAddress("karthick@example.com");
        walletAccount.setPassword("password123");
        walletAccount.setWalletPin(1234);
        walletAccount.setPhoneNumber("1234567890");
        
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Date dateOfBirth = dateFormat.parse("1990-01-15");
        walletAccount.setDateOfBirth(dateOfBirth);
        
        walletAccount.setAddress("123 Main St");
        walletAccount.setBalance(1000.0);

        assertEquals(1L, walletAccount.getId());
        assertEquals("Karthick", walletAccount.getFullName());
        assertEquals("karthick@example.com", walletAccount.getEmailAddress());
        assertEquals("password123", walletAccount.getPassword());
        assertEquals(1234, walletAccount.getWalletPin());
        assertEquals("1234567890", walletAccount.getPhoneNumber());
        assertEquals(dateOfBirth, walletAccount.getDateOfBirth());
        assertEquals("123 Main St", walletAccount.getAddress());
        assertEquals(1000.0, walletAccount.getBalance(), 0.001);
        assertNull(walletAccount.getTransactions());
    }

    @Test
    public void testTransactionsList() {
        List<Transaction> transactions = new ArrayList<>();
        Transaction transaction1 = new Transaction();
        Transaction transaction2 = new Transaction();
        transactions.add(transaction1);
        transactions.add(transaction2);

        walletAccount.setTransactions(transactions);

        assertNotNull(walletAccount.getTransactions());
        assertEquals(2, walletAccount.getTransactions().size());
    }
}
