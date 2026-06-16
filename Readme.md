# Implementación del Patrón Builder en TypeScript

## Nombre del estudiante

Josue de la Cruz Berruecos

## Patrón Utilizado

Patron Builder

Permite construir objetos complejos paso a paso mediante métodos encadenables, mejorando la legibilidad y flexibilidad del código.

## Problema que se está resolviendo

En el área de Comunicación Universitaria se realizan distintos eventos académicos, culturales y administrativos.

Cada solicitud de evento requiere recopilar información como:

* Nombre del evento
* Objetivo
* Fecha
* Horario
* Salón a ocupar
* Número de asistentes
* Requiere apoyo visual
* Requiere microfono
* Medio de difunsion

El problema es que los formularios pueden variar dependiendo del tipo de evento.

Para resolver esta situación se implementó el patrón de diseño Builder, permitiendo construir formularios de manera flexible agregando preguntas paso a paso.

## Estructura de Clases

### 1. Clase SolicitudEvento (Producto)
Es la clase que representa el objeto final que queremos construir.

### 2. Clase SolicitudEventoBuilder (Constructor)
Clase encargada de configurar la solicitud dinámicamente. 

Métodos principales:

* setNombreEvento()
* setObjetivo()
* setFecha()
* setHorario()
* setSalon()
* setNumeroAsistentes()
* requiereApoyoAudiovisual()
* requiereMicrofono()
* setMedioDifusion()

Cada método retorna la misma instancia para permitir el encadenamiento de llamadas.

## Ejemplo de Uso del Builder

Ejemplo de cómo construir e imprimir una solicitud encadenando los métodos:

```typescript
function main() {
    const solicitud = new SolicitudEventoBuilder()
        .setNombreEvento("Conferencia de IA")
        .setObjetivo("Difundir conocimientos")
        .setFecha("20/06/2026")
        .setSalon("Auditorio")
        .requiereMicrofono(true)
        .build();

    solicitud.imprimirSolicitud();
}



