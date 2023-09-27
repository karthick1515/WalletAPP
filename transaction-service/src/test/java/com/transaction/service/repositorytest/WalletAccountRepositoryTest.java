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

import com.transaction.service.model.WalletAccount;
import com.transaction.service.repository.WalletAccountRepository;

@RunWith(SpringRunner.class)
@SpringJUnitConfig
public class WalletAccountRepositoryTest {

    @Mock
    private WalletAccountRepository walletAccountRepository;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testFindById() {
        Long walletAccountId = 1L;
        WalletAccount walletAccount = new WalletAccount();
        when(walletAccountRepository.findById(walletAccountId)).thenReturn(Optional.of(walletAccount));

        Optional<WalletAccount> foundWalletAccount = walletAccountRepository.findById(walletAccountId);
        assertEquals(true, foundWalletAccount.isPresent());
        assertEquals(walletAccount, foundWalletAccount.get());
    }
}
