import { GoogleGenAI } from "@google/genai";
import { HERO_DATA, EXPERIENCE, SKILLS_DATA, EDUCATION, CERTIFICATIONS } from '../constants';

const apiKey = process.env.API_KEY;
// Initialize with a fallback to avoid crashing if key is missing during dev, 
// though the prompt guarantees it exists.
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const SYSTEM_INSTRUCTION = `
Eres 'LobosAI', un asistente de portafolio inteligente para Daniel Lobos.
Tu objetivo es responder preguntas de los visitantes sobre la experiencia, habilidades y educación de Daniel de manera profesional y concisa, SIEMPRE EN ESPAÑOL.

Aquí está el contexto de Daniel:
Perfil: ${HERO_DATA.role} - ${HERO_DATA.tagline}
Bio: ${HERO_DATA.bio}

Experiencia Laboral:
${EXPERIENCE.map(e => `- ${e.role} en ${e.company} (${e.period}, ${e.location || ''}): ${e.description.join(' ')}`).join('\n')}

Educación:
${EDUCATION.map(e => `- ${e.degree} en ${e.institution} (${e.period}). ${e.description || ''}`).join('\n')}

Certificaciones:
${CERTIFICATIONS.map(c => `- ${c.name} (${c.institution})`).join('\n')}

Resumen de Habilidades:
${SKILLS_DATA.map(s => `${s.subject}: ${s.A}/100`).join(', ')}

Tono: Profesional, entusiasta, útil y conciso.
Restricción: Solo responde preguntas relacionadas con Daniel Lobos y su perfil profesional. Si te preguntan sobre temas generales no relacionados con tecnología o contratación, dirige cortésmente la conversación hacia la experiencia de Daniel.
`;

export const sendMessageToGemini = async (message: string, history: { role: 'user' | 'model'; text: string }[]): Promise<string> => {
  if (!ai) {
    return "Lo siento, no he sido configurado con una clave API todavía.";
  }

  try {
    const model = 'gemini-2.5-flash';
    
    // Construct the chat history for the API
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({
      message: message
    });

    return result.text || "Estoy pensando...";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Encontré un error temporal. Por favor, inténtalo de nuevo más tarde.";
  }
};