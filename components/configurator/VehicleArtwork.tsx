import type { VehicleSlug } from '@/data/configurator';

interface VehicleArtworkProps {
  vehicle: VehicleSlug;
  className?: string;
}

export function VehicleArtwork({ vehicle, className = '' }: VehicleArtworkProps) {
  const accent = vehicle === 'yacht' ? '#d3a85c' : vehicle === 'bike' ? '#df5b4f' : vehicle === 'car' ? '#b7a06b' : '#20b8d4';
  const shadowId = `vehicle-shadow-${vehicle}`;

  return (
    <svg
      viewBox="0 0 420 220"
      className={className}
      role="img"
      aria-label={`${vehicle.replace('-', ' ')} preview`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={shadowId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0E7490" stopOpacity="0.28" />
          <stop offset="1" stopColor="#061826" stopOpacity="0" />
        </linearGradient>
      </defs>
      <ellipse cx="210" cy="191" rx="142" ry="13" fill={`url(#${shadowId})`} />

      {vehicle === 'jet-ski' && (
        <g strokeLinecap="round" strokeLinejoin="round">
          <path d="M78 143c35-9 55-37 91-43l45-8c23-4 50 11 72 30l53 19c8 3 9 12 0 16-42 19-173 23-258 6-11-2-13-16-3-20Z" fill="#132F41" stroke="#78B6C8" strokeWidth="3" />
          <path d="M113 139c37-8 62-25 101-27 31-1 55 16 81 28-44 11-125 14-182 5Z" fill="#0E7490" stroke={accent} strokeWidth="3" />
          <path d="M161 107c8-19 31-25 57-18 13 4 26 12 32 23l-13 8-64-1-12-12Z" fill="#1B2027" stroke="#9AA8B0" strokeWidth="3" />
          <path d="M195 83V61m0 0-31 4m31-4 33 4m-50-1-15-12m63 13 15-12" stroke="#D1D9DD" strokeWidth="5" />
          <path d="M173 119h-24m92 2h23" stroke={accent} strokeWidth="6" />
          <circle cx="115" cy="154" r="4" fill={accent} stroke="none" />
          <circle cx="314" cy="154" r="4" fill={accent} stroke="none" />
        </g>
      )}

      {vehicle === 'yacht' && (
        <g strokeLinecap="round" strokeLinejoin="round">
          <path d="M55 151h293l-30 28c-63 13-177 13-238 0l-25-28Z" fill="#E7ECEE" stroke="#A7BDC6" strokeWidth="3" />
          <path d="M107 146V99h155l43 47H107Z" fill="#183B50" stroke={accent} strokeWidth="3" />
          <path d="M129 111h50v22h-50zm63 0h53l18 22h-71z" fill="#8AC4D2" stroke="#D5EEF1" strokeWidth="2" />
          <path d="M101 146V78h119v68m-105-68V58h90v20m-44-20V45" stroke="#CBDCE1" strokeWidth="4" />
          <path d="M76 151c50-15 164-17 252 0" stroke="#F8FAFA" strokeWidth="5" />
          <path d="M157 151v15m41-15v15m40-15v15" stroke={accent} strokeWidth="5" />
        </g>
      )}

      {vehicle === 'ship' && (
        <g strokeLinecap="round" strokeLinejoin="round">
          <path d="M43 151h335l-31 31c-78 17-191 17-273 0l-31-31Z" fill="#183448" stroke="#8AA6B5" strokeWidth="3" />
          <path d="M92 150V90h184v60" fill="#234A5F" stroke={accent} strokeWidth="3" />
          <path d="M121 90V57h112v33m-84 0V39h56v18m-28-18V24" stroke="#D0DCE0" strokeWidth="4" />
          <path d="M113 106h28v21h-28zm43 0h28v21h-28zm43 0h28v21h-28zm43 0h28v21h-28z" fill="#8DB4C0" stroke="#D7E9ED" strokeWidth="2" />
          <path d="M62 166c83 13 218 13 296 0" stroke={accent} strokeWidth="4" />
          <path d="M298 79h42m-20-22v22" stroke="#D0DCE0" strokeWidth="3" />
        </g>
      )}

      {vehicle === 'bike' && (
        <g strokeLinecap="round" strokeLinejoin="round">
          <circle cx="116" cy="160" r="29" fill="#111820" stroke="#95A1A8" strokeWidth="4" />
          <circle cx="303" cy="160" r="29" fill="#111820" stroke="#95A1A8" strokeWidth="4" />
          <path d="m116 160 59-51 50 51m-50-51 54 2 74 49m-128 0h50m-50 0-19-41m101-8 28-25m-28 25-23-22" stroke={accent} strokeWidth="6" />
          <path d="M147 112h50l18 14h-62l-17-14Z" fill="#1D2830" stroke="#C7D2D6" strokeWidth="3" />
          <path d="M179 105c10-22 31-31 54-22l18 18-13 9h-59Z" fill="#243E4D" stroke={accent} strokeWidth="3" />
          <path d="M246 102h26m-9-9 9 9-9 9" stroke="#D6E0E3" strokeWidth="4" />
          <circle cx="116" cy="160" r="6" fill={accent} stroke="none" />
          <circle cx="303" cy="160" r="6" fill={accent} stroke="none" />
        </g>
      )}

      {vehicle === 'car' && (
        <g strokeLinecap="round" strokeLinejoin="round">
          <path d="M52 145h316l-10 25H61l-9-25Z" fill="#1A3445" stroke="#9DB7C0" strokeWidth="3" />
          <path d="m91 145 28-50c5-9 14-14 25-14h119c12 0 21 5 28 15l31 49H91Z" fill="#234B5D" stroke={accent} strokeWidth="3" />
          <path d="m133 96 19-4h45v37h-78l14-33Zm77-4h48c7 0 12 3 16 9l17 28h-81V92Z" fill="#86BBC8" stroke="#D9EEF1" strokeWidth="3" />
          <circle cx="112" cy="168" r="24" fill="#111820" stroke="#B7C3C8" strokeWidth="4" />
          <circle cx="310" cy="168" r="24" fill="#111820" stroke="#B7C3C8" strokeWidth="4" />
          <circle cx="112" cy="168" r="7" fill={accent} stroke="none" />
          <circle cx="310" cy="168" r="7" fill={accent} stroke="none" />
          <path d="M71 145h278M155 144v-18m111 18v-18" stroke="#E3ECEE" strokeWidth="3" />
        </g>
      )}
    </svg>
  );
}
