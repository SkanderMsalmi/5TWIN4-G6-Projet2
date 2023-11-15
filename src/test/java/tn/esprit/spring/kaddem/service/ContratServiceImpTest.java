package tn.esprit.spring.kaddem.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import tn.esprit.spring.kaddem.entities.Contrat;
import tn.esprit.spring.kaddem.repositories.ContratRepository;
import tn.esprit.spring.kaddem.services.ContratServiceImpl;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class ContratServiceImpTest {

    @Mock
    private ContratRepository contratRepository;

    @InjectMocks
    private ContratServiceImpl contratService;

    @BeforeEach
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testRetrieveAllContrats() {
        List<Contrat> contrats = new ArrayList<>();
        when(contratRepository.findAll()).thenReturn(contrats);

        List<Contrat> result = contratService.retrieveAllContrats();

        assertEquals(contrats, result);
    }

}
