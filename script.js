// Estructura con todos los ramos y sus pre-requisitos
const malla = [
  {
    semestre: "Primer semestre",
    ramos: [
      { nombre: "Cálculo Diferencial", abre: ["Cálculo Integral", "Física"] },
      { nombre: "Botánica general y taxonómica" },
      { nombre: "Química general", abre: ["Química inorgánica", "Química orgánica I", "Fisicoquímica"] },
      { nombre: "Biología general", abre: ["Biología molecular"] },
      { nombre: "Historia de la farmacia", abre: ["Legislación Farmacéutica"] },
      { nombre: "Comunicación", abre: ["Metodología de la investigación"] },
    ],
  },
  {
    semestre: "Segundo semestre",
    ramos: [
      { nombre: "Cálculo Integral", abre: ["Fisicoquímica", "Bioestadística"], requiere: ["Cálculo Diferencial"] },
      { nombre: "Física", requiere: ["Cálculo Diferencial"] },
      { nombre: "Química inorgánica", abre: ["Química analítica"], requiere: ["Química general"] },
      { nombre: "Química orgánica I", abre: ["Química orgánica II", "Bioquímica"], requiere: ["Química general"] },
      { nombre: "Biología molecular", abre: ["Microbiología y parasitología"], requiere: ["Biología general"] },
      { nombre: "Desarrollo humano", abre: ["Ética farmacéutica y bioética"] },
    ],
  },
  {
    semestre: "Tercer semestre",
    ramos: [
      { nombre: "Fisicoquímica", abre: ["Operaciones unitarias"], requiere: ["Cálculo Integral", "Química general"] },
      { nombre: "Química analítica", abre: ["Análisis instrumental"], requiere: ["Química inorgánica"] },
      { nombre: "Química orgánica II", abre: ["Química farmacéutica"], requiere: ["Química orgánica I"] },
      { nombre: "Bioquímica", abre: ["Inmunología", "Morfofisiología"], requiere: ["Química orgánica I"] },
      { nombre: "Microbiología y parasitología", requiere: ["Biología molecular"] },
      { nombre: "Ética farmacéutica y bioética", requiere: ["Desarrollo humano"] },
    ],
  },
  {
    semestre: "Cuarto semestre",
    ramos: [
      { nombre: "Operaciones unitarias", abre: ["Tecnología farmacéutica de medicamentos solidos"], requiere: ["Fisicoquímica"] },
      { nombre: "Análisis instrumental", abre: ["Farmacognosia y fitoquímica", "Nutrición y bromatología", "Análisis y control de medicamentos y otros productos"], requiere: ["Química analítica"] },
      { nombre: "Química farmacéutica", abre: ["Biofarmacia y farmacocinética"], requiere: ["Química orgánica II"] },
      { nombre: "Inmunología", abre: ["Biotecnología"], requiere: ["Bioquímica"] },
      { nombre: "Morfofisiología", abre: ["Farmacología I", "Fisiopatología"], requiere: ["Bioquímica"] },
      { nombre: "Educación en salud" },
      { nombre: "Electiva de contexto I", abre: ["Electiva de contexto II"] },
    ],
  },
  {
    semestre: "Quinto semestre",
    ramos: [
      { nombre: "Tecnología farmacéutica de medicamentos solidos", abre: ["Tecnología farmacéutica de medicamentos líquidos"], requiere: ["Operaciones unitarias"] },
      { nombre: "Farmacognosia y fitoquímica", requiere: ["Análisis instrumental"] },
      { nombre: "Biofarmacia y farmacocinética", requiere: ["Química farmacéutica"] },
      { nombre: "Farmacología I", abre: ["Farmacología II", "Toxicología"], requiere: ["Morfofisiología"] },
      { nombre: "Fisiopatología", requiere: ["Morfofisiología"] },
      { nombre: "Metodología de la investigación", abre: ["Diseño y proyecto de investigación"], requiere: ["Comunicación"] },
      { nombre: "Electiva de contexto II", abre: ["Electiva de profundización III"], requiere: ["Electiva de contexto I"] },
    ],
  },
  {
    semestre: "Sexto semestre",
    ramos: [
      { nombre: "Tecnología farmacéutica de medicamentos líquidos", abre: ["Tecnología farmacéutica de semisólidos y magistrales"], requiere: ["Tecnología farmacéutica de medicamentos solidos"] },
      { nombre: "Bioestadística", abre: ["Análisis y control de medicamentos y otros productos"], requiere: ["Cálculo Integral"] },
      { nombre: "Biotecnología", requiere: ["Inmunología"] },
      { nombre: "Farmacología II", abre: ["Farmacia clínica", "Farmacoterapéutica"], requiere: ["Farmacología I"] },
      { nombre: "Toxicología", abre: ["Salud ocupacional"], requiere: ["Farmacología I"] },
      { nombre: "Diseño y proyecto de investigación", abre: ["Trabajo de grado"], requiere: ["Metodología de la investigación"] },
      { nombre: "Electiva de profundización III", abre: ["Electiva de profundización IV"], requiere: ["Electiva de contexto II"] },
    ],
  },
  {
    semestre: "Séptimo semestre",
    ramos: [
      { nombre: "Tecnología farmacéutica de semisólidos y magistrales", abre: ["Tecnología de cosméticos"], requiere: ["Tecnología farmacéutica de medicamentos líquidos"] },
      { nombre: "Nutrición y bromatología", abre: ["Tecnología de alimentos"], requiere: ["Análisis instrumental"] },
      { nombre: "Farmacia clínica", abre: ["Farmacia hospitalaria y comunitaria"], requiere: ["Farmacología II"] },
      { nombre: "Farmacoterapéutica", requiere: ["Farmacología II"] },
      { nombre: "Salud ocupacional", abre: ["Salud pública"], requiere: ["Toxicología"] },
      { nombre: "Legislación Farmacéutica", abre: ["Sistema de gestión de calidad", "Administración y gestión farmacéutica industrial", "Administración y gestión de servicios farmacéuticos"], requiere: ["Historia de la farmacia"] },
      { nombre: "Electiva de profundización IV", abre: ["Electiva de profundización V"], requiere: ["Electiva de profundización III"] },
    ],
  },
  {
    semestre: "Octavo semestre",
    ramos: [
      { nombre: "Tecnología de cosméticos", abre: ["Diseño y formulación de medicamentos y productos sanitarios", "Tecnología de productos naturales y medicamentos homeopáticos"], requiere: ["Tecnología farmacéutica de semisólidos y magistrales"] },
      { nombre: "Tecnología de alimentos", requiere: ["Nutrición y bromatología"] },
      { nombre: "Análisis y control de medicamentos y otros productos", abre: ["Sistema de gestión de calidad"], requiere: ["Análisis instrumental", "Bioestadística"] },
      { nombre: "Farmacia hospitalaria y comunitaria", abre: ["Administración y gestión de servicios farmacéuticos"], requiere: ["Farmacia clínica"] },
      { nombre: "Salud pública", requiere: ["Salud ocupacional"] },
      { nombre: "Electiva de profundización V", abre: ["Electiva de profundización VI"], requiere: ["Electiva de profundización IV"] },
    ],
  },
  {
    semestre: "Noveno semestre",
    ramos: [
      { nombre: "Diseño y formulación de medicamentos y productos sanitarios", requiere: ["Tecnología de cosméticos"] },
      { nombre: "Tecnología de productos naturales y medicamentos homeopáticos", requiere: ["Tecnología de cosméticos"] },
      { nombre: "Sistema de gestión de calidad", requiere: ["Legislación Farmacéutica", "Análisis y control de medicamentos y otros productos"] },
      { nombre: "Administración y gestión farmacéutica industrial", requiere: ["Legislación Farmacéutica"] },
      { nombre: "Administración y gestión de servicios farmacéuticos", requiere: ["Legislación Farmacéutica", "Farmacia hospitalaria y comunitaria"] },
      { nombre: "Electiva de profundización VI", abre: ["Electiva de profundización VII", "Electiva de profundización VIII", "Electiva de profundización IX"], requiere: ["Electiva de profundización V"] },
    ],
  },
  {
    semestre: "Décimo semestre",
    ramos: [
      { nombre: "Prácticas académicas" },
      { nombre: "Trabajo de grado", requiere: ["Diseño y proyecto de investigación"] },
      { nombre: "Electiva de profundización VII", requiere: ["Electiva de profundización VI"] },
      { nombre: "Electiva de profundización VIII", requiere: ["Electiva de profundización VI"] },
      { nombre: "Electiva de profundización IX", requiere: ["Electiva de profundización VI"] },
    ],
  },
];

// Función para crear la malla en HTML
const mallaDiv = document.getElementById("malla");
const estadoRamos = new Map();

malla.forEach((sem) => {
  const label = document.createElement("div");
  label.className = "semestre-label";
  label.textContent = sem.semestre;
  mallaDiv.appendChild(label);

  sem.ramos.forEach((ramo) => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.textContent = ramo.nombre;
    div.dataset.nombre = ramo.nombre;

    estadoRamos.set(ramo.nombre, {
      aprobado: false,
      nodo: div,
      ...ramo,
    });

    mallaDiv.appendChild(div);
  });
});

// Función para actualizar visualmente qué ramos se pueden desbloquear
function actualizarEstado() {
  estadoRamos.forEach((ramo, nombre) => {
    if (ramo.aprobado) return;

    const requisitos = ramo.requiere || [];
    const todosAprobados = requisitos.every((r) => estadoRamos.get(r)?.aprobado);

    if (requisitos.length === 0 || todosAprobados) {
      ramo.nodo.classList.add("desbloqueado");
    } else {
      ramo.nodo.classList.remove("desbloqueado");
    }
  });
}

// Asignar interacciones
estadoRamos.forEach((ramo, nombre) => {
  ramo.nodo.addEventListener("click", () => {
    if (!ramo.nodo.classList.contains("desbloqueado")) return;

    ramo.aprobado = true;
    ramo.nodo.classList.add("aprobado");

    (ramo.abre || []).forEach((destino) => {
      const target = estadoRamos.get(destino);
      if (target) {
        actualizarEstado();
      }
    });

    actualizarEstado();
  });
});

actualizarEstado();
