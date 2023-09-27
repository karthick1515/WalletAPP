package com.transaction.service.repositorytest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;
import org.springframework.test.context.junit4.SpringRunner;

import com.transaction.service.model.BankAccount;
import com.transaction.service.repository.BankAccountRepository;

@RunWith(SpringRunner.class)
@SpringJUnitConfig
public class BankAccountRepositoryTest {

    @Mock
    private BankAccountRepository bankAccountRepository;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testFindByAccountNumber() {
        String accountNumber = "1234567890";
        BankAccount bankAccount = new BankAccount();
        when(bankAccountRepository.findByAccountNumber(accountNumber)).thenReturn(Optional.of(bankAccount));

        Optional<BankAccount> foundBankAccount = bankAccountRepository.findByAccountNumber(accountNumber);
        assertEquals(true, foundBankAccount.isPresent());
        assertEquals(bankAccount, foundBankAccount.get());
    }
}
