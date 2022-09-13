// Здесь я работаю с маршрутами, по которым надо отправлять заспросы (с папки controllers).

import { Router } from "express";
const router = new Router();
import postController from "../controllers/post.controller.js";

router.post("/post", postController.createPost);
router.get("/post", postController.getPostByUser);

export default router;
