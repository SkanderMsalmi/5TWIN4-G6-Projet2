package tn.esprit.spring.kaddem;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import tn.esprit.spring.kaddem.entities.*;
import tn.esprit.spring.kaddem.repositories.*;
import tn.esprit.spring.kaddem.services.EtudiantServiceImpl;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class EtudiantServiceImplTest {

    @Mock
    private EtudiantRepository etudiantRepository;
    @Mock
    private ContratRepository contratRepository;
    @Mock
    private EquipeRepository equipeRepository;
    @Mock
    private DepartementRepository departementRepository;

    @InjectMocks
    private EtudiantServiceImpl etudiantService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void retrieveAllEtudiants() {
        when(etudiantRepository.findAll()).thenReturn(Collections.singletonList(new Etudiant()));
        List<Etudiant> result = etudiantService.retrieveAllEtudiants();
        assertNotNull(result);
        assertFalse(result.isEmpty());
        verify(etudiantRepository).findAll();
    }

    @Test
    void addEtudiant() {
        Etudiant etudiant = new Etudiant();
        when(etudiantRepository.save(etudiant)).thenReturn(etudiant);
        Etudiant result = etudiantService.addEtudiant(etudiant);
        assertNotNull(result);
        verify(etudiantRepository).save(etudiant);
    }

    @Test
    void updateEtudiant() {
        Etudiant etudiant = new Etudiant();
        when(etudiantRepository.save(etudiant)).thenReturn(etudiant);
        Etudiant result = etudiantService.updateEtudiant(etudiant);
        assertNotNull(result);
        verify(etudiantRepository).save(etudiant);
    }

    @Test
    void retrieveEtudiant() {
        Integer id = 1;
        when(etudiantRepository.findById(id)).thenReturn(Optional.of(new Etudiant()));
        Etudiant result = etudiantService.retrieveEtudiant(id);
        assertNotNull(result);
        verify(etudiantRepository).findById(id);
    }

    @Test
    void removeEtudiant() {
        Integer id = 1;
        Etudiant etudiant = new Etudiant();
        when(etudiantRepository.findById(id)).thenReturn(Optional.of(etudiant));
        etudiantService.removeEtudiant(id);
        verify(etudiantRepository).delete(etudiant);
    }

    @Test
    void assignEtudiantToDepartement() {
        Integer etudiantId = 1, departementId = 1;
        Etudiant etudiant = new Etudiant();
        Departement departement = new Departement();
        when(etudiantRepository.findById(etudiantId)).thenReturn(Optional.of(etudiant));
        when(departementRepository.findById(departementId)).thenReturn(Optional.of(departement));
        etudiantService.assignEtudiantToDepartement(etudiantId, departementId);
        verify(etudiantRepository).save(etudiant);
    }

    @Test
    void addAndAssignEtudiantToEquipeAndContract() {
        Integer idContrat = 1, idEquipe = 1;
        Etudiant etudiant = new Etudiant();
        Contrat contrat = new Contrat();
        Equipe equipe = new Equipe();
        when(contratRepository.findById(idContrat)).thenReturn(Optional.of(contrat));
        when(equipeRepository.findById(idEquipe)).thenReturn(Optional.of(equipe));
        when(etudiantRepository.save(etudiant)).thenReturn(etudiant);
        Etudiant result = etudiantService.addAndAssignEtudiantToEquipeAndContract(etudiant, idContrat, idEquipe);
        assertNotNull(result);
        verify(contratRepository).findById(idContrat);
        verify(equipeRepository).findById(idEquipe);
        verify(etudiantRepository).save(etudiant);
    }

    @Test
    void getEtudiantsByDepartement() {
        Integer idDepartement = 1;
        when(etudiantRepository.findEtudiantsByDepartement_IdDepart(idDepartement)).thenReturn(Collections.singletonList(new Etudiant()));
        List<Etudiant> result = etudiantService.getEtudiantsByDepartement(idDepartement);
        assertNotNull(result);
        assertFalse(result.isEmpty());
        verify(etudiantRepository).findEtudiantsByDepartement_IdDepart(idDepartement);
    }
}
