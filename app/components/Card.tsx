export default function Card() {
  return (
    <div className="flex flex-col w-96 bg-stone-100 rounded-3xl overflow-hidden shadow-2xl border-4 border-stone-400">
      {/* Imagen de montañas */}
      <div className="h-72 relative overflow-hidden">
        {/* Cielo beige */}
        <div className="absolute inset-0 bg-stone-200"></div>
        
        {/* Nubes */}
        <div className="absolute top-6 left-8 w-10 h-3 bg-white rounded-full opacity-80"></div>
        <div className="absolute top-6 right-12 w-12 h-3 bg-white rounded-full opacity-80"></div>
        
        {/* SVG para montañas con picos irregulares */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 384 288" preserveAspectRatio="none">
          {/* Montaña izquierda - Magenta con picos */}
          <path
            d="M 0 180 L 40 160 L 60 170 L 80 150 L 100 160 L 120 140 L 140 155 L 160 180 L 160 288 L 0 288 Z"
            fill="#be123c"
          />
          
          {/* Montaña central - Naranja con picos (la más alta) */}
          <path
            d="M 100 200 L 130 160 L 150 170 L 170 140 L 192 120 L 214 140 L 234 170 L 254 160 L 284 200 L 284 288 L 100 288 Z"
            fill="#f97316"
          />
          
          {/* Montaña derecha - Roja con picos */}
          <path
            d="M 224 180 L 260 155 L 280 165 L 300 150 L 320 160 L 344 170 L 384 190 L 384 288 L 224 288 Z"
            fill="#dc2626"
          />
          
          {/* Capa de bosque rojo con textura vertical */}
          <rect y="200" width="384" height="40" fill="#991b1b" />
          
          {/* Líneas verticales para simular árboles delgados en el bosque rojo */}
          <g opacity="0.6">
            {Array.from({ length: 40 }).map((_, i) => (
              <line
                key={i}
                x1={i * 10}
                y1="200"
                x2={i * 10}
                y2="240"
                stroke="#7f1d1d"
                strokeWidth="2"
              />
            ))}
          </g>
          
          {/* Franja oscura del bosque */}
          <rect y="240" width="384" height="48" fill="#450a0a" />
          
          {/* Árboles negros en primer plano */}
          <polygon points="30,288 40,245 50,288" fill="#000000" />
          <polygon points="70,288 80,250 90,288" fill="#000000" />
          <polygon points="110,288 120,242 130,288" fill="#000000" />
          <polygon points="150,288 160,248 170,288" fill="#000000" />
          <polygon points="190,288 200,245 210,288" fill="#000000" />
          <polygon points="230,288 240,250 250,288" fill="#000000" />
          <polygon points="270,288 280,242 290,288" fill="#000000" />
          <polygon points="310,288 320,248 330,288" fill="#000000" />
          <polygon points="350,288 360,245 370,288" fill="#000000" />
        </svg>
      </div>

      {/* Contenido */}
      <div className="flex flex-col gap-4 p-6 bg-stone-100">
        <h2 className="text-4xl font-bold text-black">Red Heaven</h2>
        
        <p className="text-gray-500 text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! 
          Maiores et perferendis eaque exercitationem praesentium nihil.
        </p>
        
        {/* Tags */}
        <div className="flex flex-row gap-3 flex-wrap">
          <span className="bg-red-900 text-white px-5 py-2 rounded-full text-sm">
            #tailwind
          </span>
          <span className="bg-red-900 text-white px-5 py-2 rounded-full text-sm">
            #frontendeverything
          </span>
        </div>
      </div>
    </div>
  );
}
