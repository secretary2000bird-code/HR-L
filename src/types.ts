/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'zh' | 'en';

export interface LocalizedString {
  zh: string;
  en: string;
}

export interface NavItem {
  id: string;
  label: LocalizedString;
}

export interface AdvantageItem {
  num: string;
  title: LocalizedString;
  description: LocalizedString;
}

export interface SegmentItem {
  num: string;
  title: LocalizedString;
  description: LocalizedString;
  specLabel: LocalizedString;
  specValue: LocalizedString;
}

export interface CaseSpecification {
  label: LocalizedString;
  value: string;
}

export interface PortfolioItem {
  caseId: string;
  tag: LocalizedString;
  title: LocalizedString;
  description: LocalizedString;
  imageUrl: string;
  specs: CaseSpecification[];
}

export interface RoadmapStep {
  phase: string;
  title: LocalizedString;
  description: LocalizedString;
}

export interface FormSubmission {
  name: string;
  phone: string;
  destination: string;
  demand: string;
  description: string;
}
