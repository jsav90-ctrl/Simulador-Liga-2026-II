/* DATOS OFICIALES DEL SIMULADOR — este es el ÚNICO archivo que editas en cada jornada.
 *
 * Cómo actualizar (desde GitHub, sin instalar nada):
 *   1. Abre este archivo en el repositorio y pulsa el lápiz (Edit).
 *   2. En «teamsCsv» deja la tabla al CORTE (no la toques si ya la dejaste fija).
 *   3. En «fixturesCsv» cambia jugado=0 por jugado=1 y escribe los goles en los partidos ya
 *      jugados. Cada fila con jugado=1 se SUMA sobre la tabla del corte.
 *   4. Pulsa «Commit changes». En 1-2 minutos la página queda actualizada para todos.
 *
 * Formato (igual que teams.csv y fixtures.csv del simulador de escritorio):
 *   teams:    equipo,pj,pts,dg,gf,gc[,gf_visitante,gc_visitante]  (las dos últimas son opcionales)
 *   fixtures: fecha,local,visitante,jugado,goles_local,goles_visitante,nota
 */
window.DATOS = {
  corte: "Tabla al 26-oct-2026 (después de la fecha 16)",
  teamsCsv: `equipo,pj,pts,dg,gf,gc
Atlético Nacional,15,32,17,30,13
América de Cali,15,31,18,29,11
Deportivo Cali,16,30,14,24,10
Millonarios,16,26,10,24,14
Atlético Bucaramanga,14,25,9,22,13
Independiente Santa Fe,14,25,7,21,14
Independiente Medellín,15,23,1,22,21
Once Caldas,16,21,2,20,18
Cúcuta Deportivo,15,21,-4,18,22
Deportes Tolima,16,20,-1,18,19
Águilas Doradas,15,19,-1,19,20
Alianza Valledupar,15,18,-10,16,26
Internacional de Bogotá,16,17,-4,18,22
Llaneros FC,15,17,-4,16,20
Junior,15,15,-3,20,23
Boyacá Chicó,15,15,-13,12,25
Deportivo Pereira,15,14,-8,11,19
Fortaleza CEIF,15,12,-6,16,22
Deportivo Pasto,15,12,-12,10,22
Jaguares de Córdoba,14,10,-12,16,28
`,
  fixturesCsv: `fecha,local,visitante,jugado,goles_local,goles_visitante,nota
5,Internacional de Bogotá,Independiente Medellín,0,,,
5,Cúcuta Deportivo,Águilas Doradas,0,,,
5,Boyacá Chicó,Junior,0,,,
5,Once Caldas,Alianza Valledupar,0,,,
5,Atlético Bucaramanga,Deportivo Pasto,0,,,
5,América de Cali,Fortaleza CEIF,0,,,
5,Atlético Nacional,Independiente Santa Fe,0,,,
5,Deportivo Pereira,Jaguares de Córdoba,0,,,
14,Independiente Santa Fe,Atlético Bucaramanga,1,2,1,
16,Jaguares de Córdoba,Llaneros FC,1,1,0,
17,Independiente Medellín,Alianza Valledupar,0,,,
17,Deportivo Cali,Boyacá Chicó,0,,,
17,Águilas Doradas,Fortaleza CEIF,0,,,
17,Cúcuta Deportivo,Independiente Santa Fe,0,,,
17,Atlético Bucaramanga,Atlético Nacional,0,,,
17,Deportivo Pereira,Deportes Tolima,0,,,
17,Millonarios,América de Cali,0,,,
17,Deportivo Pasto,Jaguares de Córdoba,0,,,
17,Llaneros FC,Junior,0,,,
18,Fortaleza CEIF,Independiente Medellín,0,,,
18,Once Caldas,Águilas Doradas,0,,,
18,Deportes Tolima,Millonarios,0,,,
18,Atlético Nacional,Deportivo Pereira,0,,,
18,América de Cali,Deportivo Cali,0,,,
18,Boyacá Chicó,Internacional de Bogotá,0,,,
18,Jaguares de Córdoba,Atlético Bucaramanga,0,,,
18,Junior,Cúcuta Deportivo,0,,,
18,Alianza Valledupar,Llaneros FC,0,,,
18,Independiente Santa Fe,Deportivo Pasto,0,,,
19,Atlético Nacional,Once Caldas,0,,,
19,Águilas Doradas,Independiente Medellín,0,,,
19,Cúcuta Deportivo,Jaguares de Córdoba,0,,,
19,Atlético Bucaramanga,Fortaleza CEIF,0,,,
19,Deportivo Pasto,Junior,0,,,
19,Internacional de Bogotá,Independiente Santa Fe,0,,,
19,Millonarios,Alianza Valledupar,0,,,
19,Llaneros FC,Boyacá Chicó,0,,,
19,Deportivo Cali,Deportes Tolima,0,,,
19,Deportivo Pereira,América de Cali,0,,,
`
};
