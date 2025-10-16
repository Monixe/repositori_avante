
import { Link } from "react-router-dom";
import Tarjeta from "../components/Tarjeta";
import Footer from '../components/Footer';

import "./Home.css";

function Home() {
  return (
    <div>
     
      <main>
        <h1>🤖 Últimas Noticias Tecnológicas e IA</h1>
        <p>Mantente al día con las innovaciones más importantes del mundo tecnológico</p>
        
        {/* Primera fila - 3 noticias destacadas sobre IA */}
        <div className="tarjetas-container">
          
          {/* Tarjeta 1: GPT-5 y OpenAI */}
          <Tarjeta 
            titulo="OpenAI anuncia GPT-5"
            descripcion="La próxima generación de ChatGPT promete capacidades multimodales avanzadas y razonamiento mejorado para 2024"
            imagen="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=150&h=150&fit=crop"
            textoBoton="Leer más"
            color="#00a67e"
            colorFondo="#f0f9f7"
          />
          
          {/* Tarjeta 2: Quantum Computing */}
          <Tarjeta 
            titulo="Google alcanza supremacía cuántica"
            descripcion="El chip Willow de Google resuelve problemas que tardarían 10 septillones de años a supercomputadoras tradicionales"
            imagen="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=150&h=150&fit=crop"
            color="#4285f4"
            colorFondo="linear-gradient(135deg, #e8f0fe 0%, #d2e3fc 100%)"
          />
          
          {/* Tarjeta 3: Tesla y robots humanoides */}
          <Tarjeta 
            titulo="Tesla Optimus en producción"
            descripcion="Los robots humanoides de Tesla comenzarán trabajos en fábricas a finales de 2024, revolucionando la automatización"
            imagen="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=150&h=150&fit=crop"
            textoBoton="Ver video"
            color="#e31837"
            colorFondo="#fff1f2"
          />
          
        </div>

        {/* Segunda fila - 3 noticias sobre desarrollos tech */}
        <div className="tarjetas-container">
          
          {/* Tarjeta 4: Apple Vision Pro */}
          <Tarjeta 
            titulo="🥽 Apple Vision Pro evoluciona"
            descripcion="La segunda generación del headset de Apple reduce peso 40% y mejora la autonomía a 8 horas de uso continuo"
            color="#007aff"
            colorFondo="#f0f7ff"
          />
          
          {/* Tarjeta 5: GitHub Copilot X */}
          <Tarjeta 
            titulo="GitHub Copilot revoluciona el código"
            descripcion="La nueva versión puede crear aplicaciones completas desde descripciones en lenguaje natural, aumentando productividad 300%"
            textoBoton="Probar gratis"
            color="#238636"
            colorFondo="#f6ffed"
          />
          
          {/* Tarjeta 6: Meta y el Metaverso */}
          <Tarjeta 
            titulo="Meta lanza Horizon Worlds 2.0"
            descripcion="Gráficos fotorrealistas y avatares ultra-detallados marcan el futuro de la realidad virtual social"
            textoBoton="Explorar"
            color="#1877f2"
            colorFondo="linear-gradient(135deg, #e7f3ff 0%, #bedcfa 100%)"
          />
          
        </div>

        <div className="explicacion">
          <h2>📈 Tendencias Tecnológicas 2024-2025</h2>
          <ul>
            <li><strong>Inteligencia Artificial:</strong> GPT-5, Claude 3, y modelos multimodales</li>
            <li><strong>Computación Cuántica:</strong> Chips más potentes y estables</li>
            <li><strong>Realidad Virtual/AR:</strong> Headsets más ligeros y accesibles</li>
            <li><strong>Robótica:</strong> Humanoides trabajando junto a humanos</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default Home;