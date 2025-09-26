# 00149524_practica4_seccion1

Pregunta página 8:
¿Qué ocurre en cada caso presentado anteriormente con los operadores y porqué JS me permite esto?

const expresion1 = (3 + 7) * 10 ;
Por el orden establecido, primero resuelve la suma, después la resta.

const expresion2 = 3 + 7 * 10 ;
Por la jerarquía de operaciones, primero el producto, luego la suma.

const expresion3 = 2 ** 3 ** 2;
El último 2 es potencia del 3, quien es potencia del dos. Sigue el orden asignado de izquierda a derecha.


let inicio +5;
Establece el valor de la variable con la que vamos a trabajar.

const sumaYAsigna = ++inicio;
Aumenta inicio antes de asignarlo a la costante sumaYAsigna.

const asignaYSuma inicio++;
Asigna valor actual de inicio a asignaYSuma antes de incrementarlo.

const restaYAsigna --inicio;
Resta de inicio antes de asignarlo a restaYAsigna.

const asignaYResta inicio--;
Asigna el valor actual de inicio a asignaYResta antes de restarle.

console.log(inicio);
Valor final de inicio, después de lo anterior.

let x = 1
let y = 2
let z = 3
x = y; //x ahora es 2
x += z; //x es 5
x *= y; //x es 10, multiplica los valores
x /= y; // x se divide entre y, es 5
x %= y; // el residuo de la division (5/2) es 1

Javascript permite esta precedencia de operadores para asegurarse que exista una forma determinada para hacer operaciones. Las respuestas variarian por que permitiría distintas formas de interpretar los elementos.


Pregunta página 9:
¿El comportamiento de los flujos de control es similar a otros lenguajes y ambientes de desarrollo?
Si. Varias de estas estructuras y comparaciones se utilizan de formas parecidas en cc, c++ y java. Tiene aspectos nuevos como "===", pero la mayoría si estan presentes en otos entornos.