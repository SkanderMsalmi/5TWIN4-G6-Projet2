package tn.esprit.spring.kaddem.entities;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import tn.esprit.spring.kaddem.repositories.UniversiteRepository;
import tn.esprit.spring.kaddem.services.UniversiteServiceImpl;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
@ActiveProfiles("test")

class UniversiteTest {
    @Autowired
    private UniversiteServiceImpl universiteService;

    @Autowired
    private UniversiteRepository universiteRepository;

    @Test
    void testCreateUniversiteWithNomUniv() {
        Universite universite = new Universite("Test University");
        Universite savedUniversite = universiteService.addUniversite(universite);
        assertNotNull(savedUniversite.getIdUniv());
        assertEquals("Test University", savedUniversite.getNomUniv());
    }

    @Test
    void testDeleteUniversite() {
        Universite universite = new Universite("Test University");
        Universite savedUniversite = universiteService.addUniversite(universite);

        assertNotNull(savedUniversite.getIdUniv());

        universiteService.deleteUniversite(savedUniversite.getIdUniv());

        Optional<Universite> deletedUniversite = universiteRepository.findById(savedUniversite.getIdUniv());
        assertFalse(deletedUniversite.isPresent());
    }

    @Test
    void testUpdateUniversite() {
        Universite universite = new Universite("Test University");
        Universite savedUniversite = universiteService.addUniversite(universite);

        assertNotNull(savedUniversite.getIdUniv());

        savedUniversite.setNomUniv("Updated University");

        Universite updatedUniversite = universiteService.updateUniversite(savedUniversite);
        assertEquals("Updated University", updatedUniversite.getNomUniv());
    }

}