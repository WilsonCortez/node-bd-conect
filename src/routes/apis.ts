import {Router} from 'express';
import * as ApiController from '../controllers/api.controller';

const router = Router();

router.get('/ping', ApiController.ping);
router.get('/random', ApiController.random)
router.get('/nome/:nome', ApiController.nome)


router.post('/frases', ApiController.createPhrases)
router.get('/frases', ApiController.learPhrases)
router.get('/frases/aleatoria', ApiController.randomPhrases)
router.get('/frases/:id', ApiController.getPhrases);
router.put('/frases/:id', ApiController.updatePhrases)
router.delete('/frases/:id', ApiController.deletePhrases)


export default router;
