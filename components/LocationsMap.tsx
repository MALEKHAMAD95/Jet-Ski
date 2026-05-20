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
    <div class="spark-marker">
      <div class="spark-marker-pin">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
        </svg>
      </div>
      <div class="spark-marker-label">${label}</div>
      <div class="spark-marker-pulse"></div>
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
        scrollWheelZoom: false,
      });

      mapInstanceRef.current = map;

      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        { subdomains: 'abcd', maxZoom: 19 }
      ).addTo(map);

      const styleId = 'spark-map-styles';
      let style = document.getElementById(styleId) as HTMLStyleElement | null;
      if (!style) {
        style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
          .leaflet-tile-pane { filter: saturate(1.15) brightness(1.02); }
          .leaflet-container { background: #E0F7FA !important; }
          .leaflet-popup-content-wrapper {
            background: #ffffff !important;
            border: 1px solid rgba(14,165,233,0.35) !important;
            border-radius: 16px !important;
            box-shadow: 0 12px 40px rgba(14,165,233,0.25), 0 0 24px rgba(14,165,233,0.1) !important;
            color: #0C4A6E !important;
            padding: 0 !important;
          }
          .leaflet-popup-tip { background: #ffffff !important; box-shadow: 0 3px 14px rgba(14,165,233,0.2) !important; }
          .leaflet-popup-close-button { color: #0EA5E9 !important; font-size:20px !important; right:10px !important; top:8px !important; font-weight: 700 !important; }
          .leaflet-popup-content { margin: 0 !important; }
          .leaflet-control-attribution { display: none; }
          .leaflet-control-zoom a {
            background: #ffffff !important;
            color: #0EA5E9 !important;
            border: 1px solid rgba(14,165,233,0.3) !important;
            font-weight: 800 !important;
            box-shadow: 0 4px 12px rgba(14,165,233,0.2) !important;
          }
          .leaflet-control-zoom a:hover {
            background: linear-gradient(135deg, #0EA5E9, #38BDF8) !important;
            color: #ffffff !important;
          }
          .spark-marker {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
            pointer-events: auto;
          }
          .spark-marker-pulse {
            position: absolute;
            top: 6px;
            left: 50%;
            transform: translateX(-50%);
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(14,165,233,0.4) 0%, rgba(14,165,233,0) 70%);
            animation: spark-pulse 2s ease-out infinite;
            pointer-events: none;
            z-index: -1;
          }
          @keyframes spark-pulse {
            0% { transform: translateX(-50%) scale(0.5); opacity: 1; }
            100% { transform: translateX(-50%) scale(2.2); opacity: 0; }
          }
          .spark-marker-pin {
            width: 44px;
            height: 44px;
            border-radius: 50% 50% 50% 0;
            background: linear-gradient(135deg, #0EA5E9 0%, #38BDF8 50%, #0284C7 100%);
            box-shadow: 0 6px 20px rgba(14,165,233,0.5), inset 0 -2px 6px rgba(0,0,0,0.15);
            border: 3px solid #ffffff;
            transform: rotate(-45deg);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.25s ease, box-shadow 0.25s ease;
          }
          .spark-marker-pin svg { transform: rotate(45deg); }
          .spark-marker:hover .spark-marker-pin {
            transform: rotate(-45deg) scale(1.15) translateY(-3px);
            box-shadow: 0 12px 28px rgba(14,165,233,0.7);
          }
          .spark-marker-label {
            margin-top: 6px;
            background: #ffffff;
            color: #0284C7;
            border: 1px solid rgba(14,165,233,0.45);
            font-size: 10px;
            font-weight: 800;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            padding: 3px 10px;
            border-radius: 999px;
            white-space: nowrap;
            box-shadow: 0 4px 14px rgba(14,165,233,0.2);
            font-family: system-ui, sans-serif;
          }
        `;
        document.head.appendChild(style);
      }

      L.control.zoom({ position: 'bottomright' }).addTo(map);

      locations.forEach((loc) => {
        const icon = L.divIcon({
          html: skyMarkerSVG(loc.name),
          className: '',
          iconSize: [80, 80],
          iconAnchor: [40, 50],
          popupAnchor: [0, -50],
        });

        const popupContent = `
          <div style="padding:18px 22px;min-width:200px;">
            <p style="color:#0EA5E9;font-size:10px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;margin:0 0 6px;">Spark Jet Ski</p>
            <p style="color:#0C4A6E;font-size:17px;font-weight:900;text-transform:uppercase;margin:0 0 2px;letter-spacing:0.04em;">${loc.name}</p>
            <p style="color:rgba(12,74,110,0.65);font-size:12px;margin:0 0 14px;">${loc.area}</p>
            <a href="tel:+14164208228" style="
              display:inline-block;
              background:linear-gradient(135deg,#0EA5E9,#38BDF8,#0284C7);
              color:#ffffff;
              font-weight:800;
              font-size:11px;
              text-transform:uppercase;
              letter-spacing:0.1em;
              padding:8px 18px;
              border-radius:999px;
              text-decoration:none;
              box-shadow:0 6px 16px rgba(14,165,233,0.45);
              transition: transform 0.2s ease;
            ">Book Here →</a>
          </div>
        `;

        L.marker([loc.lat, loc.lng], { icon })
          .addTo(map)
          .bindPopup(popupContent, { maxWidth: 260, closeButton: true });
      });

      cleanup = () => {
        map.remove();
        mapInstanceRef.current = null;
      };
    })();

    return () => cleanup();
  }, []);

  return (
    <div className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden border border-brand-gold/30 shadow-2xl shadow-brand-gold/15">
      <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-brand-gold rounded-tl-3xl z-[400] pointer-events-none" />
      <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-brand-gold rounded-tr-3xl z-[400] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-brand-gold rounded-bl-3xl z-[400] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-brand-gold rounded-br-3xl z-[400] pointer-events-none" />

      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[400] px-5 py-2 bg-white/95 border border-brand-gold/40 rounded-full text-brand-gold-dark text-xs font-bold uppercase tracking-widest backdrop-blur-sm pointer-events-none shadow-lg shadow-brand-gold/20">
        3 GTA Locations
      </div>

      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}
