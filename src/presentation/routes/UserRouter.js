import { Router } from "express";
import { deleteOne, getOne, list, save, update } from "../controllers/userController.js";
import auth from "../middlewares/auth.js";
import authorization from "../middlewares/authorization.js";

const userRouter = Router()

userRouter.get('/', auth, authorization('getUsers'), list)
userRouter.get('/:id', auth, authorization('getUser'), getOne)
userRouter.post('/', auth, authorization('saveUser'), save)
userRouter.put('/:id', auth, authorization('updateUser'), update)
userRouter.delete('/:id', auth, authorization('deleteUser'), deleteOne)

export default userRouter