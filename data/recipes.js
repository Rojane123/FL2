const recipes = [
  {
    id: 'pupusas',
    name: 'Pupusas',
    image: 'images/pupusas.jpg',
    servings: 4,
    prepTime: '30 minutos',
    cookTime: '20 minutos',
    difficulty: 'Intermedio',
    story: 'Las pupusas son el plato nacional de El Salvador, con más de 2000 años de historia desde las tribus pipiles. Estas gruesas tortillas de maíz rellenas de queso, frijoles o carne representan el corazón de la cultura salvadoreña. Tradicionalmente se sirven con curtido (ensalada de repollo encurtido) y salsa roja.',
    tips: [
      'Mantener la masa cubierta con un paño húmedo para evitar que se seque',
      'No rellenar demasiado - hace difícil el sellado',
      'Cocinar a fuego medio para asegurar cocción uniforme'
    ],
    ingredients: [
      { name: 'Masa harina (harina de maíz)', amount: 2, unit: 'tazas' },
      { name: 'Agua tibia', amount: 1.5, unit: 'tazas' },
      { name: 'Sal', amount: 1, unit: 'cdta' },
      { name: 'Queso mozzarella rallado', amount: 1, unit: 'taza' },
      { name: 'Frijoles refritos', amount: 0.5, unit: 'taza' },
      { name: 'Aceite vegetal', amount: 2, unit: 'cdas' }
    ],
    instructions: [
      'En un tazón grande, mezclar la masa harina y la sal. Agregar gradualmente el agua tibia mientras se mezcla hasta formar una masa suave',
      'Amasar la masa por 2-3 minutos hasta que esté manejable. Cubrir con un paño húmedo y dejar reposar 10 minutos',
      'Dividir la masa en 8 porciones iguales y formar bolas',
      'Aplanar cada bola en un disco de 10 cm usando las palmas',
      'Colocar 2 cucharadas de relleno en el centro, doblar los bordes y sellar completamente',
      'Aplanar suavemente la pupusa sellada hasta unos 15 cm de diámetro',
      'Calentar una plancha o sartén grande a fuego medio. Engrasar ligeramente la superficie',
      'Cocinar las pupusas por 3-4 minutos por cada lado hasta que estén doradas y ligeramente infladas',
      'Servir inmediatamente con curtido y salsa roja'
    ],
    nutrition: {
      calories: 285,
      protein: '12g',
      carbs: '35g',
      fat: '11g'
    }
  },
  {
    id: 'tamales',
    name: 'Tamales Salvadoreños',
    image: 'images/tamales.png',
    servings: 6,
    prepTime: '2 horas',
    cookTime: '90 minutos',
    difficulty: 'Difícil',
    story: 'Los tamales salvadoreños se envuelven en hojas de plátano, dándoles un sabor terroso único. A diferencia de los tamales mexicanos, son más grandes y a menudo incluyen aceitunas, alcaparras y ciruelas. Tradicionalmente se hacen para las celebraciones de Navidad y Año Nuevo, reuniendo a las familias durante horas de preparación.',
    tips: [
      'Las hojas de plátano se pueden encontrar en mercados latinos - las congeladas funcionan bien',
      'Hacer la masa el día anterior para mejor sabor',
      'Cocinar al vapor en lotes si tu vaporera es pequeña'
    ],
    ingredients: [
      { name: 'Masa harina', amount: 3, unit: 'tazas' },
      { name: 'Caldo de pollo tibio', amount: 2.5, unit: 'tazas' },
      { name: 'Manteca o aceite vegetal', amount: 0.5, unit: 'taza' },
      { name: 'Muslos de pollo sin hueso', amount: 680, unit: 'g' },
      { name: 'Hojas de plátano limpias', amount: 12, unit: 'piezas' },
      { name: 'Tomates roma', amount: 3, unit: 'grandes' },
      { name: 'Chile pimiento', amount: 1, unit: 'mediano' },
      { name: 'Cebolla', amount: 1, unit: 'grande' },
      { name: 'Aceitunas verdes', amount: 0.5, unit: 'taza' },
      { name: 'Alcaparras', amount: 2, unit: 'cdas' },
      { name: 'Ciruelas sin hueso', amount: 6, unit: 'piezas' },
      { name: 'Pasta de achiote', amount: 1, unit: 'cda' },
      { name: 'Sal y pimienta', amount: 1, unit: 'al gusto' }
    ],
    instructions: [
      'Limpia las hojas de plátano con un paño húmedo y córtalas en rectángulos de 12 x 10 pulgadas.',
      'Sazona el pollo con sal y pimienta. Cocínalo en una olla con agua hasta que esté tierno, unos 45 minutos. Reserva el caldo y deshebra el pollo.',
      'Sofríe la cebolla, el pimiento y los tomates hasta que estén suaves. Agrega la pasta de achiote y cocina 2 minutos más.',
      'Añade el pollo deshebrado a la mezcla de vegetales. Sazona y deja enfriar.',
      'Bate la manteca hasta que esté esponjosa (5 minutos). Agrega gradualmente la masa harina y el caldo tibio, alternándolos.',
      'Bate la mezcla de masa hasta que esté ligera y esponjosa, unos 10 minutos.',
      'Extiende 1/3 de taza de la mezcla de masa sobre el lado liso de la hoja de plátano.',
      'Añade 2 cucharadas del relleno de pollo, 2 aceitunas, unas alcaparras y media ciruela pasa.',
      'Dobla la hoja de plátano para encerrar completamente el relleno. Ata con cuerda de cocina.',
      'Cocina al vapor los tamales puestos de pie durante 60–90 minutos, hasta que la masa se despegue fácilmente de la hoja.',
      'Deja reposar 10 minutos antes de servir. Sirve caliente con salsa.'
    ],
    nutrition: {
      calories: 420,
      protein: '22g',
      carbs: '38g',
      fat: '18g'
    }
  },
  {
    id: 'yuca-frita',
    name: 'Yuca Frita con Chicharrón',
    image: 'images/yuca-frita.jpg',
    servings: 4,
    prepTime: '15 minutos',
    cookTime: '35 minutos',
    difficulty: 'Fácil',
    story: 'La yuca frita es una comida reconfortante muy querida en El Salvador. La raíz de yuca, traída por los pueblos indígenas, se vuelve crujiente por fuera y esponjosa por dentro cuando se fríe perfectamente. A menudo se sirve con chicharrón (cerdo frito) y curtido, es una comida callejera popular y comida familiar.',
    tips: [
      'Remover el núcleo fibroso de la yuca antes de cocinar',
      'No omitir el paso de hervir - asegura un interior tierno',
      'Freír en lotes pequeños para dorado uniforme'
    ],
    ingredients: [
      { name: 'Fresh yuca root, peeled', amount: 2, unit: 'lbs' },
      { name: 'Salt for boiling', amount: 2, unit: 'tsp' },
      { name: 'Vegetable oil for frying', amount: 3, unit: 'cups' },
      { name: 'Garlic cloves, minced', amount: 4, unit: 'cloves' },
      { name: 'Butter', amount: 2, unit: 'tbsp' },
      { name: 'Fresh lime juice', amount: 2, unit: 'tbsp' },
      { name: 'Cilantro, chopped', amount: 0.25, unit: 'cup' },
      { name: 'Salt to taste', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Peel yuca and cut into 4-inch thick strips. Remove any fibrous core',
      'Bring large pot of salted water to boil. Add yuca and cook 15-20 minutes until fork-tender',
      'Drain yuca thoroughly and let cool for 10 minutes',
      'Heat oil in deep skillet or fryer to 350°F (175°C)',
      'Fry yuca in small batches for 3-4 minutes until golden brown and crispy',
      'Remove and drain on paper towels. Season immediately with salt',
      'In small pan, melt butter and sauté garlic until fragrant, about 1 minute',
      'Drizzle garlic butter over fried yuca',
      'Garnish with lime juice and fresh cilantro',
      'Serve immediately with curtido and salsa roja'
    ],
    nutrition: {
      calories: 320,
      protein: '3g',
      carbs: '45g',
      fat: '14g'
    }
  }
];

// Información cultural adicional
const culturalInfo = {
  title: 'Sobre la Cocina Salvadoreña',
  description: 'La cocina salvadoreña es una rica mezcla de influencias indígenas pipiles, coloniales españolas y modernas. El maíz, los frijoles y el arroz forman la base de la mayoría de las comidas, mientras que las frutas y verduras tropicales añaden sabores vibrantes.',
  traditions: [
    'Las pupusas se comen tradicionalmente con las manos, nunca con utensilios',
    'Los tamales son una tradición navideña, con familias reuniéndose para hacer cientos',
    'El curtido (ensalada de repollo encurtido) acompaña la mayoría de comidas fritas',
    'La horchata y el tamarindo son bebidas tradicionales populares'
  ]
};
