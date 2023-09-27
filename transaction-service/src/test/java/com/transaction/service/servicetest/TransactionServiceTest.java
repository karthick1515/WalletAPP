package com.transaction.service.servicetest;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;
import org.springframework.test.context.junit4.SpringRunner;

import com.transaction.service.dto.AddMoneyRequest;
import com.transaction.service.dto.BankAccountDTO;
import com.transaction.service.exception.AuthenticationFailedException;
import com.transaction.service.exception.InvalidAccountIdException;
import com.transaction.service.exception.InvalidAmountException;
import com.transaction.service.exception.NotFoundException;
import com.transaction.service.model.BankAccount;
import com.transaction.service.model.Transaction;
import com.transaction.service.model.WalletAccount;
import com.transaction.service.repository.BankAccountRepository;
import com.transaction.service.repository.TransactionRepository;
import com.transaction.service.repository.WalletAccountRepository;
import com.transaction.service.service.TransactionServiceImpl;

@RunWith(SpringRunner.class)
@SpringJUnitConfig
public class TransactionServiceTest {

    @Mock
    private TransactionRepository transactionRepository;

    @Mock
    private WalletAccountRepository walletAccountRepository;

    @Mock
    private BankAccountRepository bankAccountRepository;

    @InjectMocks
    private TransactionServiceImpl transactionService;

    private Transaction transaction;
    private WalletAccount senderWalletAccount;
    private WalletAccount receiverWalletAccount;
    private BankAccount bankAccount;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);

       
        senderWalletAccount = new WalletAccount();
        senderWalletAccount.setId(1L);
        senderWalletAccount.setBalance(1000.0);
        senderWalletAccount.setWalletPin(1234);

        receiverWalletAccount = new WalletAccount();
        receiverWalletAccount.setId(2L);
        receiverWalletAccount.setBalance(500.0);

        bankAccount = new BankAccount();
        bankAccount.setAccountNumber("123456789");
        bankAccount.setIfsccode("ABCD1234");
        bankAccount.setAtmCardNumber("567890123");
        bankAccount.setAtmPin(4321);
        bankAccount.setBalance(1500.0);

        transaction = new Transaction();
        transaction.setAmount(200.0);
        transaction.setSenderorReceiverid(2L);
    }


    @Test
    public void testSendingTransaction_Success() {
        when(walletAccountRepository.findById(1L)).thenReturn(Optional.of(senderWalletAccount));
        when(walletAccountRepository.findById(2L)).thenReturn(Optional.of(receiverWalletAccount));
        when(transactionRepository.save(any(Transaction.class))).thenReturn(transaction);

        assertDoesNotThrow(() -> {
            Transaction result = transactionService.sendingtransaction(transaction, 1L, 1234);
            assertEquals(transaction.getAmount(), result.getAmount());
        });
    }


    @Test
    public void testFindAllTransactionByWalletAccountId_Success() throws NotFoundException {
        List<Transaction> transactions = new ArrayList<>();
        transactions.add(transaction);

        when(transactionRepository.findAllByWalletAccountId(1L)).thenReturn(transactions);

        List<Transaction> result = transactionService.findAllTransactionByWalletAccountId(1L);
        assertEquals(transactions, result);
    }

    @Test
    public void testSendingTransaction_InvalidAccountId() {
        when(walletAccountRepository.findById(1L)).thenReturn(Optional.empty());

        assertThrows(InvalidAccountIdException.class, () -> {
            transactionService.sendingtransaction(transaction, 1L, 1234);
        });
    }
    @Test
    public void testUpdateTransaction_Success() throws NotFoundException {
 Transaction existingTransaction = new Transaction();
        existingTransaction.setTransactionid(1L);
        existingTransaction.setAmount(200.0);
when(transactionRepository.findById(1L)).thenReturn(Optional.of(existingTransaction));
 Transaction updatedTransaction = new Transaction();
        updatedTransaction.setTransactionid(1L);
        updatedTransaction.setAmount(300.0);
    when(transactionRepository.save(updatedTransaction)).thenReturn(updatedTransaction);

        Transaction result = transactionService.updateTransaction(updatedTransaction);
    assertEquals(updatedTransaction.getAmount(), result.getAmount());
    }

    @Test
    public void testReceivingTransaction_Success() {
        when(walletAccountRepository.findById(2L)).thenReturn(Optional.of(receiverWalletAccount));
        when(transactionRepository.save(any(Transaction.class))).thenReturn(transaction);

        assertDoesNotThrow(() -> {
            Transaction result = transactionService.receivingtransaction(transaction, 2L);
            assertEquals(transaction.getAmount(), result.getAmount());
        });
    }

    @Test
    public void testFindTransactionById_Success() {
        when(transactionRepository.findById(1L)).thenReturn(Optional.of(transaction));

        assertDoesNotThrow(() -> {
            Transaction result = transactionService.findTransactionById(1L);
            assertEquals(transaction.getTransactionid(), result.getTransactionid());
        });
    }

    @Test
    public void testFindTransactionById_NotFound() {
        when(transactionRepository.findById(1L)).thenReturn(Optional.empty());

        assertThrows(NotFoundException.class, () -> {
            transactionService.findTransactionById(1L);
        });
    }

    @Test
    public void testDeleteTransactionByTransactionId_Success() {
        when(transactionRepository.findById(1L)).thenReturn(Optional.of(transaction));

        assertDoesNotThrow(() -> {
            Transaction result = transactionService.deleteTransactionBytransactionId(1L);
            assertEquals(transaction.getTransactionid(), result.getTransactionid());
        });
    }

    @Test
    public void testDeleteTransactionByTransactionId_NotFound() {
        when(transactionRepository.findById(1L)).thenReturn(Optional.empty());

        assertThrows(NotFoundException.class, () -> {
            transactionService.deleteTransactionBytransactionId(1L);
        });
    }

    @Test
    public void testAddMoneyFromBank_BankAccountNotFound() {
        Transaction transaction = new Transaction();
        transaction.setAmount(200.0);
        transaction.setSenderorReceiverid(1L);

        BankAccountDTO bankAccountDTO = new BankAccountDTO();
        bankAccountDTO.setAccountNumber("123456789");
        bankAccountDTO.setIfsccode("ABCD1234");
        bankAccountDTO.setAtmCardNumber("567890123");
        bankAccountDTO.setAtmPin(4321);
        bankAccountDTO.setMobileNumber("1234567890");
        bankAccountDTO.setAccountHolderName("John Doe");
        bankAccountDTO.setAccountType("Savings");

        AddMoneyRequest addMoneyRequest = new AddMoneyRequest();
        addMoneyRequest.setTransaction(transaction);
        addMoneyRequest.setBankAccount(bankAccountDTO);

        when(walletAccountRepository.findById(1L)).thenReturn(Optional.of(senderWalletAccount));
        when(bankAccountRepository.findByAccountNumber("123456789")).thenReturn(Optional.empty());

        assertThrows(InvalidAccountIdException.class, () -> {
            transactionService.addmoneyfrombank(addMoneyRequest);
        });
    }

    @Test
    public void testAddMoneyFromBank_AuthenticationFailed() {
        Transaction transaction = new Transaction();
        transaction.setAmount(200.0);
        transaction.setSenderorReceiverid(1L);

        BankAccountDTO bankAccountDTO = new BankAccountDTO();
        bankAccountDTO.setAccountNumber("123456789");
        bankAccountDTO.setIfsccode("ABCD1234");
        bankAccountDTO.setAtmCardNumber("567890123");
        bankAccountDTO.setAtmPin(4321);
        bankAccountDTO.setMobileNumber("1234567890");
        bankAccountDTO.setAccountHolderName("John Doe");
        bankAccountDTO.setAccountType("Savings");

        AddMoneyRequest addMoneyRequest = new AddMoneyRequest();
        addMoneyRequest.setTransaction(transaction);
        addMoneyRequest.setBankAccount(bankAccountDTO);

        when(walletAccountRepository.findById(1L)).thenReturn(Optional.of(senderWalletAccount));
        when(bankAccountRepository.findByAccountNumber("123456789")).thenReturn(Optional.of(bankAccount));

        // Set incorrect bank credentials
        bankAccountDTO.setAtmPin(9999);

        assertThrows(AuthenticationFailedException.class, () -> {
            transactionService.addmoneyfrombank(addMoneyRequest);
        });
    }

    @Test
    public void testAddMoneyFromBank_WalletAccountNotFound() {
        Transaction transaction = new Transaction();
        transaction.setAmount(200.0);
        transaction.setSenderorReceiverid(1L);

        BankAccountDTO bankAccountDTO = new BankAccountDTO();
        bankAccountDTO.setAccountNumber("123456789");
        bankAccountDTO.setIfsccode("ABCD1234");
        bankAccountDTO.setAtmCardNumber("567890123");
        bankAccountDTO.setAtmPin(4321);
        bankAccountDTO.setMobileNumber("1234567890");
        bankAccountDTO.setAccountHolderName("John Doe");
        bankAccountDTO.setAccountType("Savings");

        AddMoneyRequest addMoneyRequest = new AddMoneyRequest();
        addMoneyRequest.setTransaction(transaction);
        addMoneyRequest.setBankAccount(bankAccountDTO);

        when(walletAccountRepository.findById(1L)).thenReturn(Optional.empty());

        assertThrows(InvalidAccountIdException.class, () -> {
            transactionService.addmoneyfrombank(addMoneyRequest);
        });
    }
    
    @Test
    public void testAddMoneyFromBank_Success() throws InvalidAccountIdException, AuthenticationFailedException, InvalidAmountException {
       
        Transaction transaction = new Transaction();
        transaction.setTransactionid(1L);
        transaction.setSenderorReceiverid(2L);
        transaction.setAmount(500.0);

      
        BankAccountDTO bankAccount = new BankAccountDTO();
        bankAccount.setAccountNumber("123456789");
        bankAccount.setIfsccode("ABCD1234");
        bankAccount.setAtmCardNumber("567890123");
        bankAccount.setMobileNumber("9876543210");
        bankAccount.setAccountHolderName("John Doe");
        bankAccount.setAccountType("Savings");
        bankAccount.setAtmPin(4321);

     
        WalletAccount existingWalletAccount = new WalletAccount();
        existingWalletAccount.setId(2L);
        existingWalletAccount.setBalance(1000.0);
        when(walletAccountRepository.findById(2L)).thenReturn(Optional.of(existingWalletAccount));

   BankAccount existingBankAccount = new BankAccount();
        existingBankAccount.setAccountNumber("123456789");
        existingBankAccount.setIfsccode("ABCD1234");
        existingBankAccount.setAtmCardNumber("567890123");
        existingBankAccount.setMobileNumber("9876543210");
        existingBankAccount.setAccountHolderName("John Doe");
        existingBankAccount.setAccountType("Savings");
        existingBankAccount.setAtmPin(4321);
        existingBankAccount.setBalance(1500.0);
        when(bankAccountRepository.findByAccountNumber("123456789")).thenReturn(Optional.of(existingBankAccount));

  when(transactionRepository.save(transaction)).thenReturn(transaction);

 AddMoneyRequest addMoneyRequest = new AddMoneyRequest();
        addMoneyRequest.setTransaction(transaction);
        addMoneyRequest.setBankAccount(bankAccount);

   Transaction result = transactionService.addmoneyfrombank(addMoneyRequest);

 assertEquals(transaction.getAmount(), result.getAmount());

 assertEquals(1500.0, existingWalletAccount.getBalance(), 0.001);

 assertEquals(1000.0, existingBankAccount.getBalance(), 0.001);
    }

}

