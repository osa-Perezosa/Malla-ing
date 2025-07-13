const malla = [
  { semestre: "1er Semestre", ramos: [
    "Estrategias para el aprendizaje",
    "Fundamentos de Economía",
    "Métodos Cuantitativos",
    "Fundamentos de gestión de empresas",
    "Herramientas informáticas para los negocios",
    "English I"
  ]},
  { semestre: "2do Semestre", ramos: [
    "Álgebra",
    "Gestión estratégica de empresas",
    "Lógica para los negocios",
    "Fundamentos de Contabilidad",
    "Comunicación para los negocios",
    "English II"
  ]},
  { semestre: "3er Semestre", ramos: [
    "Antropología",
    "Microeconomía I",
    "Cálculo aplicado a los negocios",
    "Legislación laboral",
    "Contabilidad gerencial",
    "English III"
  ]},
  { semestre: "4to Semestre", ramos: [
    "Legislación para apertura y cierre de empresas",
    "Marketing",
    "Finanzas",
    "Professional English I",
    "Práctica Profesional temprana"
  ]},
  { semestre: "5to Semestre", ramos: [
    "Ética",
    "Microeconomía II",
    "Estadística para la toma de decisiones",
    "Herramientas informáticas avanzadas para los negocios",
    "Transformación digital y negocios",
    "Finanzas Gerenciales",
    "Professional English II"
  ]},
  { semestre: "6to Semestre", ramos: [
    "Professional English III",
    "Política Macroeconómica",
    "Econometría para la gestión",
    "Inteligencia de mercado",
    "Evaluación de Proyectos"
  ]},
  { semestre: "7mo Semestre", ramos: [
    "Electivo de Formación Integral",
    "Impacto social de las políticas económicas",
    "Impuesto a la renta e IVA",
    "Sostenibilidad Empresarial",
    "Gestión de las personas y de los talentos",
    "Liderazgo, negociación y equipos"
  ]},
  { semestre: "8vo Semestre", ramos: [
    "Gerencia estratégica y control de gestión",
    "Desarrollo Organizacional",
    "Comercio Exterior"
  ]},
  { semestre: "9no Semestre", ramos: [
    "Gestión Logística y de la Producción",
    "Tópicos de Gestión",
    "Coaching Laboral",
    "Electivo de Especialidad"
  ]}
];

const contenedor = document.getElementById("contenedor-malla");

malla.forEach((bloque) => {
  const div = document.createElement("div");
  div.className = "semestre";
  div.innerHTML = `<h2>${bloque.semestre}</h2><ul>${bloque.ramos.map(r => `<li>${r}</li>`).join("")}</ul>`;
  contenedor.appendChild(div);
});
