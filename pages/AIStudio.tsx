
import React, { useState, useRef } from 'react';
import { Upload, Wand2, RefreshCw, Image as ImageIcon, Download, Trash2, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { geminiService } from '../services/geminiService';

const AIStudio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setProcessedImage(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = async () => {
    if (!selectedImage || !prompt.trim()) return;

    setIsLoading(true);
    setError(null);
    try {
      const base64Data = selectedImage.split(',')[1];
      const mimeType = selectedImage.split(';')[0].split(':')[1];
      
      const result = await geminiService.editImageWithPrompt(base64Data, prompt, mimeType);
      if (result) {
        setProcessedImage(result);
      } else {
        setError("Failed to process image. Try a different prompt.");
      }
    } catch (err) {
      setError("An error occurred during image processing. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const downloadImage = () => {
    if (!processedImage) return;
    const link = document.createElement('a');
    link.href = processedImage;
    link.download = `edited-image-${Date.now()}.png`;
    link.click();
  };

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-semibold border border-purple-100 dark:border-purple-800">
            <Sparkles size={16} />
            <span>Powered by Gemini 2.5 Flash Image</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">AI Image <span className="text-purple-600">Studio</span></h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
            Upload an image and use natural language to transform it. Add objects, change filters, or modify the scene.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Editor Controls */}
        <div className="lg:col-span-4 space-y-8">
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-sm space-y-8">
            <div className="space-y-4">
              <label className="text-sm font-bold uppercase tracking-wider text-slate-500">1. Upload Image</label>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImageUpload} 
                accept="image/*" 
                className="hidden" 
              />
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="w-full h-40 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl flex flex-col items-center justify-center space-y-3 hover:border-purple-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all group"
              >
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-full group-hover:scale-110 transition-transform">
                  <Upload size={24} />
                </div>
                <span className="text-sm font-semibold text-slate-500">Click to upload file</span>
              </button>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-bold uppercase tracking-wider text-slate-500">2. Define Changes</label>
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g. 'Add a cool retro neon filter' or 'Make it look like a pencil sketch'"
                rows={4}
                className="w-full bg-slate-50 dark:bg-slate-950 border-2 border-slate-100 dark:border-slate-800 rounded-2xl p-4 focus:border-purple-500 outline-none transition-colors resize-none text-sm"
              />
            </div>

            <button 
              onClick={handleEdit}
              disabled={!selectedImage || !prompt.trim() || isLoading}
              className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-bold flex items-center justify-center space-x-2 shadow-lg shadow-purple-500/30 disabled:opacity-50 transition-all active:scale-95"
            >
              {isLoading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Wand2 size={20} />
                  <span>Transform Image</span>
                </>
              )}
            </button>

            {error && (
              <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-2xl flex items-start space-x-3 text-sm">
                <AlertCircle size={18} className="shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}
          </div>

          <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Prompt Tips</h4>
            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                <span>Be specific about styles (e.g. 'cyberpunk', 'watercolor')</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                <span>Mention light/color adjustments</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                <span>Describe objects to add or remove</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Preview Area */}
        <div className="lg:col-span-8 flex flex-col space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
            {/* Original Preview */}
            <div className="space-y-4">
              <div className="flex items-center justify-between px-2">
                <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <ImageIcon size={18} className="text-slate-400" />
                  Original
                </h3>
                {selectedImage && (
                  <button onClick={() => setSelectedImage(null)} className="text-slate-400 hover:text-red-500">
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
              <div className="aspect-square bg-slate-100 dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 overflow-hidden flex items-center justify-center relative">
                {selectedImage ? (
                  <img src={selectedImage} alt="Original" className="w-full h-full object-contain" />
                ) : (
                  <div className="text-slate-400 text-center p-8 space-y-2">
                    <div className="mx-auto w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                      <ImageIcon size={24} />
                    </div>
                    <p className="text-sm">Upload an image to start</p>
                  </div>
                )}
              </div>
            </div>

            {/* Result Preview */}
            <div className="space-y-4">
              <div className="flex items-center justify-between px-2">
                <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <RefreshCw size={18} className={`text-purple-600 ${isLoading ? 'animate-spin' : ''}`} />
                  Transformed
                </h3>
                {processedImage && (
                  <button onClick={downloadImage} className="text-purple-600 hover:text-purple-700 flex items-center gap-1 font-bold text-sm">
                    <Download size={16} />
                    <span>Download</span>
                  </button>
                )}
              </div>
              <div className="aspect-square bg-slate-100 dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 overflow-hidden flex items-center justify-center relative">
                {isLoading ? (
                  <div className="flex flex-col items-center space-y-4">
                    <div className="relative">
                       <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
                       <Sparkles size={24} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-purple-600 animate-pulse" />
                    </div>
                    <p className="text-sm text-slate-500 font-medium">Marvin's AI is working...</p>
                  </div>
                ) : processedImage ? (
                  <img src={processedImage} alt="Processed" className="w-full h-full object-contain animate-in fade-in duration-500" />
                ) : (
                  <div className="text-slate-400 text-center p-8 space-y-2 opacity-50">
                    <div className="mx-auto w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                      <Wand2 size={24} />
                    </div>
                    <p className="text-sm">Your transformation will appear here</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIStudio;
