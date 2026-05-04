# Spain Leads Scraper

Herramienta de Prospeccion Comercial B2B para la identificacion y captacion automatizada de puntos de venta en el mercado wellness espanol, desarrollada inicialmente para el lanzamiento europeo de Cafe Sativa, una marca de cafe funcional con canamo.

## Enfoque

La herramienta integra tres fuentes de datos en paralelo: OpenStreetMap, Paginas Amarillas y Google Places API. Incorpora deduplicacion inteligente, control de rate limiting y exportacion automatica a Excel con formato profesional.

Cada prospecto puede incluir hasta 16 campos: nombre, telefonos, email, web, direccion completa, horario, valoracion y numero de resenas.

## Modos de trabajo

Opera en modo local, para una ciudad concreta, o en modo nacional, con barrido automatizado de las 52 provincias. Los procesos largos quedan protegidos mediante checkpoints intermedios.

La arquitectura modular permite incorporar nuevas fuentes o verticales de negocio con cambios minimos: farmacias, centros de yoga, coworkings, hoteles boutique u otros puntos de venta especializados.

## Stack

- Python
- BeautifulSoup
- Requests
- OpenPyXL
- Google Places API
- Overpass API / OpenStreetMap

## Impacto

Reduce de dias a minutos la construccion de una base de prospectos B2B cualificada, eliminando el trabajo manual de investigacion y permitiendo escalar la prospeccion comercial sin aumentar el equipo.

![Log de ejecucion](/Scraping/Scraping.png)
