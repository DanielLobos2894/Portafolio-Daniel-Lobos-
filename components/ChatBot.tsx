import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "¡Hola! Soy LobosAI. Pregúntame lo que quieras sobre las habilidades, proyectos o experiencia de Daniel.",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Prepare history for API
    const history = messages.map(m => ({ role: m.role, text: m.text }));
    
    const responseText = await sendMessageToGemini(input, history);

    const botMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-primary/40 ${
          isOpen ? 'bg-gray-700 text-white rotate-90 opacity-0 pointer-events-none' : 'bg-gradient-to-r from-primary to-secondary text-white'
        }`}
        aria-label="Abrir Chat"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-6 z-50 w-[90vw] sm:w-96 glass-panel rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 transform origin-bottom-right flex flex-col ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-gray-900/80 p-4 flex justify-between items-center border-b border-gray-700 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-primary to-secondary p-1.5 rounded-lg shadow-lg shadow-primary/20">
              <Bot size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm">Asistente LobosAI</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_#22c55e]"></span>
                <span className="text-[10px] text-gray-300 uppercase tracking-wider font-medium">Online</span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white transition-colors bg-white/5 p-1.5 rounded-full hover:bg-white/10"
          >
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4 bg-dark/40">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg ${
                msg.role === 'user' ? 'bg-gray-700' : 'bg-gradient-to-br from-primary to-secondary'
              }`}>
                {msg.role === 'user' ? <User size={14} className="text-gray-300" /> : <Bot size={14} className="text-white" /> }
              </div>
              <div
                className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-md ${
                  msg.role === 'user'
                    ? 'bg-primary text-white rounded-tr-none'
                    : 'bg-gray-800 text-gray-200 rounded-tl-none border border-gray-700'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-2">
               <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-primary to-secondary">
                 <Bot size={14} className="text-white" />
              </div>
              <div className="bg-gray-800 px-4 py-4 rounded-2xl rounded-tl-none border border-gray-700">
                <div className="flex space-x-1.5">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 bg-gray-900/90 border-t border-gray-700 backdrop-blur-md">
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Pregunta sobre mi experiencia..."
              className="w-full bg-gray-800 text-white pl-4 pr-12 py-3 rounded-xl border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm placeholder-gray-500 transition-all shadow-inner"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute right-2 p-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
            >
              <Send size={16} />
            </button>
          </div>
          <p className="text-[10px] text-center text-gray-600 mt-2 font-medium">
            Potenciado por Gemini 2.5 Flash
          </p>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
