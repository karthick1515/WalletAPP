package com.transaction.service.controllerest;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.transaction.service.controller.TransactionController;
import com.transaction.service.dto.AddMoneyRequest;
import com.transaction.service.exception.*;
import com.transaction.service.model.Transaction;
import com.transaction.service.service.TransactionService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(controllers = TransactionController.class)
@AutoConfigureMockMvc
public class TransactionControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private TransactionService transactionService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testSendTransaction_Success() throws Exception {
        Transaction transaction = new Transaction();
        transaction.setAmount(100.0);

        when(transactionService.sendingtransaction(any(), anyLong(), anyInt())).thenReturn(transaction);

        MvcResult mvcResult = mockMvc.perform(post("/api/transaction/sendmoney")
                .contentType(MediaType.APPLICATION_JSON)
                .content(new ObjectMapper().writeValueAsString(transaction))
                .param("walletAccountId", "1")
                .param("walletPin", "1234"))
                .andExpect(status().isCreated())
                .andReturn();

        MockHttpServletResponse response = mvcResult.getResponse();
        assertEquals(201, response.getStatus());
    }

    @Test
    public void testSendTransaction_InvalidAccountId() throws Exception {
        when(transactionService.sendingtransaction(any(), anyLong(), anyInt())).thenThrow(InvalidAccountIdException.class);

        mockMvc.perform(post("/api/transaction/sendmoney")
                .contentType(MediaType.APPLICATION_JSON)
                .param("walletAccountId", "1")
                .param("walletPin", "1234"))
                .andExpect(status().isBadRequest());
    }

    @Test
    public void testReceiveTransaction_Success() throws Exception {
        Transaction transaction = new Transaction();
        transaction.setAmount(100.0);

        when(transactionService.receivingtransaction(any(), anyLong())).thenReturn(transaction);

        MvcResult mvcResult = mockMvc.perform(post("/api/transaction/receivemoney")
                .contentType(MediaType.APPLICATION_JSON)
                .content(new ObjectMapper().writeValueAsString(transaction))
                .param("receivingWalletAccountId", "2"))
                .andExpect(status().isCreated())
                .andReturn();

        MockHttpServletResponse response = mvcResult.getResponse();
        assertEquals(201, response.getStatus());
    }

    @Test
    public void testUpdateTransaction_Success() throws Exception {
        Transaction transaction = new Transaction();
        transaction.setTransactionid(1L);
        transaction.setAmount(300.0);

        when(transactionService.updateTransaction(any())).thenReturn(transaction);

        MvcResult mvcResult = mockMvc.perform(put("/api/transaction/update")
                .contentType(MediaType.APPLICATION_JSON)
                .content(new ObjectMapper().writeValueAsString(transaction)))
                .andExpect(status().isOk())
                .andReturn();

        MockHttpServletResponse response = mvcResult.getResponse();
        assertEquals(200, response.getStatus());
    }

    @Test
    public void testGetTransactionById_Success() throws Exception {
        Transaction transaction = new Transaction();
        transaction.setTransactionid(1L);

        when(transactionService.findTransactionById(1L)).thenReturn(transaction);

        MvcResult mvcResult = mockMvc.perform(get("/api/transaction/gettransaction")
                .param("transactionId", "1"))
                .andExpect(status().isOk())
                .andReturn();

        MockHttpServletResponse response = mvcResult.getResponse();
        assertEquals(200, response.getStatus());
    }

    @Test
    public void testGetAllTransactionsByWalletAccountId_Success() throws Exception {
        Transaction transaction = new Transaction();
        transaction.setTransactionid(1L);
        List<Transaction> transactions = Collections.singletonList(transaction);

        when(transactionService.findAllTransactionByWalletAccountId(1L)).thenReturn(transactions);

        MvcResult mvcResult = mockMvc.perform(get("/api/transaction/getalltransactions")
                .param("walletAccountId", "1"))
                .andExpect(status().isOk())
                .andReturn();

        MockHttpServletResponse response = mvcResult.getResponse();
        assertEquals(200, response.getStatus());
    }

    @Test
    public void testDeleteTransactionById_Success() throws Exception {
        Transaction transaction = new Transaction();
        transaction.setTransactionid(1L);

        when(transactionService.deleteTransactionBytransactionId(1L)).thenReturn(transaction);

        MvcResult mvcResult = mockMvc.perform(delete("/api/transaction/delete/transaction")
                .param("transactionId", "1"))
                .andExpect(status().isOk())
                .andReturn();

        MockHttpServletResponse response = mvcResult.getResponse();
        assertEquals(200, response.getStatus());
    }

    @Test
    public void testDeleteTransactionById_NotFound() throws Exception {
        when(transactionService.deleteTransactionBytransactionId(1L)).thenThrow(NotFoundException.class);

        mockMvc.perform(delete("/api/transaction/delete/transaction")
                .param("transactionId", "1"))
                .andExpect(status().isNotFound());
    }

    @Test
    public void testAddMoneyFromBank_Success() throws Exception {
        Transaction transaction = new Transaction();
        transaction.setAmount(100.0);

        AddMoneyRequest addMoneyRequest = new AddMoneyRequest();
        addMoneyRequest.setTransaction(transaction);

        when(transactionService.addmoneyfrombank(any())).thenReturn(transaction);

        MvcResult mvcResult = mockMvc.perform(post("/api/transaction/addmoneyfrombank")
                .contentType(MediaType.APPLICATION_JSON)
                .content(new ObjectMapper().writeValueAsString(addMoneyRequest)))
                .andExpect(status().isCreated())
                .andReturn();

        MockHttpServletResponse response = mvcResult.getResponse();
        assertEquals(201, response.getStatus());
    }

   
}


