/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FormSubmission, Language } from '../types';
import { CONTACT_CONTENT } from '../data';
import { Send, CheckCircle, FileText, User, Phone, MapPin, Grid, Layers, X } from 'lucide-react';

interface InquiryFormProps {
  lang: Language;
}

export default function InquiryForm({ lang }: InquiryFormProps) {
  const [formData, setFormData] = useState<FormSubmission>({
    name: '',
    phone: '',
    destination: '',
    demand: 'Villa Spatial Design + Bespoke Fixed Carpentry', // Default english fallback or matching selection
    description: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const optionItems = [
    {
      zh: '别墅整体空间设计 + 全屋家私固装',
      en: 'Villa Spatial Design + Bespoke Fixed Carpentry'
    },
    {
      zh: '高端大宗建材供应链拼柜出口（门窗/岩板）',
      en: 'Bulk Premium Materials Integration & Container Freight'
    },
    {
      zh: '全案闭环定制服务（设计+供应链+清关全包）',
      en: 'End-to-End Consolidated Turnkey Project'
    }
  ];

  // Set default option on render or based on language
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, demand: e.target.value });
  };

  const generateTicketId = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let result = 'YJ-';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.destination) {
      return;
    }

    setLoading(true);
    
    // Simulate real high-end enterprise API pipeline with a elegant brief loading effect
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTicketId(generateTicketId());
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      destination: '',
      demand: optionItems[0][lang],
      description: ''
    });
    setSuccess(false);
  };

  return (
    <div className="lg:col-span-7 bg-ivory border border-prussian/10 p-8 lg:p-12 relative shadow-sm">
      
      {/* Absolute Geometric Accent lines for Claude Magazine cover style feel */}
      <div className="absolute right-0 top-0 w-2.5 h-2.5 bg-versace"></div>
      <div className="absolute right-0 top-0 w-16 h-[1px] bg-prussian/20"></div>
      <div className="absolute right-0 top-0 w-[1px] h-16 bg-prussian/20"></div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Guest Name input */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-prussian flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 opacity-70" />
              <span>{lang === 'zh' ? '贵宾姓名 *' : 'Full Name *'}</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white border border-prussian/20 p-3 text-sm focus:outline-none focus:border-prussian focus:ring-1 focus:ring-prussian transition-all text-pblack font-light placeholder:text-stoneWarm/60"
              placeholder={lang === 'zh' ? '例如：雷亚德 先生' : 'e.g., Alexander Raymond'}
              id="input-name"
            />
          </div>

          {/* WhatsApp / Phone number */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-prussian flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 opacity-70" />
              <span>{lang === 'zh' ? '联络电话 / WhatsApp *' : 'Phone / WhatsApp *'}</span>
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-white border border-prussian/20 p-3 text-sm focus:outline-none focus:border-prussian focus:ring-1 focus:ring-prussian transition-all text-pblack font-light placeholder:text-stoneWarm/60"
              placeholder="+86 138-0013-8000"
              id="input-phone"
            />
          </div>
          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Destination */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-prussian flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 opacity-70" />
              <span>{lang === 'zh' ? '项目所属国家与城市 *' : 'Destination Country & City *'}</span>
            </label>
            <input
              type="text"
              required
              value={formData.destination}
              onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
              className="w-full bg-white border border-prussian/20 p-3 text-sm focus:outline-none focus:border-prussian focus:ring-1 focus:ring-prussian transition-all text-pblack font-light placeholder:text-stoneWarm/60"
              placeholder={lang === 'zh' ? '例如：马来西亚 兰卡威' : 'e.g., Malaysia, Langkawi'}
              id="input-destination"
            />
          </div>

          {/* Primary Custom Demand select */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-prussian flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 opacity-70" />
              <span>{lang === 'zh' ? '核心服务诉求 *' : 'Primary Custom Demand *'}</span>
            </label>
            <select
              onChange={handleSelectChange}
              value={formData.demand}
              className="w-full bg-white border border-prussian/20 p-3 text-sm focus:outline-none focus:border-prussian text-pblack font-light cursor-pointer"
              id="select-demand"
            >
              {optionItems.map((opt, i) => (
                <option key={i} value={opt[lang]} className="text-pblack">
                  {opt[lang]}
                </option>
              ))}
            </select>
          </div>
          
        </div>

        {/* Text Area parameter description */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-prussian flex items-center gap-1.5">
            <Grid className="w-3.5 h-3.5 opacity-70" />
            <span>
              {lang === 'zh' 
                ? '项目参数与特定尺寸描述（选填）' 
                : 'Project Specifications & Scale Metrics (Optional)'}
            </span>
          </label>
          <textarea
            rows={4}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full bg-white border border-prussian/20 p-3 text-sm focus:outline-none focus:border-prussian focus:ring-1 focus:ring-prussian transition-all text-pblack font-light placeholder:text-stoneWarm/60"
            placeholder={
              lang === 'zh'
                ? '例如：独栋别墅总共约1500㎡，需要约350㎡特大防风系统窗配置，以及全屋胡桃木饰面板深化定制...'
                : 'e.g., 1500sqm total layout area, requiring 320sqm high wind-resist architectural windows...'
            }
            id="input-description"
          />
        </div>

        {/* Submit button with live loader */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-prussian text-ivory text-xs font-semibold uppercase tracking-widest py-4 px-8 hover:bg-versace hover:text-pblack transition-all duration-300 flex items-center justify-center gap-2 border border-transparent hover:border-versace cursor-pointer ${
            loading ? 'opacity-80 cursor-wait' : ''
          }`}
          id="btn-submit-form"
        >
          {loading ? (
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-ivory rounded-full animate-bounce" />
              <span className="w-3 h-3 bg-ivory rounded-full animate-bounce delay-100" />
              <span className="w-3 h-3 bg-ivory rounded-full animate-bounce delay-200" />
              <span className="text-[10px] tracking-widest uppercase">
                {lang === 'zh' ? '锁定深度安全通信中...' : 'LOCKING DEEP CRYPTO SECURE...'}
              </span>
            </div>
          ) : (
            <>
              <Send className="w-3.5 h-3.5 text-versace" />
              <span>{lang === 'zh' ? '提交高定工程需求单' : 'Transmit Engineering Document'}</span>
            </>
          )}
        </button>
      </form>

      {/* Exquisite custom Overlay Ticket Modal on success */}
      {success && (
        <div className="absolute inset-0 bg-[#051524]/95 z-30 flex flex-col justify-between p-6 sm:p-10 text-ivory animate-fade-in border-t-2 border-versace">
          
          {/* Header area with close and verify */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-versace" />
              <div className="text-[10px] tracking-widest text-versace font-mono font-semibold">
                [ {lang === 'zh' ? '需求单安全接入系统' : 'SECURE SEC REGISTERED'} ]
              </div>
            </div>
            <button
              onClick={handleReset}
              className="text-[#E1E6EB]/60 hover:text-white p-1 hover:bg-white/5 transition-all cursor-pointer"
              aria-label="Close report"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Central Ticket Design */}
          <div className="my-4 space-y-4">
            <div className="flex justify-between items-start font-mono text-[11px] text-stoneWarm border-b border-white/5 pb-2">
              <span>TICKET ID: {ticketId}</span>
              <span>TIMESTAMP: {new Date().toISOString().substring(0, 10)}</span>
            </div>

            <div className="space-y-2">
              <h4 className="font-serif text-xl sm:text-2xl text-ivory tracking-wide">
                {lang === 'zh' ? '悦捷工程深化分析单已立案' : 'Fulfillment Portfolio Commissioned'}
              </h4>
              <p className="text-xs text-stoneWarm leading-relaxed font-light">
                {lang === 'zh' 
                  ? '感谢您的联络。悦捷全链路深化顾问与 Sandy 领衔的物流专家团队正在精确核算您的项目工程量与佛山大宗拼柜清关可行性：' 
                  : 'Thank you for commissioning Yuejie Bespoke. Our logistics squad and engineering dispatchers have locked your custom structural coordinates:'}
              </p>
            </div>

            {/* Generated visual table matching custom specifications */}
            <div className="bg-[#0D233A] border border-white/5 p-4 space-y-2 font-mono text-[11px] rounded-sm">
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span className="text-stoneWarm uppercase">GUEST:</span>
                <span className="text-ivory font-medium truncate max-w-[180px]">{formData.name}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span className="text-stoneWarm uppercase">DIAL DIRECT:</span>
                <span className="text-ivory font-medium">{formData.phone}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span className="text-stoneWarm uppercase">COORDS:</span>
                <span className="text-[#F5B70A] font-medium">{formData.destination}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span className="text-stoneWarm uppercase">DEMAND CLS:</span>
                <span className="text-ivory font-medium truncate max-w-[180px]">{formData.demand}</span>
              </div>
              {formData.description && (
                <div className="text-left pt-1">
                  <span className="text-stoneWarm uppercase block mb-1">SPEC METRICS:</span>
                  <p className="text-[#E1E6EB] italic font-light font-sans text-xs line-clamp-2">
                    "{formData.description}"
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Footer of card */}
          <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px]">
            <span className="text-stoneWarm font-light text-center sm:text-left leading-tight">
              {lang === 'zh' 
                ? '🔒 资深工程师将在 24 小时内连线提供 MTO 闭环预算与 CAD 深化复核。' 
                : '🔒 Lead engineer will dial in within 24 Hrs with complete MTO budgeting and CAD reviews.'}
            </span>
            <button
              onClick={handleReset}
              className="px-6 py-2 border border-versace/40 text-versace text-[10px] tracking-widest hover:bg-versace/10 transition-all font-semibold uppercase cursor-pointer"
            >
              {lang === 'zh' ? '关闭通函并返回' : 'Dismiss Ticket'}
            </button>
          </div>

        </div>
      )}
      
    </div>
  );
}
