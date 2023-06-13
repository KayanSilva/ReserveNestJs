import { Injectable } from "@nestjs/common";

@Injectable()
export class UsuarioRepository {
 private usuarios = [];

 async listar() {
    this.usuarios;
 }
 
 async salvar(usuario) {
    this.usuarios.push(usuario);
 }
}