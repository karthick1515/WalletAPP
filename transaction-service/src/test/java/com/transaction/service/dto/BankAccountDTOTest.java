package com.transaction.service.dto;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringJUnitConfig
public class BankAccountDTOTest {

    private BankAccountDTO bankAccountDTO;

    @BeforeEach
    void setUp() {
        bankAccountDTO = new BankAccountDTO();
    }

    @Test
    public void testGettersAndSetters() {
        bankAccountDTO.setAccountHolderName("Karthick");
        bankAccountDTO.setMobileNumber("1234567890");
        bankAccountDTO.setAccountType("Savings");
        bankAccountDTO.setAccountNumber("12345678901234");
        bankAccountDTO.setIfsccode("ABCD1234567");
        bankAccountDTO.setAtmCardNumber("9876543210");
        bankAccountDTO.setBankName("My Bank");
        bankAccountDTO.setAtmPin(1234);

        assertEquals("Karthick", bankAccountDTO.getAccountHolderName());
        assertEquals("1234567890", bankAccountDTO.getMobileNumber());
        assertEquals("Savings", bankAccountDTO.getAccountType());
        assertEquals("12345678901234", bankAccountDTO.getAccountNumber());
        assertEquals("ABCD1234567", bankAccountDTO.getIfsccode());
        assertEquals("9876543210", bankAccountDTO.getAtmCardNumber());
        assertEquals("My Bank", bankAccountDTO.getBankName());
        assertEquals(1234, bankAccountDTO.getAtmPin());
    }

}
