package com.transaction.service.model;
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;
import org.springframework.test.context.junit4.SpringRunner;

import com.transaction.service.repository.BankAccountRepository;

@RunWith(SpringRunner.class)
@SpringJUnitConfig
public class BankAccountTest {

    private BankAccount bankAccount;

    @Mock
    private BankAccountRepository bankAccountRepository;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        bankAccount = new BankAccount();
    }

    @Test
    public void testGettersAndSetters() {
        bankAccount.setId(1L);
        bankAccount.setAccountHolderName("Karthick");
        bankAccount.setMobileNumber("1234567890");
        bankAccount.setAccountType("Savings");
        bankAccount.setAccountNumber("12345678901234");
        bankAccount.setIfsccode("ABCD1234567");
        bankAccount.setAtmCardNumber("9876543210");
        bankAccount.setBankName("Sample Bank");
        bankAccount.setAtmPin(1234);
        bankAccount.setBalance(1000.0);

        assertEquals(1L, bankAccount.getId());
        assertEquals("Karthick", bankAccount.getAccountHolderName());
        assertEquals("1234567890", bankAccount.getMobileNumber());
        assertEquals("Savings", bankAccount.getAccountType());
        assertEquals("12345678901234", bankAccount.getAccountNumber());
        assertEquals("ABCD1234567", bankAccount.getIfsccode());
        assertEquals("9876543210", bankAccount.getAtmCardNumber());
        assertEquals("Sample Bank", bankAccount.getBankName());
        assertEquals(1234, bankAccount.getAtmPin());
        assertEquals(1000.0, bankAccount.getBalance(), 0.001); // Use delta for comparing double values
    }

  

   
}
