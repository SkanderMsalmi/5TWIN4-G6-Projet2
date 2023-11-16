package tn.esprit.spring.kaddem.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import tn.esprit.spring.kaddem.entities.Contrat;
import tn.esprit.spring.kaddem.entities.Specialite;
import tn.esprit.spring.kaddem.repositories.ContratRepository;
import tn.esprit.spring.kaddem.services.ContratServiceImpl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
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

    @Test
    public void testAddContrat() {
        Date dateDebutContrat = new Date();
        Date dateFinContrat = new Date(2024,11,15);
        Specialite specialite = Specialite.IA;
        Boolean archive = false;
        Integer montantContrat = 1000;
        Contrat contrat = new Contrat(dateDebutContrat, dateFinContrat, specialite, archive, montantContrat);
        when(contratRepository.save(contrat)).thenReturn(contrat);

        Contrat result = contratService.addContrat(contrat);
        System.out.printf("ddd: "+ result);
        assertEquals(contrat, result);
    }
    @Test
    public void testUpdateContrat() {
        Date dateDebutContrat = new Date(2024, 11,15); 
        Date dateFinContrat = new Date(2025,11,15); 
        Specialite specialite = Specialite.CLOUD; 
        Boolean archive = true; 
        Integer montantContrat = 1500; 

        Contrat contrat = new Contrat(dateDebutContrat, dateFinContrat, specialite, archive, montantContrat);
        when(contratRepository.save(contrat)).thenReturn(contrat);

        Contrat result = contratService.updateContrat(contrat);

        assertEquals(contrat, result);
    }
    @Test
    public void testRetrieveContrat() {
        Integer contratId = 1;
        Date dateDebutContrat = new Date(2024, 11,15);
        Date dateFinContrat = new Date(2025,11,15);
        Specialite specialite = Specialite.CLOUD;
        Boolean archive = true;
        Integer montantContrat = 1500;

        Contrat expectedContrat = new Contrat(contratId, dateDebutContrat, dateFinContrat, specialite, archive, montantContrat);
        when(contratRepository.findById(contratId)).thenReturn(java.util.Optional.of(expectedContrat));

        Contrat result = contratService.retrieveContrat(contratId);

        assertEquals(expectedContrat, result);
    }

    @Test
    public void testRemoveContrat() {
        Integer contratIdToRemove = 1;
        Contrat contratToDelete = contratRepository.findByIdContrat(1);

        when(contratRepository.findById(contratIdToRemove)).thenReturn(java.util.Optional.ofNullable(contratToDelete));

        contratService.removeContrat(contratIdToRemove);

        verify(contratRepository).delete(contratToDelete);
    }




}
