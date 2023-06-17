import { Router } from 'express';
import { MarcaDeArmaController } from '../controllers/MarcaDeArmaController';
import { MunicaoDeArmaController } from '../controllers/MunicaoDeArmaController';
import { TipoDeArmaController } from '../controllers/TipoDeArmaController';
import { ArmaController } from '../controllers/ArmaController';
const router = Router();

router.get('/', (_, res) => {
	return res.send('Teste de rota, OK!');
});

router.get('/arma/:ativo', ArmaController.lista);
router.post('/arma/', ArmaController.insere);
router.put('/arma/', ArmaController.atualiza);
// router.put('/arma/desativa', ArmaController.desativa);

router.get('/marcadearma/:ativo', MarcaDeArmaController.lista);
router.post('/marcadearma', MarcaDeArmaController.insere);
router.put('/marcadearma', MarcaDeArmaController.atualiza);
router.put('/marcadearma/desativa', MarcaDeArmaController.desativa);

router.get('/municaodearma/:ativo', MunicaoDeArmaController.lista);
router.post('/municaodearma', MunicaoDeArmaController.insere);
router.put('/municaodearma', MunicaoDeArmaController.atualiza);
router.put('/municaodearma/desativa', MunicaoDeArmaController.desativa);

router.get('/tipodearma/:ativo', TipoDeArmaController.lista);
router.post('/tipodearma', TipoDeArmaController.insere);
router.put('/tipodearma', TipoDeArmaController.atualiza);
router.put('/tipodearma/desativa', TipoDeArmaController.desativa);



export {router}; 