class SolicitudEvento {

    public nombreEvento: string = "";
    public objetivo: string = "";
    public fecha: string = "";
    public horario: string = "";
    public salon: string = "";
    public numeroAsistentes: number = 0;
    public apoyoAudiovisual: boolean = false;
    public microfono: boolean = false;
    public medioDifusion: string = "";

    imprimirSolicitud(): void {
        console.log("---- SOLICITUD DE EVENTO UMAD ----");
        console.log(`Nombre del evento: ${this.nombreEvento}`);
        console.log(`Objetivo: ${this.objetivo}`);
        console.log(`Fecha: ${this.fecha}`);
        console.log(`Horario: ${this.horario}`);
        console.log(`Salón: ${this.salon}`);
        console.log(`Número de asistentes: ${this.numeroAsistentes}`);
        console.log(`Apoyo audiovisual: ${this.apoyoAudiovisual ? "Sí" : "No"}`);
        console.log(`Micrófono: ${this.microfono ? "Sí" : "No"}`);
        console.log(`Medio de difusión: ${this.medioDifusion}`);
    }

}

class SolicitudEventoBuilder {

    private solicitud: SolicitudEvento;

    constructor() {
        this.solicitud = new SolicitudEvento();
    }

    setNombreEvento(nombre: string): SolicitudEventoBuilder {
        this.solicitud.nombreEvento = nombre;
        return this;
    }

    setObjetivo(objetivo: string): SolicitudEventoBuilder {
        this.solicitud.objetivo = objetivo;
        return this;
    }

    setFecha(fecha: string): SolicitudEventoBuilder {
        this.solicitud.fecha = fecha;
        return this;
    }

    setHorario(horario: string): SolicitudEventoBuilder {
        this.solicitud.horario = horario;
        return this;
    }

    setSalon(salon: string): SolicitudEventoBuilder {
        this.solicitud.salon = salon;
        return this;
    }

    setNumeroAsistentes(cantidad: number): SolicitudEventoBuilder {
        this.solicitud.numeroAsistentes = cantidad;
        return this;
    }

    requiereApoyoAudiovisual(respuesta: boolean): SolicitudEventoBuilder {
        this.solicitud.apoyoAudiovisual = respuesta;
        return this;
    }

    requiereMicrofono(respuesta: boolean): SolicitudEventoBuilder {
        this.solicitud.microfono = respuesta;
        return this;
    }

    setMedioDifusion(medio: string): SolicitudEventoBuilder {
        this.solicitud.medioDifusion = medio;
        return this;
    }

    build(): SolicitudEvento {
        return this.solicitud;
    }

}

function main() {

    const builder = new SolicitudEventoBuilder();
    const solicitud = builder

        .setNombreEvento("Conferencia de AWS")
        .setObjetivo("Difundir conocimientos sobre AWS (Computo en la Nube) entre estudiantes")
        .setFecha("20/06/2026")
        .setHorario("10:00 AM - 12:00 PM")
        .setSalon("Auditorio")
        .setNumeroAsistentes(50)
        .requiereApoyoAudiovisual(true)
        .requiereMicrofono(true)
        .setMedioDifusion("Instagram")
        .build();
    solicitud.imprimirSolicitud();
}

main();