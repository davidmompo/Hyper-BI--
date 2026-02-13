const daxFunctions = [
{
  name: "ACCRINT",
  description: "Devuelve el interés acumulado de un valor que paga intereses periódicos.",
  syntax: "ACCRINT(<fecha_emision>, <fecha_primer_interes>, <fecha_liquidacion>, <tasa>, <valor_nominal>, <frecuencia>[, <base>[, <metodo>]])"
},
{
  name: "ACCRINTM",
  description: "Devuelve el interés acumulado de un valor que paga intereses al vencimiento.",
  syntax: "ACCRINTM(<fecha_emision>, <fecha_vencimiento>, <tasa>, <valor_nominal>[, <base>])"
},
{
  name: "ALL",
  description: "Devuelve todas las filas de una tabla o todos los valores de una columna ignorando filtros.",
  syntax: "ALL([<tabla> | <columna>[, <columna>…]])"
},
{
  name: "ALLCROSSFILTERED",
  description: "Quita todos los filtros aplicados a una tabla.",
  syntax: "ALLCROSSFILTERED(<tabla>)"
},
{
  name: "ALLEXCEPT",
  description: "Quita todos los filtros de una tabla excepto los indicados.",
  syntax: "ALLEXCEPT(<tabla>, <columna>[, <columna>…])"
},
{
  name: "ALLNOBLANKROW",
  description: "Devuelve todas las filas excepto la fila en blanco ignorando filtros.",
  syntax: "ALLNOBLANKROW(<tabla> | <columna>)"
},
{
  name: "ALLSELECTED",
  description: "Quita filtros de filas y columnas pero mantiene otros filtros explícitos.",
  syntax: "ALLSELECTED([<tabla> | <columna>[, <columna>…]])"
},
{
  name: "AMORDEGRC",
  description: "Devuelve la depreciación por período contable.",
  syntax: "AMORDEGRC(<costo>, <fecha_compra>, <fecha_primer_periodo>, <valor_residual>, <periodo>, <tasa>[, <base>])"
},
{
  name: "AMORLINC",
  description: "Devuelve la depreciación lineal por período.",
  syntax: "AMORLINC(<costo>, <fecha_compra>, <fecha_primer_periodo>, <valor_residual>, <periodo>, <tasa>[, <base>])"
},
{
  name: "APPROXIMATEDISTINCTCOUNT",
  description: "Devuelve el número aproximado de valores distintos en una columna.",
  syntax: "APPROXIMATEDISTINCTCOUNT(<columna>)"
},
{
  name: "AVERAGE",
  description: "Devuelve el promedio de una columna.",
  syntax: "AVERAGE(<columna>)"
},
{
  name: "AVERAGEA",
  description: "Devuelve el promedio incluyendo valores no numéricos.",
  syntax: "AVERAGEA(<columna>)"
},
{
  name: "AVERAGEX",
  description: "Devuelve el promedio de una expresión evaluada por fila.",
  syntax: "AVERAGEX(<tabla>, <expresion>)"
},
{
  name: "CALCULATE",
  description: "Evalúa una expresión en un contexto de filtro modificado.",
  syntax: "CALCULATE(<expresion>[, <filtro>…])"
},
{
  name: "CALCULATETABLE",
  description: "Evalúa una tabla en un contexto de filtro modificado.",
  syntax: "CALCULATETABLE(<expresion_tabla>[, <filtro>…])"
},
{
  name: "CALENDAR",
  description: "Devuelve una tabla con un rango continuo de fechas.",
  syntax: "CALENDAR(<fecha_inicio>, <fecha_fin>)"
},
{
  name: "CALENDARAUTO",
  description: "Devuelve una tabla de fechas generada automáticamente.",
  syntax: "CALENDARAUTO([<mes_fin_ejercicio>])"
},
{
  name: "COUNT",
  description: "Cuenta valores no vacíos en una columna.",
  syntax: "COUNT(<columna>)"
},
{
  name: "COUNTA",
  description: "Cuenta valores no vacíos incluyendo texto.",
  syntax: "COUNTA(<columna>)"
},
{
  name: "COUNTAX",
  description: "Cuenta resultados no vacíos evaluando una expresión por fila.",
  syntax: "COUNTAX(<tabla>, <expresion>)"
},
{
  name: "COUNTBLANK",
  description: "Cuenta valores en blanco.",
  syntax: "COUNTBLANK(<columna>)"
},
{
  name: "COUNTROWS",
  description: "Cuenta filas de una tabla.",
  syntax: "COUNTROWS(<tabla>)"
},
{
  name: "COUNTX",
  description: "Cuenta valores no vacíos de una expresión por fila.",
  syntax: "COUNTX(<tabla>, <expresion>)"
},
{
  name: "DATE",
  description: "Devuelve una fecha a partir de año, mes y día.",
  syntax: "DATE(<año>, <mes>, <dia>)"
},
{
  name: "DATEDIFF",
  description: "Devuelve la diferencia entre dos fechas en un intervalo.",
  syntax: "DATEDIFF(<fecha_inicio>, <fecha_fin>, <intervalo>)"
},
{
  name: "DATEVALUE",
  description: "Convierte texto en fecha.",
  syntax: "DATEVALUE(<texto_fecha>)"
},
{
  name: "DAY",
  description: "Devuelve el día del mes.",
  syntax: "DAY(<fecha>)"
},
{
  name: "DB",
  description: "Calcula la depreciación por saldo decreciente fijo.",
  syntax: "DB(<costo>, <valor_residual>, <vida_util>, <periodo>[, <meses>])"
},
{
  name: "DDB",
  description: "Calcula la depreciación por doble saldo decreciente.",
  syntax: "DDB(<costo>, <valor_residual>, <vida_util>, <periodo>[, <factor>])"
},
{
  name: "DISC",
  description: "Devuelve la tasa de descuento de un valor.",
  syntax: "DISC(<fecha_liquidacion>, <fecha_vencimiento>, <precio>, <valor_reembolso>[, <base>])"
},
{
  name: "DISTINCTCOUNT",
  description: "Cuenta valores distintos.",
  syntax: "DISTINCTCOUNT(<columna>)"
},
{
  name: "DISTINCTCOUNTNOBLANK",
  description: "Cuenta valores distintos excluyendo blancos.",
  syntax: "DISTINCTCOUNTNOBLANK(<columna>)"
},
{
  name: "DOLLARDE",
  description: "Convierte un precio fraccionario en decimal.",
  syntax: "DOLLARDE(<precio_fraccionario>, <fraccion>)"
},
{
  name: "EARLIER",
  description: "Devuelve el valor de una columna en un contexto de evaluación anterior.",
  syntax: "EARLIER(<columna>[, <numero_nivel>])"
},
{
  name: "EARLIEST",
  description: "Devuelve el valor de una columna en el contexto más externo.",
  syntax: "EARLIEST(<columna>)"
},
{
  name: "EDATE",
  description: "Devuelve una fecha desplazada un número de meses.",
  syntax: "EDATE(<fecha>, <meses>)"
},
{
  name: "EOMONTH",
  description: "Devuelve el último día del mes desplazado.",
  syntax: "EOMONTH(<fecha>, <meses>)"
},
{
  name: "FILTER",
  description: "Devuelve una tabla filtrada por una condición.",
  syntax: "FILTER(<tabla>, <condicion>)"
},
{
  name: "HOUR",
  description: "Devuelve la hora.",
  syntax: "HOUR(<fecha_hora>)"
},
{
  name: "KEEPFILTERS",
  description: "Modifica la aplicación de filtros dentro de CALCULATE.",
  syntax: "KEEPFILTERS(<expresion>)"
},
{
  name: "LOOKUPVALUE",
  description: "Devuelve un valor que cumple criterios de búsqueda.",
  syntax: "LOOKUPVALUE(<columna_resultado>, <columna_busqueda>, <valor>[, <columna_busqueda2>, <valor2>]…)"
},
{
  name: "MAX",
  description: "Devuelve el valor máximo.",
  syntax: "MAX(<columna> | <expresion1>, <expresion2>)"
},
{
  name: "MAXA",
  description: "Devuelve el valor máximo incluyendo texto.",
  syntax: "MAXA(<columna>)"
},
{
  name: "MAXX",
  description: "Devuelve el valor máximo de una expresión evaluada por fila.",
  syntax: "MAXX(<tabla>, <expresion>)"
},
{
  name: "MIN",
  description: "Devuelve el valor mínimo.",
  syntax: "MIN(<columna> | <expresion1>, <expresion2>)"
},
{
  name: "MINA",
  description: "Devuelve el valor mínimo incluyendo texto.",
  syntax: "MINA(<columna>)"
},
{
  name: "MINUTE",
  description: "Devuelve el minuto.",
  syntax: "MINUTE(<fecha_hora>)"
},
{
  name: "MINX",
  description: "Devuelve el valor mínimo de una expresión por fila.",
  syntax: "MINX(<tabla>, <expresion>)"
},
{
  name: "MONTH",
  description: "Devuelve el mes.",
  syntax: "MONTH(<fecha>)"
},
{
  name: "NETWORKDAYS",
  description: "Devuelve los días laborables entre dos fechas.",
  syntax: "NETWORKDAYS(<fecha_inicio>, <fecha_fin>[, <fin_semana>, <festivos>])"
},
{
  name: "NOW",
  description: "Devuelve la fecha y hora actuales.",
  syntax: "NOW()"
},
{
  name: "PRODUCT",
  description: "Devuelve el producto de una columna.",
  syntax: "PRODUCT(<columna>)"
},
{
  name: "PRODUCTX",
  description: "Devuelve el producto de una expresión evaluada por fila.",
  syntax: "PRODUCTX(<tabla>, <expresion>)"
},
{
  name: "QUARTER",
  description: "Devuelve el trimestre.",
  syntax: "QUARTER(<fecha>)"
},
{
  name: "REMOVEFILTERS",
  description: "Quita filtros de tablas o columnas.",
  syntax: "REMOVEFILTERS([<tabla> | <columna>[,…]])"
},
{
  name: "SECOND",
  description: "Devuelve los segundos.",
  syntax: "SECOND(<fecha_hora>)"
},
{
  name: "SELECTEDVALUE",
  description: "Devuelve el valor cuando solo hay uno seleccionado.",
  syntax: "SELECTEDVALUE(<columna>[, <resultado_alternativo>])"
},
{
  name: "SUM",
  description: "Suma valores de una columna.",
  syntax: "SUM(<columna>)"
},
{
  name: "SUMX",
  description: "Suma una expresión evaluada por fila.",
  syntax: "SUMX(<tabla>, <expresion>)"
},
{
  name: "TIME",
  description: "Convierte números en valor de hora.",
  syntax: "TIME(<hora>, <minuto>, <segundo>)"
},
{
  name: "TIMEVALUE",
  description: "Convierte texto en valor de hora.",
  syntax: "TIMEVALUE(<texto_hora>)"
},
{
  name: "TODAY",
  description: "Devuelve la fecha actual.",
  syntax: "TODAY()"
},
{
  name: "UTCNOW",
  description: "Devuelve la fecha y hora actual en UTC.",
  syntax: "UTCNOW()"
},
{
  name: "UTCTODAY",
  description: "Devuelve la fecha actual en UTC.",
  syntax: "UTCTODAY()"
},
{
  name: "WEEKDAY",
  description: "Devuelve el día de la semana.",
  syntax: "WEEKDAY(<fecha>[, <tipo>])"
},
{
  name: "WEEKNUM",
  description: "Devuelve el número de semana del año.",
  syntax: "WEEKNUM(<fecha>[, <tipo>])"
},
{
  name: "YEAR",
  description: "Devuelve el año.",
  syntax: "YEAR(<fecha>)"
},
{
  name: "YEARFRAC",
  description: "Devuelve la fracción de año entre dos fechas.",
  syntax: "YEARFRAC(<fecha_inicio>, <fecha_fin>[, <base>])"
}
];

