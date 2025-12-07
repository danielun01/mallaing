const ramos = [
  {
    "codigo": "MAT1610",
    "nombre": "Cálculo I",
    "semestre": 1,
    "prerreq": [],
    "correq": []
  },
  {
    "codigo": "MAT1203",
    "nombre": "Álgebra Lineal",
    "semestre": 1,
    "prerreq": [],
    "correq": []
  },
  {
    "codigo": "QIM100E",
    "nombre": "Química para Ingeniería",
    "semestre": 1,
    "prerreq": [],
    "correq": []
  },
  {
    "codigo": "ING1004",
    "nombre": "Desafíos de la Ingeniería",
    "semestre": 1,
    "prerreq": [],
    "correq": []
  },
  {
    "codigo": "FIL2001",
    "nombre": "Filosofía ¿Para qué?",
    "semestre": 1,
    "prerreq": [],
    "correq": []
  },
  {
    "codigo": "BIO141C",
    "nombre": "Biología de la Célula",
    "semestre": 2,
    "prerreq": [],
    "correq": []
  },
  {
    "codigo": "MAT1620",
    "nombre": "Cálculo II",
    "semestre": 2,
    "prerreq": ["MAT1610"],
    "correq": []
  },
  {
    "codigo": "TTF069",
    "nombre": "Espíritu Santo",
    "semestre": 2,
    "prerreq": [],
    "correq": []
  },
  {
    "codigo": "FIS1514",
    "nombre": "Dinámica",
    "semestre": 2,
    "prerreq": [],
    "correq": ["MAT1203"]
  },
  {
    "codigo": "IIC1103",
    "nombre": "Introducción a la Programación",
    "semestre": 2,
    "prerreq": [],
    "correq": []
  },
  {
    "codigo": "MAT1630",
    "nombre": "Cálculo III",
    "semestre": 3,
    "prerreq": ["MAT1620", "MAT1203"],
    "correq": []
  },
  {
    "codigo": "MAT1640",
    "nombre": "Ecuaciones Diferenciales",
    "semestre": 3,
    "prerreq": ["MAT1203", "MAT1620"],
    "correq": []
  },
  {
    "codigo": "FIS1523",
    "nombre": "Termodinámica",
    "semestre": 3,
    "prerreq": [],
    "correq": ["MAT1630"]
  },
  {
    "codigo": "DPT6351",
    "nombre": "Deportivo 1",
    "semestre": 3,
    "prerreq": [],
    "correq": []
  },
  {
    "codigo": "EUC5000",
    "nombre": "Inglés 5",
    "semestre": 3,
    "prerreq": [],
    "correq": []
  },
  {
    "codigo": "IIC1005",
    "nombre": "Exploratorio Computación",
    "semestre": 3,
    "prerreq": ["IIC1103"],
    "correq": []
  },
  {
    "codigo": "FIS1533",
    "nombre": "Electricidad y Magnetismo",
    "semestre": 4,
    "prerreq": ["MAT1630"],
    "correq": []
  },
  {
    "codigo": "ICS1513",
    "nombre": "Introducción a la Economía",
    "semestre": 4,
    "prerreq": [],
    "correq": ["MAT1620"]
  },
  {
    "codigo": "EYP1113",
    "nombre": "Probabilidad y Estadística",
    "semestre": 4,
    "prerreq": ["MAT1630"],
    "correq": []
  },
  {
    "codigo": "EUC6000",
    "nombre": "Inglés 6",
    "semestre": 4,
    "prerreq": ["EUC5000"],
    "correq": []
  },
  {
    "codigo": "ICS1113",
    "nombre": "Optimización",
    "semestre": 4,
    "prerreq": ["IIC1103","MAT1203","MAT1620"],
    "correq": []
  },
  {
    "codigo": "DPT6840",
    "nombre": "Danza Estilo Libre",
    "semestre": 4,
    "prerreq": [],
    "correq": []
  },
  {
    "codigo": "ING2030",
    "nombre": "Innova",
    "semestre": 5,
    "prerreq": [],
    "correq": []
  },
  {
    "codigo": "ICS2121",
    "nombre": "Métodos de Optimización",
    "semestre": 5,
    "prerreq": ["ICS1113","MAT1630"],
    "correq": []
  },
  {
    "codigo": "ICS2523",
    "nombre": "Microeconomía",
    "semestre": 5,
    "prerreq": ["ICS1113","ICS1513"],
    "correq": []
  },
  {
    "codigo": "ICS2123",
    "nombre": "Modelos Estocásticos",
    "semestre": 5,
    "prerreq": ["ICS1113", "EYP1113"],
    "correq": []
  },
  {
    "codigo": "ELECT-HUM",
    "nombre": "Electivo Humanidades",
    "semestre": 5,
    "prerreq": [],
    "correq": []
  },
  {
    "codigo": "IIQ2930",
    "nombre": "Introducción a la Ingeniería Gastronómica",
    "semestre": 6,
    "prerreq": ["FIS1523"],
    "correq": []
  },
  {
    "codigo": "ICS2563",
    "nombre": "Econometría Aplicada",
    "semestre": 6,
    "prerreq": ["EYP1113"],
    "correq": []
  },
  {
    "codigo": "ICS2813",
    "nombre": "Organización y comportamiento en la Empresa",
    "semestre": 6,
    "prerreq": [],
    "correq": []
  },
  {
    "codigo": "IIC2115",
    "nombre": "Programación como Herramienta para la Ingeniería",
    "semestre": 6,
    "prerreq": ["MAT1610", "IIC1103"],
    "correq": []
  },
  {
    "codigo": "ELECT-SS",
    "nombre": "Electivo Ciencias Sociales",
    "semestre": 6,
    "prerreq": [],
    "correq": []
  },
  {
    "codigo": "ICS2613",
    "nombre": "contabilidad y control de gestión",
    "semestre": 7,
    "prerreq": [],
    "correq": []
  },
  {
    "codigo": "ICS2122",
    "nombre": "Capstone",
    "semestre": 7,
    "prerreq": ["ICS2121","ICS2123","ICS2563"],
    "correq": ["ICS2613","ICS2813"]
  },
  {
    "codigo": "ICS3151",
    "nombre": "Optimización Bajo Incertidumbre",
    "semestre": 7,
    "prerreq": ["ICS1113"],
    "correq": []
  },
  {
    "codigo": "IIC2233",
    "nombre": "Programación Avanzada",
    "semestre": 7,
    "prerreq": ["IIC1103"],
    "correq": []
  },
  {
    "codigo": "ELECT-SUST",
    "nombre": "Electivo Sustentabilidad",
    "semestre": 7,
    "prerreq": [],
    "correq": []
  },
  {
    "codigo": "IIC1253",
    "nombre": "Matemáticas Discretas",
    "semestre": 8,
    "prerreq": ["MAT1203"],
    "correq": []
  },
  {
    "codigo": "IIC2513",
    "nombre": "Tecnología y Aplicaciones Web",
    "semestre": 8,
    "prerreq": ["ICS2122"],
    "correq": []
  },
  {
    "codigo": "IIC2133",
    "nombre": "Estructura de Datos y Algoritmos",
    "semestre": 8,
    "prerreq": ["ICS2122"],
    "correq": []
  },
  {
    "codigo": "IIC2143",
    "nombre": "Ingeniería de Software",
    "semestre": 8,
    "prerreq": ["ICS2122"],
    "correq": []
  },
  {
    "codigo": "IIC2413",
    "nombre": "Bases de Datos",
    "semestre": 8,
    "prerreq": ["ICS2122"],
    "correq": []
  },
  {
    "codigo": "IIC3113",
    "nombre": "Gestión de Proyectos",
    "semestre": 9,
    "prerreq": ["ICS2122"],
    "correq": []
  },
  {
    "codigo": "ICS3413",
    "nombre": "Finanzas",
    "semestre": 9,
    "prerreq": ["ICS2613"],
    "correq": []
  },
  {
    "codigo": "IIC3745",
    "nombre": "Testing",
    "semestre": 9,
    "prerreq": [],
    "correq": ["ICS2122"]
  },
  {
    "codigo": "IIC3585",
    "nombre": "Diseño Avanzado de Aplicaciones Web",
    "semestre": 9,
    "prerreq": ["IIC2233","IIC2413","IIC2513"],
    "correq": []
  },
  {
    "codigo": "ELECT-LIBRE",
    "nombre": "Electivo Libre",
    "semestre": 9,
    "prerreq": [],
    "correq": []
  },
  {
    "codigo": "IIC3533",
    "nombre": "Computación de Alto Rendimiento",
    "semestre": 10,
    "prerreq": ["IIC2333"],
    "correq": []
  },
  {
    "codigo": "IIC3692",
    "nombre": "Tópicos Avanzados en IA",
    "semestre": 10,
    "prerreq": ["IIC2613"],
    "correq": []
  },
  {
    "codigo": "IIC2173",
    "nombre": "Arquitectura de Sistemas de Software",
    "semestre": 10,
    "prerreq": ["IIC2143"],
    "correq": []
  },
  {
    "codigo": "ICS3313",
    "nombre": "Marketing",
    "semestre": 10,
    "prerreq": [],
    "correq": []
  },
  {
    "codigo": "ICS3213",
    "nombre": "Gestión de Operaciones",
    "semestre": 10,
    "prerreq": ["ICS2123"],
    "correq": []
  },
  {
    "codigo": "IIC3144",
    "nombre": "Desarrollo de Software",
    "semestre": 11,
    "prerreq": ["IIC3113", "IIC3533"],
    "correq": []
  },
  {
    "codigo": "ICS3724",
    "nombre": "Economía y Política Ambiental",
    "semestre": 11,
    "prerreq": [],
    "correq": []
  },
  {
    "codigo": "ICS3913",
    "nombre": "Evaluación de Proyectos",
    "semestre": 11,
    "prerreq": ["ICS3313", "ICS3413"],
    "correq": ["ICS3213"]
  }
];


const estadoRamos = JSON.parse(localStorage.getItem("estadoRamos") || "{}");

function cumpleRequisitos(ramo) {
  const aprobados = Object.entries(estadoRamos)
    .filter(([_, val]) => val === "aprobado")
    .map(([cod]) => cod);

  const cumplePrerreq = ramo.prerreq.every(req => aprobados.includes(req));
  const cumpleCorreq = ramo.correq.every(req => aprobados.includes(req) || req === ramo.codigo);

  return cumplePrerreq && cumpleCorreq;
}

function renderMalla() {
  const container = document.getElementById("malla-container");
  container.innerHTML = "";

  const semestres = [...new Set(ramos.map(r => r.semestre))];

  semestres.forEach(sem => {
    const box = document.createElement("div");
    box.className = "semestre";
    box.innerHTML = `<h2>Semestre ${sem}</h2>`;

    ramos.filter(r => r.semestre === sem).forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.textContent = `${ramo.codigo} - ${ramo.nombre}`;

      const estado = estadoRamos[ramo.codigo];

      if (estado === "aprobado") {
        div.classList.add("approved");
      } else if (cumpleRequisitos(ramo)) {
        div.classList.add("available");
        if (ramo.correq.length > 0) div.classList.add("corequisite");
      } else {
        div.classList.add("locked");
      }

      div.addEventListener("click", () => {
        if (!cumpleRequisitos(ramo) && estado !== "aprobado") return;

        estadoRamos[ramo.codigo] = estado === "aprobado" ? "pendiente" : "aprobado";
        localStorage.setItem("estadoRamos", JSON.stringify(estadoRamos));
        renderMalla();
      });

      box.appendChild(div);
    });

    container.appendChild(box);
  });
}

renderMalla();
