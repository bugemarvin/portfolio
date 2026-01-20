
import { GoogleGenAI, Type } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async chatWithRecruiter(message: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: message,
        config: {
          systemInstruction: `You are the AI representative for Marvin Kurland, a Software Engineer, Lead Full-Stack Developer, and Machine Learning Engineer based in Nairobi, Kenya. 
          Your goal is to impress technical recruiters and hiring managers.
          Key Information:
          - Marvin is a Co-founder, Lead Software Engineer, and Machine Learning Engineer at Akoto Group Limited.
          - He is based in Nairobi, Kenya and is remote-friendly.
          - He works extensively with Machine Learning to solve complex problems and optimize systems.
          - International experience: UK (Melian Dialogue), US (Curiate), Nigeria (Devatop).
          - Expertise: React, Node.js, Django, PostgreSQL, Redis, and Machine Learning.
          - Values: Clean architecture, automation, high-performance systems, and 99.9% uptime.
          - Education: African Leadership Experience (Software Engineering - Backend focus) and KCA University (IT Diploma).
          Tone: Professional, technically competent, confident, yet humble. 
          Call to Action: If asked about technical deep dives or hiring, suggest contacting Marvin at bugemarvin@outlook.com or using the contact form on this site.
          Keep responses concise (under 3 sentences unless asked for detail).`,
          temperature: 0.6,
        }
      });
      return response.text;
    } catch (error) {
      console.error("Chat error:", error);
      return "I'm currently optimizing my circuits. Please reach out to Marvin directly via the contact form!";
    }
  }

  async editImageWithPrompt(base64Image: string, prompt: string, mimeType: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            { inlineData: { data: base64Image, mimeType } },
            { text: prompt }
          ]
        }
      });

      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
      return null;
    } catch (error) {
      console.error("Image edit error:", error);
      throw error;
    }
  }
}

export const geminiService = new GeminiService();
