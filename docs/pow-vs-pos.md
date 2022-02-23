---
sidebar_position: 5
---

# Proof-of-work (PoW) vs Proof-of-stake (PoS)

Las _&quot;blockchains&quot;_ o &quot;cadena de bloques&quot; son esencialmente bases de datos distribuidas, que se ejecutan en una red de computadoras, conocidas como nodos. Los nodos pueden verificar bloques y datos de transacciones, y lo hacen al llegar a un acuerdo sobre el estado actual de la red. El acuerdo se logra mediante mecanismos de consenso. Consenso significa que se ha llegado a un acuerdo general. En una _&quot;blockchain&quot;_, se formaliza el proceso de llegar a un consenso, y llegar a un consenso significa que al menos el 51 % de los nodos de la red están de acuerdo con el próximo estado global de la red.

Los mecanismos de consenso, también conocidos como protocolos de consenso o algoritmos de consenso, permiten que los sistemas distribuidos (red de computadoras) trabajen juntos y permanezcan seguros. Un mecanismo de consenso. en un sistema cripto económico también ayuda a prevenir ciertos tipos de ataques económicos. En teoría, un atacante puede comprometer el consenso al controlar el 51% de la red. Los mecanismos de consenso están diseñados para hacer inviable este &quot;ataque del 51%&quot;. Se diseñan diferentes mecanismos para resolver este problema de seguridad de diferentes maneras.

Tipos de Mecanismos de Consenso:

1. _ **Proof-of-work** _

**Introducción**

La prueba de trabajo es el algoritmo subyacente que establece la dificultad y las reglas para el trabajo que realizan los mineros. La minería es el &quot;trabajo&quot; en sí mismo. Es el acto de agregar bloques válidos a la cadena. Esto es importante porque la longitud de la cadena ayuda a la red a seguir la cadena de cadena de bloques correcta y a comprender el estado actual de la cadena de bloques. Cuanto más &quot;trabajo&quot; se haga, más larga será la cadena y cuanto mayor sea el número de bloque, más segura puede estar la red del estado actual de las cosas.

Las transacciones de blockchain se procesan en bloques. Cada bloque tiene un:

- dificultad de bloque – por ejemplo: 3,324,092,183,262,715

- mixHash por ejemplo: 0x44bca881b07a6a09f83b130798072441705d9a665c5ac8bdf2f39a3cdf3bee29

- _nonce_ (número arbitrario) – por ejemplo: 0xd3ee432b4fb3d26b

Estos datos de bloque están directamente relacionados con el _&quot;Proof-of-Work (PoW)&quot;._

**¿Qué es el** _ **&quot;Work&quot;** _ **en PoW?**

El protocolo PoW requiere que los mineros pasen por una intensa carrera de prueba y error para encontrar el nonce para un bloque. Solo se pueden agregar a la cadena bloques con un nonce válido.

Cuando compite para crear un bloque, un minero colocará repetidamente un conjunto de datos, que solo puede obtener al descargar y ejecutar la cadena completa (como lo hace un minero), a través de una función matemática. El conjunto de datos se utiliza para generar un mixHash por debajo de un nonce de destino, según lo dictado por la dificultad del bloque. La mejor manera de hacer esto es a través de prueba y error.

La dificultad determina el objetivo del hash. Cuanto menor sea el objetivo, menor será el conjunto de valores hash válidos. Una vez generado, es increíblemente fácil de verificar para otros mineros y clientes. Incluso si una transacción cambiará, el hash sería completamente diferente, lo que indicaría un fraude.

Hashing hace que el fraude sea fácil de detectar. Pero la prueba de trabajo como proceso también es un gran impedimento para atacar la cadena.

**Seguridad**

El objetivo de la prueba de trabajo es extender la cadena. La cadena más larga es más creíble como válida porque ha tenido el mayor trabajo computacional realizado. Dentro del sistema PoW de Ethereum, es casi imposible crear nuevos bloques que eliminen transacciones, creen transacciones falsas o mantengan una segunda cadena. Esto se debe a que un minero malicioso siempre necesitaría resolver el bloque nonce más rápido que los demás.

Para crear constantemente bloques maliciosos pero válidos, necesitaría más del 51% del poder de minería de la red para vencer a todos los demás. Necesitaría mucha potencia informática para poder hacer esta cantidad de &quot;trabajo&quot;. Y la energía gastada podría incluso superar las ganancias que obtendrás en un ataque.

**Economía**

La prueba de trabajo también es responsable de emitir nueva moneda en el sistema e incentivar a los mineros a hacer el trabajo.

Los mineros que crean con éxito un bloque son recompensados ​​con criptomonedas recién acuñadas y todas las tarifas de transacción dentro del bloque. Un minero también puede obtener dinero por un bloque tío. Los bloques tío son bloques válidos creados por un minero prácticamente al mismo tiempo que otro minero extrajo el bloque exitoso. Los bloqueos del tío generalmente ocurren debido a la latencia de la red.

**Finalidad**

Una transacción tiene &quot;finalidad&quot; en Ethereum cuando es parte de un bloque que no puede cambiar.

Debido al hecho de que los mineros trabajan de forma descentralizada, se pueden minar dos bloques válidos al mismo tiempo. Esto crea una bifurcación temporal. Eventualmente, una de estas cadenas se convertirá en la cadena aceptada después de que se haya extraído y agregado un bloque posterior, haciéndola más larga.

Pero para complicar aún más las cosas, es posible que las transacciones rechazadas en la bifurcación temporal se hayan incluido en la cadena aceptada. Esto significa que podría revertirse. Por lo tanto, la finalidad se refiere al tiempo que debe esperar antes de considerar que una transacción es irreversible. Para Ethereum, el tiempo recomendado es de seis bloques o poco más de 1 minuto. Después de seis bloques, puede decir con relativa confianza que la transacción fue exitosa. Puede esperar más tiempo para obtener garantías aún mayores.

**Uso de energía**

Una crítica importante de la prueba de trabajo es la cantidad de producción de energía necesaria para mantener la seguridad de la red. Por ejemplo, para mantener la seguridad y la descentralización, Ethereum en prueba de trabajo consume 73,2 TWh al año, el equivalente energético de un país de tamaño medio como Austria. (Ethereum, 2022).

1. _ **Proof-of-Stake** _

**Introducción**

La prueba de participación la realizan validadores que han apostado criptomonedas para participar en el sistema. Se elige un validador al azar para crear nuevos bloques, compartirlos con la red y ganar recompensas. En lugar de tener que realizar un trabajo informático intenso, simplemente debe haber apostado su criptomoneda en la red. Esto es lo que incentiva un comportamiento saludable en la red.

Los validadores son responsables de lo mismo que los mineros en la prueba de trabajo: ordenar transacciones y crear nuevos bloques para que todos los nodos puedan ponerse de acuerdo sobre el estado de la red.

**Apostar y validadores**

&quot;_Proof-of-Stake&quot;_ es el mecanismo subyacente que activa los validadores al recibir suficiente participación. Para la cadena de bloques Ethereum, por ejemplo, los usuarios deberán apostar 32 ETH para convertirse en validadores. Los validadores se eligen al azar para crear bloques y son responsables de verificar y confirmar los bloques que no crean. La participación de un usuario también se utiliza como una forma de incentivar el buen comportamiento del validador. Por ejemplo, un usuario puede perder una parte de su participación por cosas como desconectarse (fallar en la validación) o toda su participación por colusión deliberada.

**¿Cómo funciona?**

A diferencia de la prueba de trabajo, los validadores no necesitan usar cantidades significativas de poder computacional porque se seleccionan al azar y no compiten. No necesitan minar bloques; solo necesitan crear bloques cuando los eligen y validar los bloques propuestos cuando no lo son. Esta validación se conoce como atestación. Puede pensar en atestiguar diciendo &quot;este bloque me parece bien&quot;. Los validadores obtienen recompensas por proponer nuevos bloques y por dar fe de los que han visto.

Si da fe de bloqueos maliciosos, pierde su participación.

&quot;_ **Sharding&quot;** _

**Sharding** es el proceso de dividir una base de datos horizontalmente para distribuir la carga. En una cadena de bloques, la fragmentación reducirá la congestión de la red y aumentará las transacciones por segundo mediante la creación de nuevas cadenas, conocidas como &quot;fragmentos&quot;.

**-Escalabilidad**

La fragmentación es una buena manera de escalar si desea mantener las cosas descentralizadas, ya que la alternativa es escalar aumentando el tamaño de la base de datos existente. Esto haría que una cadena de bloques fuera menos accesible para los validadores de red porque necesitarían computadoras poderosas y costosas. Con las cadenas de fragmentos, los validadores solo necesitan almacenar/ejecutar datos para el fragmento que están validando, no para toda la red (como sucede hoy). Esto acelera las cosas y reduce drásticamente los requisitos de hardware.

**-Mayor participación en la red**

La fragmentación eventualmente le permitirá ejecutar una cadena de bloques en una computadora portátil o teléfono personal. Esto permitirá que participe un mayor número de personas, aumentando así la seguridad, ya que cuanto más descentralizada sea la red, menor será el área de superficie de ataque.

&quot;**The beacon chain&quot; (cadena de balizas)**

La cadena de balizas recibe información de estado de los fragmentos y la pone a disposición de otros fragmentos, lo que permite que la red permanezca sincronizada. La cadena de balizas también administra los validadores desde el registro de sus depósitos de apuesta hasta la emisión de sus recompensas y penalizaciones.

Así es como funciona ese proceso:

**Validaciones, también conocido como Atestación**

Cuando envía una transacción en un fragmento, un validador será responsable de agregar su transacción a un bloque de fragmento. Los validadores son elegidos algorítmicamente por la cadena de balizas para proponer nuevos bloques. Si no se elige un validador para proponer un nuevo bloque de fragmentos, tendrá que dar fe de la propuesta de otro validador y confirmar que todo se ve como debería. **Es la atestación que se registra en la cadena de balizas en lugar de la transacción en sí.**

Se requieren al menos 128 validadores para dar fe de cada bloque de fragmentos; esto se conoce como &quot;comité&quot;. El comité tiene un marco de tiempo para proponer y validar un bloque de fragmentos. Esto se conoce como &quot;ranura&quot;. Solo se crea un bloque válido por ranura y hay 32 ranuras en una &quot;época&quot;. Después de cada época, el comité se disuelve y se reforma con diferentes participantes aleatorios. Esto ayuda a mantener los fragmentos a salvo de los comités de malos actores.

Una vez que una nueva propuesta de bloque de fragmentos tiene suficientes certificaciones, se crea un &quot;enlace cruzado&quot; que confirma la inclusión del bloque y su transacción en la cadena de balizas. Una vez que hay un vínculo cruzado, el validador que propuso el bloque obtiene su recompensa.

En redes distribuidas, una transacción tiene &quot;finalidad&quot; cuando es parte de un bloque que no puede cambiar. Para hacer esto en la prueba de participación, Casper, un protocolo de finalidad, hace que los validadores acuerden el estado de un bloque en ciertos puntos de control. Siempre que 2/3 de los validadores estén de acuerdo, el bloque está finalizado. Los validadores perderán toda su apuesta si intentan revertir esto más tarde a través de un ataque del 51%.

**Seguridad**

La amenaza de un ataque del 51 % todavía existe en la prueba de participación, pero es aún más riesgoso para los atacantes. Para hacerlo, necesitaría controlar el 51% de la apuesta total de criptomonedas. No solo es mucho dinero, sino que probablemente haría que el valor de ETH cayera. Hay muy pocos incentivos para destruir el valor de una moneda en la que tiene una participación mayoritaria. Hay incentivos más fuertes para mantener la red segura y saludable.

Existirán cortes de apuestas, expulsiones y otras sanciones, coordinadas por la cadena de balizas, para evitar otros actos de mal comportamiento. Los validadores también serán responsables de marcar estos incidentes.

**Uso de energía**

Una ventaja clave de la prueba de participación es su bajo consumo de energía en comparación con la prueba de trabajo. Un estudio realizado sobre la huella de carbono de la red de prueba de participación mostró la diferencia en el uso de energía entre los dos mecanismos de consenso:

| **Blockchain** | **Mecanismo de consenso** | **Consumo de energía total (kWh)** | **Equivalencia / año** |
| --- | --- | --- | --- |
| Bitcoin | Proof-of-Work | 89,780,000,000 | 8,5 millones de hogares estadounidenses |
| Ethereum | Proof-of-Work | 17,300,000,000 | 1.6 millones de hogares estadounidenses |
| Avalanche | Proof-of-Stake | 489,311 | 46 hogares estadounidenses |

_Consumo de energía por tipo de blockchain (Avalanche, 2022)._

[1](#sdfootnote1anc) La trayectoria de concentración representativa (RCP) es una trayectoria de concentración de gases de efecto invernadero (no emisiones) adoptada por el IPCC. Se utilizaron cuatro caminos para el modelado climático y la investigación para el quinto Informe de Evaluación (AR5) del IPCC en 2014. Los caminos describen diferentes futuros climáticos, todos los cuales se consideran posibles dependiendo del volumen de gases de efecto invernadero (GEI) emitidos en los próximos años.
