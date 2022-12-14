// Здесь я работаю с маршрутами, по которым надо отправлять заспросы (с папки controllers).

import { Router } from "express";
const router = new Router();
import userController from "../controllers/user.controller.js";

router.post("/user", userController.createUser);
router.get("/user", userController.getUsers);
router.get("/user/:id", userController.getOneUser);
router.put("/user", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

export default router;
