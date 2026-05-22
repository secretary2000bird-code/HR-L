/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Language } from '../types';
import { 
  Compass, 
  ArrowLeft, 
  Home, 
  HelpCircle,
  FileX
} from 'lucide-react';

interface NotFoundViewProps {
  lang: Language;
  onReturnHome: () => void;
}

export default function NotFoundView({ lang, onReturnHome }: NotFoundViewProps) {
  return (
    <div className="w-full min-h-[70vh] bg-[#FAF8F5] text-[#051524] select-none font-sans flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden">
      
      {/* Absolute Micro Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#013E75_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none"></div>

      {/* Main Container Card */}
      <div className="max-w-xl w-full text-center space-y-8 relative z-10">
        
        {/* Animated Icon Frame */}
        <div className="mx-auto w-20 h-20 border-[1.5px] border-[#013E75]/15 bg-white flex items-center justify-center relative shadow-md">
          {/* Subtle inside borders */}
          <div className="absolute inset-1.5 border border-[#F5B70A]/20"></div>
          <FileX className="w-8 h-8 text-[#013E75] animate-pulse" />
        </div>

        {/* 404 Status Stamp */}
        <div className="space-y-3">
          <span className="text-[11px] font-mono font-bold text-[#F5B70A] tracking-[0.25em] uppercase block">
            {lang === 'zh' ? '异常代码: 404 ERROR' : 'DOCKET EXCEPTION: 404 NOT FOUND'}
          </span>
          
          <h1 className="font-serif text-3xl sm:text-4xl font-light text-[#013E75] leading-snug tracking-tight">
            {lang === 'zh' ? (
              <>
                <span>未检索到指定的出海申报案卷。</span>
              </>
            ) : (
              <span>Specified Cargo Document Not Found</span>
            )}
          </h1>
          
          <p className="text-xs sm:text-sm text-[#465768] font-light leading-relaxed max-w-md mx-auto text-center">
            {lang === 'zh' ? (
              '该节点尚未录入或已被大宗物流清关组 Sandy 转移。请核对地址编号，或直接返回悦捷数字化整屋主材交付大本营首页。'
            ) : (
              'The requested route could be archived or moved. Ensure your local coordinates are aligned, or head back to Nanhai Yuejie’s home hub directory.'
            )}
          </p>
        </div>

        <div className="w-20 h-[2px] bg-[#F5B70A] mx-auto"></div>

        {/* Dynamic Nav Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
          
          <button 
            onClick={onReturnHome}
            className="w-full sm:w-auto bg-[#013E75] text-[#FAF8F5] text-xs font-bold uppercase tracking-widest py-4 px-8 hover:bg-[#F5B70A] hover:text-[#051524] transition-all cursor-pointer rounded-none flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>{lang === 'zh' ? '返回系统大本营' : 'Return to Home Station'}</span>
          </button>

          <button 
            onClick={() => window.history.back()}
            className="w-full sm:w-auto border border-stone-300 hover:border-[#013E75] text-[#051524] text-xs font-mono tracking-widest py-4 px-8 transition-all rounded-none cursor-pointer flex items-center justify-center bg-white/50 hover:bg-white gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{lang === 'zh' ? '安全后退一步' : 'Go Back'}</span>
          </button>

        </div>

      </div>

      {/* Decorative Stamp footnote */}
      <div className="absolute bottom-6 left-6 right-6 text-center text-[9px] font-mono text-[#8A96A3] tracking-widest uppercase">
        YUEJIE FULFILLMENT SYSTEMS // CODES CONFIRMED 2026
      </div>

    </div>
  );
}
