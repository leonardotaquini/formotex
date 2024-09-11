import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
  res.json({msg: 'Welcome to FORMOTEX API'});
});

export default router;