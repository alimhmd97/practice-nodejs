import {Router} from 'express';
const router=Router();
// products
router.get('/products',()=>{});
router.post('/products');
router.get('/products/:id');
router.put('/products/:id');
router.delete('/products/:id');
// updates
router.get('/updates',()=>{});
router.post('/updates');
router.get('/updates/:id');
router.put('/updates/:id');
router.delete('/updates/:id');
// updatespoints
router.get('/updatespoints',()=>{});
router.post('/updatespoints');
router.get('/updatespoints/:id');
router.put('/updatespoints/:id');
router.delete('/updatespoints/:id');
export default Router