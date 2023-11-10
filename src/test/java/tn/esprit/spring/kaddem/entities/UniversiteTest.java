package tn.esprit.spring.kaddem.entities;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import tn.esprit.spring.kaddem.services.UniversiteServiceImpl;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
@ActiveProfiles("test")

class UniversiteTest {
    @Autowired
    UniversiteServiceImpl universiteService ;
    @Test
void AddUnivSuccess() {
    Universite universiteAdded = Universite.builder().nomUniv("Eniso").build();
    universiteService.addUniversite(universiteAdded);
    assertNotNull(universiteService.retrieveUniversite(universiteAdded.getIdUniv()));
    }


}