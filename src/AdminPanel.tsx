import React, { useState } from 'react';
import { ContentSchema } from './content';
import { X, Save, FileJson } from 'lucide-react';

interface Props {
    content: ContentSchema;
    setContent: (content: ContentSchema) => void;
    onClose: () => void;
}

export default function AdminPanel({ content, setContent, onClose }: Props) {
    const [activeTab, setActiveTab] = useState('visual');
    const [jsonError, setJsonError] = useState('');
    const [localContent, setLocalContent] = useState<ContentSchema>(content);
    const [jsonText, setJsonText] = useState(JSON.stringify(content, null, 2));

    const handleSave = () => {
        if (activeTab === 'json') {
            try {
                const parsed = JSON.parse(jsonText);
                setContent(parsed);
                setJsonError('');
                onClose();
            } catch (e) {
                setJsonError('JSON Inválido. Verifique a sintaxe.');
            }
        } else {
            setContent(localContent);
            onClose();
        }
    };

    const handleFieldChange = (section: string, field: string, value: string) => {
        setLocalContent((prev: any) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
            }
        }));
    };

    const renderVisualEditor = () => {
        return (
            <div className="space-y-8">
                {Object.entries(localContent).map(([sectionKey, sectionValue]) => {
                    if (Array.isArray((sectionValue as any).pillars) || Array.isArray((sectionValue as any).phases)) {
                        return (
                            <div key={sectionKey} className="bg-white/5 p-6 rounded-xl border border-white/10">
                                <h3 className="text-xl font-bold text-accent mb-4 capitalize">{sectionKey} (Complex Data)</h3>
                                <p className="text-white/50 text-sm mb-4">Esta seção contém listas e dados complexos. Use o Editor JSON (aba acima) para editá-la.</p>
                            </div>
                        );
                    }

                    return (
                        <div key={sectionKey} className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-bold text-accent mb-4 capitalize">{sectionKey}</h3>
                            <div className="space-y-4">
                                {Object.entries(sectionValue).map(([fieldKey, fieldValue]) => {
                                    if (typeof fieldValue !== 'string') return null;
                                    const isLongText = fieldValue.length > 50 || fieldKey.includes('paragraph') || fieldKey.includes('text');

                                    return (
                                        <div key={fieldKey}>
                                            <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">{fieldKey}</label>
                                            {isLongText ? (
                                                <textarea
                                                    value={fieldValue}
                                                    onChange={(e) => handleFieldChange(sectionKey, fieldKey, e.target.value)}
                                                    className="w-full bg-dark border border-white/10 rounded-lg p-3 text-white focus:border-accent focus:outline-none transition-colors"
                                                    rows={3}
                                                />
                                            ) : (
                                                <input
                                                    type="text"
                                                    value={fieldValue}
                                                    onChange={(e) => handleFieldChange(sectionKey, fieldKey, e.target.value)}
                                                    className="w-full bg-dark border border-white/10 rounded-lg p-3 text-white focus:border-accent focus:outline-none transition-colors"
                                                />
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-md overflow-y-auto pt-10 pb-20 px-4 md:px-0">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2">Painel de Edição</h2>
                        <p className="text-white/50">Altere os textos, imagens e vídeos da página aqui.</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <X className="text-white" />
                    </button>
                </div>

                <div className="flex gap-4 mb-8">
                    <button
                        onClick={() => setActiveTab('visual')}
                        className={`px-6 py-3 rounded-lg font-bold transition-colors ${activeTab === 'visual' ? 'bg-accent text-white' : 'bg-white/5 text-white/50 hover:bg-white/10'}`}
                    >
                        Campos Visuais
                    </button>
                    <button
                        onClick={() => setActiveTab('json')}
                        className={`px-6 py-3 rounded-lg font-bold transition-colors flex items-center gap-2 ${activeTab === 'json' ? 'bg-accent text-white' : 'bg-white/5 text-white/50 hover:bg-white/10'}`}
                    >
                        <FileJson size={18} />
                        Editor JSON Avançado
                    </button>
                </div>

                {activeTab === 'visual' ? (
                    renderVisualEditor()
                ) : (
                    <div className="h-[600px] flex flex-col">
                        <p className="text-white/50 mb-4 text-sm">A edição em JSON permite alterar listas, pilares e fases que não aparecem no modo visual.</p>
                        {jsonError && <div className="bg-red-500/20 text-red-500 p-4 rounded-lg mb-4">{jsonError}</div>}
                        <textarea
                            className="flex-1 w-full bg-[#1e1e1e] text-[#d4d4d4] font-mono p-4 rounded-xl border border-white/10 focus:border-accent focus:outline-none"
                            value={jsonText}
                            onChange={(e) => setJsonText(e.target.value)}
                        />
                    </div>
                )}

                <div className="mt-8 flex justify-end">
                    <button
                        onClick={handleSave}
                        className="bg-accent text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-accent/80 transition-colors"
                    >
                        <Save size={20} />
                        Salvar e Aplicar Alterações
                    </button>
                </div>
            </div>
        </div>
    );
}
