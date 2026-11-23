/* ============================================================
   CONTENIDO DE LA APP — este es el único archivo que cambia
   de un autor a otro. El diseño y la lógica viven en index.html.
   ============================================================ */
window.APP = {
  config: {
    wa: "522281400875",                 // WhatsApp con lada de país, sin + ni espacios
    endpoint: "",                       "https://script.google.com/macros/s/AKfycbwSet_zJX6yJHQPueAMhPKmGIZPCQPzsiCXHCN1N5HAhbYzC7wmN6oATssE6WPLCT-O/exec",
    comunidad: "",                      // Enlace de invitación a la comunidad 12.2 (opcional)
    privacidad: "",                     // Enlace al aviso de privacidad completo (recomendado)
    sitio: "lo-que-tuvo-que-morir-test.vercel.app", // Dirección que aparece en la tarjeta para historias
    firmado: "https://lo-que-tuvo-que-morir-preventa.vercel.app/",
    amz: "https://a.co/d/004KuSou",
    ml: "https://articulo.mercadolibre.com.mx/MLM-3831012195-lo-que-tuvo-que-morir-_JM",
    editorial: "https://waseditorial.com/bookstore/#!/Lo-que-tuvo-que-morir/p/873460987"
  },

  libro: {
    titulo: "Lo que tuvo que morir",
    subtitulo: "Un camino de fe, pérdida y transformación para recordar quién eres y vivir en paz",
    autor: "Antonio Salazar",
    autorCorto: "Antonio",
    editorial: "WAS Editorial",
    portada: "libro.jpg",
    gancho: "¿Qué queda de ti cuando se rompe aquello que usabas para demostrar quién eras?",
    fraseFinal: { t: "…hoy entiendo que hay momentos en los que cambiar significa dejar morir una versión de ti que ya no puede seguir viviendo.", r: "Capítulo 6" },
    actos: [["Acto I", "La ruptura"], ["Acto II", "El camino"], ["Acto III", "La transformación"]],
    evento: { dia: "3", mes: "dic", titulo: "Presentación en la FIL Guadalajara", cuando: "Jueves 3 de diciembre de 2026, 7:30 pm" }
  },

  intro: {
    titulo: "¿Qué tiene que morir en ti?",
    texto: "15 frases, tres minutos. Descubre qué versión de ti necesita morir para que nazca la siguiente, y llévate un camino de 7 días para soltarla.",
    verso: { t: "Si el grano de trigo no cae en la tierra y muere, él solo queda; mas si muriere, mucho fruto lleva.", r: "Juan 12:24 (Reina-Valera 1909)" }
  },

  escala: ["Nada", "Un poco", "Mucho, así soy yo"],

  muertes: {
    P: {
      nombre: "El personaje", define: "Creer que vales por lo que logras",
      nace: "Un valor que no depende de lo que logras",
      cap: 4, capTitulo: "No eres lo que lograste",
      reflexion: "Construiste mucho, y eso está bien. El problema empieza cuando lo que haces se vuelve lo que eres: entonces cada crítica pesa como una amenaza y ningún logro alcanza.",
      cita: "Mis logros son importantes, pero mis logros no son mi valor.",
      verso: { t: "Y Samuel dijo: ¿Se complace el Señor tanto en holocaustos y sacrificios, como en que se obedezca la voz del Señor? Ciertamente el obedecer es mejor que los sacrificios.", r: "1 Samuel 15:22 (NBLA)" },
      tecnica: { titulo: "Separar el fruto de la raíz", pasos: [
        "Identifica tu “jefatura”: el logro que más identidad te ha dado. Pregúntate quién quedaría si desapareciera mañana.",
        "Nota cuándo proteges la imagen en vez de la verdad: ante una crítica, observa tu primera reacción.",
        "Dale tiempo esta semana a alguien frente a quien no tengas nada que demostrar."] },
      audio: ""
    },
    C: {
      nombre: "El control", define: "Exigir entenderlo todo antes de dar el paso",
      nace: "La confianza para dar el siguiente paso",
      cap: 2, capTitulo: "Cuando Dios rompe el mapa",
      reflexion: "Quieres ver toda la ruta antes de moverte. Pero muchas veces Dios no entrega el mapa completo: entrega una lámpara para el siguiente paso.",
      cita: "El mapa te muestra toda la ruta. La lámpara solo te muestra el siguiente paso.",
      verso: { t: "Vete de tu tierra, de entre tus parientes y de la casa de tu padre, a la tierra que Yo te mostraré.", r: "Génesis 12:1 (NBLA)" },
      tecnica: { titulo: "Caminar sin el mapa completo", pasos: [
        "Identifica qué le exiges a Dios entender primero. Que sea la decisión exacta, no “mi futuro” en general.",
        "Nombra el miedo concreto detrás de tu necesidad de control: al qué dirán, a parecer vulnerable, a fracasar.",
        "Pregúntate qué harías si tuvieras la promesa y no el mapa, y da ese paso pequeño esta semana."] },
      audio: ""
    },
    N: {
      nombre: "El niño escondido", define: "Esconder de dónde vienes para ser aceptado",
      nace: "Tu origen como raíz, no como vergüenza",
      cap: 5, capTitulo: "El niño que intenté esconder",
      reflexion: "Aprendiste a mostrar una versión presentable de ti y a rendir de más para merecer un lugar. Pero lo que escondiste no te resta valor: es la raíz de quien eres.",
      cita: "El niño que intentaste esconder no era tu debilidad. Era tu origen.",
      verso: { t: "Pero el Señor dijo a Samuel: No mires a su apariencia, ni a lo alto de su estatura... porque el Señor no mira lo que mira el hombre; pues el hombre mira lo que está delante de sus ojos, pero el Señor mira el corazón.", r: "1 Samuel 16:7 (NBLA)" },
      tecnica: { titulo: "Volver al niño que fuiste", pasos: [
        "Identifica lo que escondiste (tu barrio, tu familia, tu historia económica, tu apellido) y nómbralo. No para exponerlo, sino para dejar de gastar energía escondiéndolo.",
        "Escríbele una carta al niño que fuiste. No para corregirlo, sino para decirle lo que nadie le dijo.",
        "Elige algo que te dio vergüenza, pregúntate qué te enseñó y habla con Dios desde donde estás, no desde donde quisieras estar."] },
      audio: ""
    },
    J: {
      nombre: "La justificación", define: "Explicar lo que sabes que está mal en vez de asumirlo",
      nace: "La verdad que te devuelve la paz",
      cap: 6, capTitulo: "Cuando proveer no es suficiente",
      reflexion: "Cada explicación te da un poco de alivio, pero también te aleja un poco de la verdad. Lo que tiene que morir no eres tú: es la versión que se protege con excusas.",
      cita: "Cuando una persona empieza a justificar lo que sabe que está mal, poco a poco deja de distinguir la verdad dentro de sí.",
      verso: { t: "El que encubre sus pecados no prosperará, pero el que los confiesa y los abandona hallará misericordia.", r: "Proverbios 28:13 (NBLA)" },
      tecnica: { titulo: "Enfrentar lo que todavía está oculto", pasos: [
        "Nombra lo que has estado justificando, solo para ti y sin adornos. El contexto ayuda a entender; la justificación impide responsabilizarte.",
        "Pregúntate a quién le debes una conversación honesta: tu pareja, un amigo cercano, un terapeuta o Dios.",
        "Define qué versión de ti tiene que morir (una conducta, un hábito, una mentira sostenida) y nómbrala. Ese es el primer paso."] },
      audio: ""
    },
    R: {
      nombre: "La armadura", define: "Creer que mostrarte te hace débil",
      nace: "La fortaleza de mostrarte",
      cap: 10, capTitulo: "El primer estado de WhatsApp",
      reflexion: "Aprendiste que para ser respetado había que parecer fuerte y no necesitar a nadie. Pero callar lo que sientes también cuesta, y casi siempre lo pagan quienes más quieres.",
      cita: "Ese día comenzó a morir una idea que había gobernado buena parte de mi vida: la idea de que debía parecer fuerte, ocupado, serio e imperturbable para que los demás me respetaran.",
      verso: { t: "El que es fiel en lo muy poco, también en lo más es fiel.", r: "Lucas 16:10 (RVR1960)" },
      tecnica: { titulo: "El primer gesto desde adentro", pasos: [
        "Identifica algo que has querido decir y no has dicho (un agradecimiento, una disculpa, una verdad) y escríbelo primero para ti.",
        "Pregúntate qué es lo peor que podría pasar si lo dices: ¿ese miedo corresponde a la realidad o a una historia que llevas años contándote?",
        "Elige un gesto pequeño esta semana: un mensaje, una llamada, una palabra en voz alta. Si la persona ya no está, escríbeselo de todas formas."] },
      audio: ""
    }
  },

  /* Reactivos: [clave de la muerte, frase en primera persona]. Intercalados. */
  reactivos: [
    ["P", "Si alguien critica mi trabajo, primero defiendo mi imagen y después pienso si tiene razón."],
    ["C", "Digo “voy a pensarlo un poco más” una y otra vez, aunque en el fondo lo que tengo es miedo."],
    ["N", "Evito hablar de dónde vengo o de lo que me faltó; si lo cuento, lo cuento en versión “presentable”."],
    ["J", "Cuando sé que algo no está bien, me explico: “es el cansancio”, “es el trabajo”, “no es tan grave”."],
    ["R", "Cuando algo me duele, lo guardo o lo resuelvo trabajando; casi nunca digo cómo me siento."],
    ["P", "Apenas alcanzo una meta ya estoy pensando en la siguiente; ningún logro me alcanza."],
    ["C", "No me muevo hasta tener el plan completo y la garantía de que saldrá bien."],
    ["N", "Trabajo, estudio o rindo de más para merecer algo, y me cuesta detenerme."],
    ["J", "Pienso que proveer y resolver ya es cumplir, y evito la conversación incómoda que de verdad hace falta."],
    ["R", "Me cuesta agradecer o decir lo que siento en voz alta, sobre todo frente a otros."],
    ["P", "Si perdiera mi puesto, mi negocio o mi reconocimiento, no sabría quién soy."],
    ["C", "Intento controlar mi imagen, mi dinero y mis emociones, y cuando algo se me escapa me gana la ansiedad."],
    ["N", "Me cuesta pedir ayuda, atención o un abrazo; prefiero que me vean “bien” a que me vean necesitado."],
    ["J", "Hay algo que no he dicho a quien más cerca está porque temo perder la imagen que construí."],
    ["R", "Juzgo a quien se muestra vulnerable, o reacciono con enojo cuando me tocan una herida."]
  ],

  autores: {
    titulo: "Esta app se hizo a partir de un libro. La tuya también puede.",
    puntos: [
      "Un test basado en tu libro, con tus capítulos, tus citas y tu voz.",
      "Registro de lectores y números reales: quién lo hizo y quién quiso comprar.",
      "Un código QR para tu mesa en la FIL y tus presentaciones.",
      "Botones directos para vender ejemplares firmados."
    ]
  }
};
