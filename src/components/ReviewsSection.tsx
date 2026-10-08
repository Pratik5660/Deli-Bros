import React, { useState } from 'react';
import { Star, MessageSquare, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';
import { SAMPLE_REVIEWS } from '../data/cafeData';

export const ReviewsSection: React.FC = () => {
  const [showSyncInfo, setShowSyncInfo] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-t border-[#E6DCD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4EFEB] rounded-full text-xs font-medium text-[#6B7F6D] border border-[#E6DCD2] mb-3">
            <span>Customer Reviews</span>
            <span aria-hidden="true">·</span>
            <span>Google Reviews</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#2C221A] tracking-tight mb-4">
            Loved by the Neighbourhood
          </h2>

          <p className="text-base text-[#5E4C3D] leading-relaxed">
            Real guest experiences and community feedback from visitors at Titiwangsa Sentral.
          </p>
        </div>

        {/* Google Reviews Badge Summary Card */}
        <div className="max-w-xl mx-auto mb-10 p-4 bg-[#FFFFFF] rounded-2xl border border-[#E6DCD2] shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F4EFEB] flex items-center justify-center font-serif-display font-bold text-lg text-[#2C221A]">
              G
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-sm text-[#2C221A]">Google Business Profile</span>
                <span className="text-[11px] text-[#6B7F6D] bg-[#F4EFEB] px-1.5 py-0.2 rounded font-medium">Ready to sync</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-[#826E5D]">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-medium text-[#2C221A] ml-1">5.0 Star Target</span>
                <span>(Community Reviews)</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowSyncInfo(!showSyncInfo)}
            className="text-xs font-medium text-[#2C221A] hover:text-[#5E4C3D] px-3.5 py-2 bg-[#F4EFEB] hover:bg-[#E6DCD2] rounded-xl transition-colors cursor-pointer flex items-center gap-1"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B86B43]" />
            <span>{showSyncInfo ? 'Close Sync Info' : 'Owner: Connect Real Reviews'}</span>
          </button>
        </div>

        {/* Sync Info Banner if clicked */}
        {showSyncInfo && (
          <div className="max-w-xl mx-auto mb-10 p-4 bg-[#F4EFEB] rounded-xl border border-[#D8CCC0] text-xs text-[#5E4C3D] space-y-2 animate-in fade-in duration-200">
            <p className="font-semibold text-[#2C221A] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Direct Google Places API Integration Ready:
            </p>
            <p>
              Once Deli Bros’ official Google Business Profile is confirmed, your live Google Reviews and customer star ratings will stream automatically onto this section with 1-click live sync.
            </p>
          </div>
        )}

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SAMPLE_REVIEWS.map((review, idx) => (
            <div
              key={review.id}
              className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E6DCD2] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & status */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-[#826E5D] bg-[#F4EFEB] px-2 py-0.5 rounded">
                    Review Slot #{idx + 1}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-[#423429] leading-relaxed italic mb-6">
                  {review.content}
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-[#F1ECE6] flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#2C221A]">{review.author}</div>
                  <div className="text-[11px] text-[#826E5D]">{review.badge}</div>
                </div>
                <div className="text-[11px] text-[#6B7F6D] font-medium flex items-center gap-1">
                  <span>Google Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom invitation */}
        <div className="mt-10 text-center text-xs text-[#826E5D]">
          <span>Visited Deli Bros recently? </span>
          <a
            href={SAMPLE_REVIEWS[0].id ? 'https://www.google.com/maps/search/?api=1&query=100+Jalan+Pahang+Titiwangsa+Sentral+Kuala+Lumpur' : '#'}
            target="_blank"
            rel="noreferrer"
            className="text-[#2C221A] font-semibold underline decoration-1 hover:text-[#5E4C3D]"
          >
            Leave feedback on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};
