import { Router } from 'express'; 
import { addMoto, getAllMotos } from '../controllers/motoController'; 

const router = Router(); 

router.post('/', addMoto);
router.get('/motos', getAllMotos);

export default router; 