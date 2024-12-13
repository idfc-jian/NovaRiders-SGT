import { Router } from 'express'; 
import { registerUser, getAllUsers } from '../controllers/userController'; 

const router = Router(); 

router.post('/register', registerUser); 
router.get('/', getAllUsers);

export default router;