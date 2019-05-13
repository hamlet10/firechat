import { Component, OnInit } from "@angular/core";
import { ChatService } from "../../providers/chat.service";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styles: []
})
export class ChatComponent implements OnInit {
  mensaje: string = "";

  elmento: any;

  constructor(public _cs: ChatService) {
    this._cs.cargarMensajes().subscribe(() => {
      setTimeout(() => {
        this.elmento.scrollTop = this.elmento.scrollHeight;
      }, 20);
    });
  }

  ngOnInit() {
    this.elmento = document.getElementById("app-mensajes");
  }

  enviar_mensaje() {
    if (this.mensaje.length === 0) {
      return;
    }

    this._cs
      .agregarMensaje(this.mensaje)
      .then(() => (this.mensaje = ""))
      .catch(err => console.error("Error al enviar", err));
  }
}
