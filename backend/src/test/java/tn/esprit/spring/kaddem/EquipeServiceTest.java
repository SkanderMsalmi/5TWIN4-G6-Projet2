package tn.esprit.spring.kaddem;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import tn.esprit.spring.kaddem.entities.Equipe;
import tn.esprit.spring.kaddem.entities.Niveau;
import tn.esprit.spring.kaddem.repositories.EquipeRepository;
import tn.esprit.spring.kaddem.services.EquipeServiceImpl;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;


@ExtendWith(MockitoExtension.class)
public class EquipeServiceTest {
    @Mock
    private EquipeRepository equipeRepository;

    @InjectMocks
    private EquipeServiceImpl equipeService;

    @Test
    public void testCreateEquipe() {

        Equipe equipeToCreate = new Equipe();
        equipeToCreate.setIdEquipe(1);
        equipeToCreate.setNomEquipe("Sample Equipe");
        equipeToCreate.setNiveau(Niveau.EXPERT);

        when(equipeRepository.save(any(Equipe.class))).thenReturn(equipeToCreate);


        Equipe createdEquipe = equipeService.addEquipe(equipeToCreate);


        assertNotNull(createdEquipe);
        assertEquals(equipeToCreate.getIdEquipe(), createdEquipe.getIdEquipe());
        assertEquals(equipeToCreate.getNomEquipe(), createdEquipe.getNomEquipe());
        assertEquals(equipeToCreate.getNiveau(), createdEquipe.getNiveau());

        verify(equipeRepository, times(1)).save(any(Equipe.class));

    }
    @Test
    public void testUpdateEquipe() {

        Equipe equipeToUpdate = new Equipe();
        equipeToUpdate.setIdEquipe(1);
        equipeToUpdate.setNomEquipe("Updated Equipe");
        equipeToUpdate.setNiveau(Niveau.JUNIOR);

        when(equipeRepository.save(any(Equipe.class))).thenReturn(equipeToUpdate);


        Equipe updatedEquipe = equipeService.updateEquipe(equipeToUpdate);


        assertNotNull(updatedEquipe);
        assertEquals(equipeToUpdate.getIdEquipe(), updatedEquipe.getIdEquipe());
        assertEquals(equipeToUpdate.getNomEquipe(), updatedEquipe.getNomEquipe());
        assertEquals(equipeToUpdate.getNiveau(), updatedEquipe.getNiveau());

        verify(equipeRepository, times(1)).save(any(Equipe.class));

    }

    @Test
    public void testRetrieveAllEquipe() {

        List<Equipe> equipeList = Collections.singletonList(
                new Equipe(1, "Equipe One", Niveau.SENIOR, null, null)
        );

        when(equipeRepository.findAll()).thenReturn(equipeList);


        List<Equipe> retrievedEquipes = equipeService.retrieveAllEquipes();


        assertNotNull(retrievedEquipes);
        assertEquals(equipeList.size(), retrievedEquipes.size());

        Equipe expectedEquipe = equipeList.get(0);
        Equipe actualEquipe = retrievedEquipes.get(0);

        assertEquals(expectedEquipe.getIdEquipe(), actualEquipe.getIdEquipe());
        assertEquals(expectedEquipe.getNomEquipe(), actualEquipe.getNomEquipe());
        assertEquals(expectedEquipe.getNiveau(), actualEquipe.getNiveau());

        verify(equipeRepository, times(1)).findAll();

    }
}
