'use client';

import { useEffect, useRef } from 'react';

interface Location {
  name: string;
  area: string;
  lat: number;
  lng: number;
}

const locations: Location[] = [
  { name: 'Toronto', area: 'Humber Bay / Lakeshore', lat: 43.6313, lng: -79.4889 },
  { name: 'Mississauga', area: 'Port Credit', lat: 43.5517, lng: -79.5773 },
  { name: 'Scarborough', area: 'Bluffers Park', lat: 43.7082, lng: -79.233 },
];

function skyMarkerSVG(label: string) {
  return `
    <div style="position:relative;display:flex;flex-direction:column;align-items:center;cursor:pointer;">
      <div style="
        background: linear-gradient(135deg,#0EA5E9,#38BDF8,#0284C7);
        border: 2px solid #ffffff;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        width: 36px; height: 36px;
        box-shadow: 0 4px 20px rgba(14,165,233,0.55);
        display:flex;align-items:center;justify-content:center;
      ">
        <svg style="transform:rotate(45deg)" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      </div>
      <div style="
        margin-top:4px;
        background:#ffffff;
        border:1px solid rgba(14,165,233,0.5);
        color:#0284C7;
        font-size:10px;
        font-weight:800;
        letter-spacing:0.08em;
        text-transform:uppercase;
        padding:2px 8px;
        border-radius:20px;
        white-space:nowrap;
        box-shadow:0 2px 12px rgba(14,165,233,0.3);
        font-family:system-ui,sans-serif;
      ">${label}</div>
    </div>
  `;
}

export function LocationsMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    let cleanup = () => {};

    (async () => {
      const L = (await import('leaflet')).default;
      await import('leaflet/dist/leaflet.css');

      const map = L.map(mapRef.current!, {
        center: [43.65, -79.4],
        zoom: 10,
        zoomControl: false,
        attributionControl: false,
      });

      mapInstanceRef.current = map;

      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
        { subdomains: 'abcd', maxZoom: 19 }
      ).addTo(map);

      const canvas = document.createElement('style');
      canvas.textContent = `
        .leaflet-tile-pane { filter: hue-rotate(180deg) saturate(0.8) brightness(1.05); }
        .leaflet-popup-content-wrapper {
          background: #ffffff !important;
          border: 1px solid rgba(14,165,233,0.4) !important;
          border-radius: 14px !important;
          box-shadow: 0 8px 32px rgba(14,165,233,0.18), 0 0 20px rgba(14,165,233,0.08) !important;
          color: #0C4A6E !important;
          padding: 0 !important;
        }
        .leaflet-popup-tip { background: #ffffff !important; }
        .leaflet-popup-close-button { color: #0EA5E9 !important; font-size:18px !important; right:10px !important; top:8px !important; }
        .leaflet-popup-content { margin: 0 !important; }
        .leaflet-control-attribution { display: none; }
      `;
      document.head.appendChild(canvas);

      L.control.zoom({ position: 'bottomright' }).addTo(map);

      locations.forEach((loc) => {
        const icon = L.divIcon({
          html: skyMarkerSVG(loc.name),
          className: '',
          iconSize: [80, 70],
          iconAnchor: [22, 46],
          popupAnchor: [18, -46],
        });

        const popupContent = `
          <div style="padding:16px 20px;min-width:180px;">
            <p style="color:#0EA5E9;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 4px;">Spark Jet Ski</p>
            <p style="color:#0C4A6E;font-size:16px;font-weight:900;text-transform:uppercase;margin:0 0 2px;letter-spacing:0.05em;">${loc.name}</p>
            <p style="color:rgba(12,74,110,0.6);font-size:12px;margin:0 0 12px;">${loc.area}</p>
            <a href="tel:+14164208228" style="
              display:inline-block;
              background:linear-gradient(135deg,#0EA5E9,#38BDF8);
              color:#ffffff;
              font-weight:800;
              font-size:11px;
              text-transform:uppercase;
              letter-spacing:0.08em;
              padding:7px 16px;
              border-radius:20px;
              text-decoration:none;
              box-shadow:0 4px 12px rgba(14,165,233,0.35);
            ">Book Here</a>
          </div>
        `;

        L.marker([loc.lat, loc.lng], { icon })
          .addTo(map)
          .bindPopup(popupContent, { maxWidth: 240 });
      });

      cleanup = () => {
        map.remove();
        canvas.remove();
        mapInstanceRef.current = null;
      };
    })();

    return () => cleanup();
  }, []);

  return (
    <div className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden border border-brand-gold/30 shadow-2xl shadow-brand-gold/15">
      <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-brand-gold rounded-tl-3xl z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-brand-gold rounded-tr-3xl z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-brand-gold rounded-bl-3xl z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-brand-gold rounded-br-3xl z-10 pointer-events-none" />

      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 px-5 py-2 bg-white/90 border border-brand-gold/50 rounded-full text-brand-gold-dark text-xs font-bold uppercase tracking-widest backdrop-blur-sm pointer-events-none shadow-md">
        3 GTA Locations
      </div>

      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}
