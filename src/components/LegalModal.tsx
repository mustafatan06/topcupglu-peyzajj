import React from 'react';
import { X, Shield } from 'lucide-react';
import { PRIVACY_POLICY, COOKIE_POLICY } from '../data/siteData';

interface LegalModalProps {
  type: 'privacy' | 'cookies' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Gizlilik Politikası' : 'Çerez Politikası';
  const content = isPrivacy ? PRIVACY_POLICY : COOKIE_POLICY;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-stone-200">
        
        <div className="sticky top-0 bg-white border-b border-stone-100 p-6 flex items-center justify-between z-10">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-emerald-700" />
            <h3 className="text-xl font-bold text-stone-900">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 transition-colors"
            aria-label="Kapat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 text-sm text-stone-700 leading-relaxed whitespace-pre-line space-y-4">
          {content}
        </div>

        <div className="border-t border-stone-100 p-4 bg-stone-50 rounded-b-3xl text-right">
          <button
            onClick={onClose}
            className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition"
          >
            Anladım & Kapat
          </button>
        </div>

      </div>
    </div>
  );
};
