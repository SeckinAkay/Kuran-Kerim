/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SURAHS } from './surahsData.ts';

const CONTROLS_COUNT = 20;

export default function App() {
  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden select-none">
      {/* 3D Etiket Bulutu Ana Kapsayıcısı */}
      <div className="tagcloud-wrapper">
        <div
          className="tagcloud-controls"
          style={{ '--num-elements': CONTROLS_COUNT } as React.CSSProperties}
        >
          {/* Yönlendirme ve Açı Düğmeleri (20 Adet) */}
          {Array.from({ length: CONTROLS_COUNT }, (_, i) => i + 1).map((idx) => (
            <div
              key={`ctrl-${idx}`}
              className="tagcloud-control-button"
              style={{ '--index': idx } as React.CSSProperties}
            >
              <input
                type="radio"
                name="tagcloud-control-input"
                aria-label={`Rotasyon açısı ${idx}`}
              />
            </div>
          ))}

          {/* Dönen 3D Küre ve 114 Sure Etiketi */}
          <div className="tagcloud-rotation">
            <ul
              className="tagcloud-tags"
              style={{ '--num-elements': SURAHS.length } as React.CSSProperties}
            >
              {SURAHS.map((surah) => (
                <li
                  key={surah.index}
                  className="tagcloud-tag"
                  style={{ '--index': surah.index } as React.CSSProperties}
                >
                  <div>
                    <a
                      href={surah.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`${surah.index}. Sure: ${surah.name}`}
                    >
                      {surah.name}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 
        Sağ Altta Düzenleyici Linki ("SA") 
        - "Seçkin Akay" ifadesi "SA" olarak kısaltıldı
        - Sağ tarafa konumlandırıldı
        - Neon yeşili ile renklendirildi
        - Fare üzerine geldiğinde hafifçe hareketlenen animasyon eklendi
        - Orijinal link ve çalışma yapısı korundu
      */}
      <footer className="yapimci-footer">
        <a
          href="https://seckinakay.com"
          target="_blank"
          rel="noopener noreferrer"
          className="yapimci-link"
          title="Seçkin Akay"
          aria-label="Seçkin Akay"
        >
          SA
        </a>
      </footer>
    </div>
  );
}
