package tn.esprit.spring.kaddem.entities;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import tn.esprit.spring.kaddem.entities.Universite;
import tn.esprit.spring.kaddem.repositories.UniversiteRepository;
import tn.esprit.spring.kaddem.services.UniversiteServiceImpl;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class UniversiteMockitoTest {

    @InjectMocks
    private UniversiteServiceImpl universiteService;

    @Mock
    private UniversiteRepository universiteRepository;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void testAddUniversite() {
        Universite universite = new Universite("Test University");

        when(universiteRepository.save(universite)).thenReturn(universite);

        Universite addedUniversite = universiteService.addUniversite(universite);

        assertNotNull(addedUniversite);
        assertEquals("Test University", addedUniversite.getNomUniv());
    }

    @Test
    void testRetrieveUniversite() {
        Integer universiteIdToRetrieve = 1;

        Universite exampleUniversite = new Universite(universiteIdToRetrieve, "Test University");

        when(universiteRepository.findById(universiteIdToRetrieve)).thenReturn(Optional.of(exampleUniversite));

        Universite retrievedUniversite = universiteService.retrieveUniversite(universiteIdToRetrieve);

        assertNotNull(retrievedUniversite);
        assertEquals(universiteIdToRetrieve, retrievedUniversite.getIdUniv());
        assertEquals("Test University", retrievedUniversite.getNomUniv());
    }

    @Test
    void testDeleteUniversite() {
        Integer universiteIdToDelete = 1;

        when(universiteRepository.findById(universiteIdToDelete)).thenReturn(Optional.of(new Universite()));

        universiteService.deleteUniversite(universiteIdToDelete);

        verify(universiteRepository, times(1)).delete(any());
    }
}
