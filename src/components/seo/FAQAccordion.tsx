import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../../types';
interface FAQAccordionProps {
  items: FAQItem[];
}
export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="space-y-4">
      {items.map((item, index) =>
      <div
        key={index}
        className="border border-slate-200 rounded-lg bg-white overflow-hidden"
        itemScope
        itemProp="mainEntity"
        itemType="https://schema.org/Question">

          <button
          className="w-full flex items-center justify-between p-4 text-left font-medium text-slate-900 hover:bg-slate-50 transition-colors"
          onClick={() => setOpenIndex(openIndex === index ? null : index)}>

            <span itemProp="name">{item.question}</span>
            {openIndex === index ?
          <ChevronUp className="h-5 w-5 text-slate-500" /> :

          <ChevronDown className="h-5 w-5 text-slate-500" />
          }
          </button>

          {openIndex === index &&
        <div
          className="px-4 pb-4 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2"
          itemScope
          itemProp="acceptedAnswer"
          itemType="https://schema.org/Answer">

              <div itemProp="text" className="pt-2">
                {item.answer}
              </div>
            </div>
        }
        </div>
      )}
    </div>);

}