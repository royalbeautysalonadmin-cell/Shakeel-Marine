import { useMemo } from 'react';
import * as THREE from 'three';
import type { VehicleConfiguration } from '@/data/configurator';
import { colorOptions, designOptions, materialOptions } from '@/data/configurator';

interface VehicleModelProps {
  config: VehicleConfiguration;
}

function getColor(id: string, customColor: string, fallback: string) {
  if (id === 'custom') return customColor;
  return colorOptions.find((color) => color.id === id)?.hex ?? fallback;
}

function getMatProps(id: string) {
  const mat = materialOptions.find((m) => m.id === id) ?? materialOptions[0];
  return { roughness: mat.roughness, metalness: mat.metalness };
}

function getPattern(id: string) {
  return designOptions.find((d) => d.id === id)?.pattern ?? 'plain';
}

function PhotoTex({ url }: { url: string }) {
  const tex = useMemo(() => {
    const t = new THREE.TextureLoader().load(url);
    t.colorSpace = THREE.SRGBColorSpace;
    t.wrapS = THREE.RepeatWrapping;
    t.wrapT = THREE.RepeatWrapping;
    return t;
  }, [url]);
  return <primitive attach="map" object={tex} />;
}

function Upholstery({ color, config, photo }: { color: string; config: VehicleConfiguration; photo?: string | null }) {
  const m = getMatProps(config.material);
  return (
    <meshPhysicalMaterial
      color={color}
      roughness={m.roughness}
      metalness={m.metalness}
      clearcoat={0.12}
      clearcoatRoughness={0.4}
      sheen={0.25}
      sheenRoughness={0.5}
      sheenColor={color}
    >
      {photo && <PhotoTex url={photo} />}
    </meshPhysicalMaterial>
  );
}

function Paint({ color, clearcoat = 0.75, metalness = 0.4 }: { color: string; clearcoat?: number; metalness?: number }) {
  return (
    <meshPhysicalMaterial
      color={color}
      roughness={0.18}
      metalness={metalness}
      clearcoat={clearcoat}
      clearcoatRoughness={0.1}
      envMapIntensity={1.4}
    />
  );
}

function Glass() {
  return (
    <meshPhysicalMaterial
      color="#6ec4d8"
      roughness={0.02}
      metalness={0.05}
      transmission={0.7}
      thickness={0.4}
      clearcoat={1}
      clearcoatRoughness={0.03}
      ior={1.52}
      envMapIntensity={1.8}
    />
  );
}

function Chrome({ tint }: { tint?: string }) {
  return (
    <meshPhysicalMaterial
      color={tint || '#c0c8cc'}
      roughness={0.06}
      metalness={0.96}
      clearcoat={0.6}
      clearcoatRoughness={0.08}
      envMapIntensity={2.2}
    />
  );
}

function Rubber() {
  return (
    <meshPhysicalMaterial color="#10161a" roughness={0.92} metalness={0.01} clearcoat={0.03} />
  );
}

/* ─── Accent Details ──────────────────────────────────── */

function Stitching({
  config,
  position = [0, 0, 0] as [number, number, number],
  scale = [1, 1, 1] as [number, number, number],
}: {
  config: VehicleConfiguration;
  position?: [number, number, number];
  scale?: [number, number, number];
}) {
  const accent = getColor(config.accentColor, config.customAccentColor, '#c2413a');
  const stitch = getColor(config.stitchingColor, config.customStitchingColor, '#f5f7f8');
  const pattern = getPattern(config.design);

  if (pattern === 'stripe') {
    return (
      <group position={position} scale={scale}>
        {[-0.42, 0, 0.42].map((x, i) => (
          <mesh key={x} position={[x, 0.012, 0]} rotation={[0, 0, -0.18]}>
            <boxGeometry args={[0.06, 0.018, 1.4]} />
            <meshPhysicalMaterial color={i === 1 ? stitch : accent} roughness={0.4} metalness={0.08} clearcoat={0.2} />
          </mesh>
        ))}
      </group>
    );
  }

  if (pattern === 'diamond') {
    return (
      <group position={position} scale={scale}>
        {[-0.55, -0.18, 0.18, 0.55].map((x) => (
          <mesh key={x} position={[x, 0.012, 0]} rotation={[0, 0, Math.PI / 4]}>
            <boxGeometry args={[0.05, 0.018, 1.1]} />
            <meshPhysicalMaterial color={stitch} roughness={0.5} metalness={0.02} clearcoat={0.12} />
          </mesh>
        ))}
      </group>
    );
  }

  if (pattern === 'ribbed') {
    return (
      <group position={position} scale={scale}>
        {[-0.55, -0.28, 0, 0.28, 0.55].map((z) => (
          <mesh key={z} position={[0, 0.014, z]}>
            <boxGeometry args={[1.2, 0.022, 0.025]} />
            <meshPhysicalMaterial color={stitch} roughness={0.6} metalness={0.02} />
          </mesh>
        ))}
      </group>
    );
  }

  if (pattern === 'carbon') {
    return (
      <group position={position} scale={scale}>
        {[-0.42, -0.14, 0.14, 0.42].map((x) => (
          <mesh key={x} position={[x, 0.012, 0]} rotation={[0, 0, -Math.PI / 4]}>
            <boxGeometry args={[0.025, 0.018, 1.2]} />
            <meshPhysicalMaterial color={accent} roughness={0.22} metalness={0.35} clearcoat={0.5} />
          </mesh>
        ))}
      </group>
    );
  }

  return (
    <mesh position={position} scale={scale}>
      <boxGeometry args={[1.2, 0.015, 0.015]} />
      <meshPhysicalMaterial color={stitch} roughness={0.5} metalness={0.02} />
    </mesh>
  );
}

/* ─── Jet Ski ─────────────────────────────────────────── */

function JetSki({ config }: VehicleModelProps) {
  const main = getColor(config.mainColor, config.customMainColor, '#111827');
  const accent = getColor(config.accentColor, config.customAccentColor, '#c2413a');
  const seatActive = config.product === 'jet-ski-seat';
  const matActive = config.product === 'super-jet-floor-mat-kit';
  const seatColor = seatActive ? main : '#1c262e';
  const matColor = matActive ? main : '#162530';

  const hullShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -2.8);
    shape.bezierCurveTo(0.35, -2.8, 1.1, -2.6, 1.45, -2.0);
    shape.bezierCurveTo(1.7, -1.5, 1.82, -0.6, 1.82, 0);
    shape.bezierCurveTo(1.82, 0.6, 1.7, 1.5, 1.45, 2.0);
    shape.bezierCurveTo(1.1, 2.6, 0.35, 2.8, 0, 2.8);
    shape.bezierCurveTo(-0.35, 2.8, -1.1, 2.6, -1.45, 2.0);
    shape.bezierCurveTo(-1.7, 1.5, -1.82, 0.6, -1.82, 0);
    shape.bezierCurveTo(-1.82, -0.6, -1.7, -1.5, -1.45, -2.0);
    shape.bezierCurveTo(-1.1, -2.6, -0.35, -2.8, 0, -2.8);
    return shape;
  }, []);

  const deckShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -2.5);
    shape.bezierCurveTo(0.3, -2.5, 0.95, -2.35, 1.2, -1.8);
    shape.bezierCurveTo(1.42, -1.35, 1.52, -0.5, 1.52, 0);
    shape.bezierCurveTo(1.52, 0.5, 1.42, 1.35, 1.2, 1.8);
    shape.bezierCurveTo(0.95, 2.35, 0.3, 2.5, 0, 2.5);
    shape.bezierCurveTo(-0.3, 2.5, -0.95, 2.35, -1.2, 1.8);
    shape.bezierCurveTo(-1.42, 1.35, -1.52, 0.5, -1.52, 0);
    shape.bezierCurveTo(-1.52, -0.5, -1.42, -1.35, -1.2, -1.8);
    shape.bezierCurveTo(-0.95, -2.35, -0.3, -2.5, 0, -2.5);
    return shape;
  }, []);

  const hullExtrudeSettings = useMemo(() => ({
    steps: 1,
    depth: 0.42,
    bevelEnabled: true,
    bevelThickness: 0.18,
    bevelSize: 0.12,
    bevelSegments: 8,
  }), []);

  return (
    <group rotation={[0, 0, 0]} scale={[1, 1, 1]}>
      {/* Hull — shaped extrusion */}
      <mesh position={[0, 0.08, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
        <extrudeGeometry args={[hullShape, hullExtrudeSettings]} />
        <Paint color="#cdd8db" metalness={0.35} />
      </mesh>

      {/* Deck surface */}
      <mesh position={[0, 0.42, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <extrudeGeometry args={[deckShape, { steps: 1, depth: 0.08, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.04, bevelSegments: 4 }]} />
        <Paint color="#132e42" clearcoat={0.85} />
      </mesh>

      {/* Bow tip — pointed nose */}
      <mesh position={[0, 0.38, -2.55]} castShadow>
        <coneGeometry args={[0.18, 0.65, 16]} />
        <Paint color="#cdd8db" metalness={0.35} />
      </mesh>

      {/* Footwell / floor mat area */}
      <mesh position={[0, 0.38, 0.6]} receiveShadow>
        <boxGeometry args={[1.35, 0.04, 2.2]} />
        <Upholstery color={matColor} config={config} photo={matActive ? config.userPhoto : null} />
      </mesh>

      {/* Footwell left wall */}
      <mesh position={[-0.72, 0.42, 0.6]}>
        <boxGeometry args={[0.06, 0.14, 2.2]} />
        <Upholstery color={matColor} config={config} />
      </mesh>

      {/* Footwell right wall */}
      <mesh position={[0.72, 0.42, 0.6]}>
        <boxGeometry args={[0.06, 0.14, 2.2]} />
        <Upholstery color={matColor} config={config} />
      </mesh>

      {/* Front cowl / hood */}
      <mesh position={[0, 0.62, -1.1]} castShadow>
        <boxGeometry args={[1.1, 0.22, 1.3]} />
        <Paint color="#1a3548" clearcoat={0.9} />
      </mesh>

      {/* Hood vent detail */}
      <mesh position={[0, 0.76, -1.1]}>
        <boxGeometry args={[0.4, 0.03, 0.6]} />
        <meshPhysicalMaterial color="#0c1e2e" roughness={0.5} metalness={0.3} clearcoat={0.4} />
      </mesh>

      {/* Windscreen / instrument panel */}
      <mesh position={[0, 0.72, -0.52]} castShadow>
        <boxGeometry args={[0.85, 0.28, 0.35]} />
        <Paint color="#1a3548" />
      </mesh>

      {/* Windscreen glass */}
      <mesh position={[0, 0.92, -0.48]} rotation={[0.25, 0, 0]}>
        <boxGeometry args={[0.72, 0.22, 0.04]} />
        <Glass />
      </mesh>

      {/* Gauge cluster */}
      <mesh position={[0, 0.78, -0.38]}>
        <cylinderGeometry args={[0.1, 0.1, 0.03, 20]} />
        <meshPhysicalMaterial color="#0a0a0a" roughness={0.15} metalness={0.1} clearcoat={1} />
      </mesh>

      {/* Seat — main rider */}
      <mesh position={[0, 0.68, 0.3]} castShadow>
        <capsuleGeometry args={[0.28, 1.4, 16, 32]} />
        <Upholstery color={seatColor} config={config} photo={seatActive ? config.userPhoto : null} />
      </mesh>

      {/* Seat — rear passenger step */}
      <mesh position={[0, 0.72, 1.65]} castShadow>
        <capsuleGeometry args={[0.22, 0.5, 12, 24]} />
        <Upholstery color={seatColor} config={config} />
      </mesh>

      <Stitching config={config} position={[0, 0.96, 0.3]} scale={[0.55, 1, 0.9]} />

      {/* Handlebar stem */}
      <mesh position={[0, 0.92, -0.55]} rotation={[0.15, 0, 0]}>
        <cylinderGeometry args={[0.045, 0.045, 0.42, 16]} />
        <Chrome />
      </mesh>

      {/* Handlebar crossbar */}
      <mesh position={[0, 1.08, -0.5]} rotation={[0.12, 0, 0]}>
        <cylinderGeometry args={[0.035, 0.035, 1.05, 16]} />
        <Chrome />
      </mesh>

      {/* Left grip */}
      <mesh position={[-0.55, 1.08, -0.48]} rotation={[0.12, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.04, 0.04, 0.32, 16]} />
        <meshPhysicalMaterial color={accent} roughness={0.55} metalness={0.12} clearcoat={0.2} />
      </mesh>

      {/* Right grip */}
      <mesh position={[0.55, 1.08, -0.48]} rotation={[0.12, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.04, 0.04, 0.32, 16]} />
        <meshPhysicalMaterial color={accent} roughness={0.55} metalness={0.12} clearcoat={0.2} />
      </mesh>

      {/* Left mirror */}
      <mesh position={[-0.62, 1.12, -0.48]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshPhysicalMaterial color="#0a0a0a" roughness={0.03} metalness={0.95} clearcoat={1} envMapIntensity={2.8} />
      </mesh>
      <mesh position={[-0.58, 1.06, -0.48]} rotation={[0, 0, 0.3]}>
        <cylinderGeometry args={[0.012, 0.012, 0.12, 10]} />
        <Chrome />
      </mesh>

      {/* Right mirror */}
      <mesh position={[0.62, 1.12, -0.48]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshPhysicalMaterial color="#0a0a0a" roughness={0.03} metalness={0.95} clearcoat={1} envMapIntensity={2.8} />
      </mesh>
      <mesh position={[0.58, 1.06, -0.48]} rotation={[0, 0, -0.3]}>
        <cylinderGeometry args={[0.012, 0.012, 0.12, 10]} />
        <Chrome />
      </mesh>

      {/* Rear platform / swim step */}
      <mesh position={[0, 0.32, 2.55]}>
        <boxGeometry args={[1.1, 0.06, 0.55]} />
        <meshPhysicalMaterial color="#2a3842" roughness={0.6} metalness={0.15} clearcoat={0.3} />
      </mesh>

      {/* Rear platform mat */}
      <mesh position={[0, 0.36, 2.55]} receiveShadow>
        <boxGeometry args={[0.95, 0.025, 0.42]} />
        <Upholstery color={matColor} config={config} />
      </mesh>

      {/* Exhaust outlet */}
      <mesh position={[0, 0.18, 2.75]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.06, 0.07, 0.08, 16]} />
        <Chrome tint="#888" />
      </mesh>

      {/* Side accent trim L */}
      <mesh position={[-1.15, 0.32, 0.2]}>
        <boxGeometry args={[0.035, 0.08, 2.6]} />
        <meshPhysicalMaterial color={accent} roughness={0.35} metalness={0.15} clearcoat={0.3} />
      </mesh>

      {/* Side accent trim R */}
      <mesh position={[1.15, 0.32, 0.2]}>
        <boxGeometry args={[0.035, 0.08, 2.6]} />
        <meshPhysicalMaterial color={accent} roughness={0.35} metalness={0.15} clearcoat={0.3} />
      </mesh>

      {/* Front accent stripe */}
      <mesh position={[0, 0.52, -1.7]}>
        <boxGeometry args={[0.9, 0.03, 0.03]} />
        <meshPhysicalMaterial color={accent} roughness={0.35} metalness={0.15} clearcoat={0.3} />
      </mesh>

      {/* Tow hook */}
      <mesh position={[0, 0.22, -2.75]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.06, 0.018, 10, 20]} />
        <Chrome />
      </mesh>

      {/* Cleats L */}
      <mesh position={[-0.85, 0.5, -0.1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.08, 12]} />
        <Chrome />
      </mesh>

      {/* Cleats R */}
      <mesh position={[0.85, 0.5, -0.1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.08, 12]} />
        <Chrome />
      </mesh>

      {/* Seat grab handles */}
      <mesh position={[-0.38, 0.82, 1.7]}>
        <torusGeometry args={[0.04, 0.012, 8, 16, Math.PI]} />
        <Chrome />
      </mesh>
      <mesh position={[0.38, 0.82, 1.7]}>
        <torusGeometry args={[0.04, 0.012, 8, 16, Math.PI]} />
        <Chrome />
      </mesh>

      {/* Mat stitching accent */}
      {matActive && <Stitching config={config} position={[0, 0.42, 0.6]} scale={[1.0, 1, 1.8]} />}
    </group>
  );
}

/* ─── Yacht ───────────────────────────────────────────── */

function Yacht({ config }: VehicleModelProps) {
  const main = getColor(config.mainColor, config.customMainColor, '#111827');
  const accent = getColor(config.accentColor, config.customAccentColor, '#c2413a');
  const seatsActive = config.product === 'yacht-seats';
  const coverActive = config.product === 'yacht-covers';

  const hullShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -3.8);
    shape.bezierCurveTo(0.5, -3.8, 1.6, -3.4, 1.95, -2.5);
    shape.bezierCurveTo(2.2, -1.8, 2.35, -0.6, 2.35, 0);
    shape.bezierCurveTo(2.35, 0.6, 2.2, 1.8, 1.95, 2.5);
    shape.bezierCurveTo(1.6, 3.4, 0.5, 3.8, 0, 3.8);
    shape.bezierCurveTo(-0.5, 3.8, -1.6, 3.4, -1.95, 2.5);
    shape.bezierCurveTo(-2.2, 1.8, -2.35, 0.6, -2.35, 0);
    shape.bezierCurveTo(-2.35, -0.6, -2.2, -1.8, -1.95, -2.5);
    shape.bezierCurveTo(-1.6, -3.4, -0.5, -3.8, 0, -3.8);
    return shape;
  }, []);

  return (
    <group rotation={[0, -0.15, 0]}>
      {/* Hull */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
        <extrudeGeometry args={[hullShape, { steps: 1, depth: 0.65, bevelEnabled: true, bevelThickness: 0.25, bevelSize: 0.18, bevelSegments: 10 }]} />
        <Paint color="#dce4e6" metalness={0.28} />
      </mesh>

      {/* Waterline stripe */}
      <mesh position={[0, -0.05, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <extrudeGeometry args={[hullShape, { steps: 1, depth: 0.06, bevelEnabled: false }]} />
        <Paint color="#173448" />
      </mesh>

      {/* Deck */}
      <mesh position={[0, 0.52, 0]}>
        <boxGeometry args={[3.6, 0.08, 6.8]} />
        <meshPhysicalMaterial color="#e8eeef" roughness={0.25} metalness={0.2} clearcoat={0.35} />
      </mesh>

      {/* Cabin */}
      <mesh position={[0.8, 1.15, 0]} castShadow>
        <boxGeometry args={[1.8, 0.95, 3.2]} />
        <Paint color="#d4e0e3" clearcoat={0.5} />
      </mesh>

      {/* Cabin roof */}
      <mesh position={[0.8, 1.7, 0]}>
        <boxGeometry args={[1.95, 0.08, 3.4]} />
        <Paint color="#c8d6da" />
      </mesh>

      {/* Windows */}
      <mesh position={[1.72, 1.2, 0]}>
        <boxGeometry args={[0.04, 0.55, 2.8]} />
        <Glass />
      </mesh>
      <mesh position={[-0.12, 1.2, 0]}>
        <boxGeometry args={[0.04, 0.55, 2.8]} />
        <Glass />
      </mesh>

      {/* Window pillars */}
      {[-1.1, -0.4, 0.3, 1.0].map((z) => (
        <mesh key={z} position={[0.8, 1.2, z]}>
          <boxGeometry args={[1.82, 0.6, 0.06]} />
          <Paint color="#b8c8cc" />
        </mesh>
      ))}

      {/* Seating area */}
      <mesh position={[-0.8, 0.62, 0]}>
        <boxGeometry args={[1.6, 0.16, 3.2]} />
        <Upholstery color={seatsActive ? main : '#263944'} config={config} photo={seatsActive ? config.userPhoto : null} />
      </mesh>

      {/* Seating backrests */}
      {[-1.3, 0, 1.3].map((z) => (
        <mesh key={z} position={[-0.8, 0.82, z]}>
          <boxGeometry args={[0.08, 0.28, 0.9]} />
          <Upholstery color={seatsActive ? accent : '#263944'} config={config} />
        </mesh>
      ))}

      {/* Seating seat cushions */}
      {[-1.3, 0, 1.3].map((z) => (
        <mesh key={z} position={[-0.8, 0.72, z]}>
          <boxGeometry args={[0.75, 0.06, 0.85]} />
          <Upholstery color={seatsActive ? main : '#2a3f4a'} config={config} />
        </mesh>
      ))}

      {/* Bimini top / cover */}
      {coverActive && (
        <mesh position={[-0.6, 2.05, 0]} rotation={[0, 0, -0.04]}>
          <boxGeometry args={[2.8, 0.05, 3.4]} />
          <Upholstery color={main} config={config} photo={config.userPhoto} />
        </mesh>
      )}

      {/* Bimini supports */}
      {[[-1.85, -1.5], [-1.85, 1.5], [0.65, -1.5], [0.65, 1.5]].map(([x, z]) => (
        <mesh key={`${x}-${z}`} position={[x, 1.25, z]}>
          <cylinderGeometry args={[0.025, 0.025, 1.6, 10]} />
          <Chrome />
        </mesh>
      ))}

      {/* Bow pulpit */}
      <mesh position={[0, 0.58, -3.55]}>
        <boxGeometry args={[0.6, 0.06, 0.8]} />
        <Chrome />
      </mesh>

      {/* Railing */}
      <mesh position={[0, 0.9, -2.8]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.02, 0.008, 8, 24]} />
        <Chrome />
      </mesh>

      {/* Cleats */}
      {[-1.9, -1.0, 0, 1.0, 1.9].map((z) => (
        <mesh key={z} position={[1.85, 0.58, z]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.02, 0.02, 0.08, 10]} />
          <Chrome />
        </mesh>
      ))}

      <Stitching config={config} position={[-0.8, 0.72, 0]} scale={[0.6, 1, 2.4]} />
    </group>
  );
}

/* ─── Ship ────────────────────────────────────────────── */

function Ship({ config }: VehicleModelProps) {
  const main = getColor(config.mainColor, config.customMainColor, '#111827');
  const accent = getColor(config.accentColor, config.customAccentColor, '#c2413a');
  const seatsActive = config.product === 'ship-seats';
  const coverActive = config.product === 'ship-covers';

  return (
    <group rotation={[0, -0.18, 0]}>
      {/* Hull */}
      <mesh position={[0, -0.2, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 1.0, 7.2]} />
        <Paint color="#193448" metalness={0.3} />
      </mesh>

      {/* Bow wedge */}
      <mesh position={[0, -0.2, -4.1]} castShadow>
        <coneGeometry args={[1.6, 1.6, 4]} />
        <Paint color="#193448" metalness={0.3} />
      </mesh>

      {/* Deck plate */}
      <mesh position={[0, 0.32, 0]}>
        <boxGeometry args={[3.0, 0.08, 6.8]} />
        <meshPhysicalMaterial color="#d8e2e5" roughness={0.28} metalness={0.22} clearcoat={0.3} />
      </mesh>

      {/* Bridge superstructure */}
      <mesh position={[1.2, 1.15, -0.5]} castShadow>
        <boxGeometry args={[1.6, 1.4, 2.8]} />
        <Paint color="#1f4058" clearcoat={0.4} />
      </mesh>

      {/* Bridge windows */}
      <mesh position={[2.02, 1.2, -0.5]}>
        <boxGeometry args={[0.04, 0.65, 2.4]} />
        <Glass />
      </mesh>

      {/* Bridge roof */}
      <mesh position={[1.2, 1.92, -0.5]}>
        <boxGeometry args={[1.75, 0.06, 3.0]} />
        <Paint color="#1a3548" />
      </mesh>

      {/* Bridge window dividers */}
      {[-1.3, -0.6, 0.1, 0.8].map((z) => (
        <mesh key={z} position={[1.2, 1.2, z]}>
          <boxGeometry args={[1.62, 0.68, 0.06]} />
          <Paint color="#162e40" />
        </mesh>
      ))}

      {/* Seating rows */}
      {[-2.2, -1.2, -0.2, 0.8, 1.8].map((z) => (
        <group key={z}>
          <mesh position={[0, 0.45, z]}>
            <boxGeometry args={[1.8, 0.12, 0.85]} />
            <Upholstery color={seatsActive ? main : '#364b54'} config={config} photo={seatsActive ? config.userPhoto : null} />
          </mesh>
          <mesh position={[0, 0.62, z + 0.35]}>
            <boxGeometry args={[1.8, 0.22, 0.06]} />
            <Upholstery color={seatsActive ? accent : '#3e5560'} config={config} />
          </mesh>
        </group>
      ))}

      {/* Cover */}
      {coverActive && (
        <mesh position={[-0.2, 1.55, 0]}>
          <boxGeometry args={[3.2, 0.05, 5.6]} />
          <Upholstery color={main} config={config} photo={config.userPhoto} />
        </mesh>
      )}

      {/* Cover supports */}
      {[-2.4, -1.2, 0, 1.2, 2.4].map((z) => (
        <mesh key={z} position={[1.4, 0.9, z]}>
          <cylinderGeometry args={[0.02, 0.02, 1.25, 8]} />
          <Chrome />
        </mesh>
      ))}

      {/* Mast */}
      <mesh position={[-1.5, 1.2, -0.5]}>
        <cylinderGeometry args={[0.04, 0.04, 2.0, 12]} />
        <Chrome />
      </mesh>

      {/* Radar */}
      <mesh position={[-1.5, 2.25, -0.5]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.015, 0.015, 0.6, 10]} />
        <Chrome />
      </mesh>

      {/* Navigation lights */}
      <mesh position={[-1.62, 0.42, -3.4]}>
        <sphereGeometry args={[0.04, 10, 10]} />
        <meshStandardMaterial color="#ff2222" emissive="#ff2222" emissiveIntensity={2} />
      </mesh>
      <mesh position={[1.62, 0.42, -3.4]}>
        <sphereGeometry args={[0.04, 10, 10]} />
        <meshStandardMaterial color="#22ff22" emissive="#22ff22" emissiveIntensity={2} />
      </mesh>

      {/* Bollards */}
      {[-2.5, 2.5].map((z) => (
        <mesh key={z} position={[0, 0.42, z]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.12, 10]} />
          <Chrome />
        </mesh>
      ))}

      <Stitching config={config} position={[0, 0.52, 0]} scale={[1.3, 1, 4.0]} />
    </group>
  );
}

/* ─── Bike ────────────────────────────────────────────── */

function Bike({ config }: VehicleModelProps) {
  const main = getColor(config.mainColor, config.customMainColor, '#111827');
  const accent = getColor(config.accentColor, config.customAccentColor, '#c2413a');

  return (
    <group rotation={[0, -0.3, 0]}>
      {/* Rear wheel */}
      <group position={[-1.4, -0.32, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh>
          <torusGeometry args={[0.72, 0.13, 24, 48]} />
          <Rubber />
        </mesh>
        <mesh>
          <torusGeometry args={[0.44, 0.025, 12, 32]} />
          <Chrome />
        </mesh>
        {/* Spokes */}
        {Array.from({ length: 12 }, (_, i) => (i * Math.PI) / 6).map((angle) => (
          <mesh key={angle} rotation={[0, 0, angle]}>
            <cylinderGeometry args={[0.006, 0.006, 0.88, 6]} />
            <Chrome />
          </mesh>
        ))}
        <mesh>
          <cylinderGeometry args={[0.08, 0.08, 0.14, 16]} />
          <Chrome />
        </mesh>
      </group>

      {/* Front wheel */}
      <group position={[1.5, -0.32, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh>
          <torusGeometry args={[0.72, 0.13, 24, 48]} />
          <Rubber />
        </mesh>
        <mesh>
          <torusGeometry args={[0.44, 0.025, 12, 32]} />
          <Chrome />
        </mesh>
        {Array.from({ length: 12 }, (_, i) => (i * Math.PI) / 6).map((angle) => (
          <mesh key={angle} rotation={[0, 0, angle]}>
            <cylinderGeometry args={[0.006, 0.006, 0.88, 6]} />
            <Chrome />
          </mesh>
        ))}
        <mesh>
          <cylinderGeometry args={[0.08, 0.08, 0.14, 16]} />
          <Chrome />
        </mesh>
      </group>

      {/* Frame — main spine */}
      <mesh position={[0, 0.28, 0]} rotation={[0, 0, 0.18]}>
        <cylinderGeometry args={[0.065, 0.065, 2.8, 16]} />
        <Paint color="#222e36" metalness={0.55} />
      </mesh>

      {/* Frame — down tube */}
      <mesh position={[0.4, 0.05, 0]} rotation={[0, 0, 0.95]}>
        <cylinderGeometry args={[0.05, 0.05, 1.6, 14]} />
        <Paint color="#222e36" metalness={0.55} />
      </mesh>

      {/* Frame — rear subframe */}
      <mesh position={[-0.8, 0.52, 0]} rotation={[0, 0, -0.35]}>
        <cylinderGeometry args={[0.045, 0.045, 1.1, 12]} />
        <Paint color="#222e36" metalness={0.55} />
      </mesh>

      {/* Engine block */}
      <mesh position={[0.15, 0.08, 0]} castShadow>
        <boxGeometry args={[0.72, 0.55, 0.52]} />
        <meshPhysicalMaterial color="#1e2a32" roughness={0.3} metalness={0.55} clearcoat={0.3} />
      </mesh>

      {/* Engine fins */}
      {[-0.18, -0.06, 0.06, 0.18, 0.3].map((z) => (
        <mesh key={z} position={[0.15, 0.08, z]}>
          <boxGeometry args={[0.74, 0.025, 0.04]} />
          <meshPhysicalMaterial color="#2a3a44" roughness={0.35} metalness={0.5} />
        </mesh>
      ))}

      {/* Fuel tank */}
      <mesh position={[0.15, 0.72, 0]} castShadow>
        <capsuleGeometry args={[0.22, 0.65, 12, 24]} />
        <PhysicalTank color={main} config={config} />
      </mesh>

      {/* Seat */}
      <mesh position={[-0.55, 0.68, 0]} castShadow>
        <capsuleGeometry args={[0.14, 0.95, 12, 24]} />
        <Upholstery color={main} config={config} photo={config.userPhoto} />
      </mesh>

      <Stitching config={config} position={[-0.55, 0.82, 0]} scale={[0.5, 1, 0.8]} />

      {/* Exhaust pipes */}
      <mesh position={[-0.15, -0.12, 0.28]} rotation={[0.05, 0, -0.12]}>
        <cylinderGeometry args={[0.04, 0.055, 1.4, 16]} />
        <Chrome tint="#a8a8a8" />
      </mesh>
      <mesh position={[-0.15, -0.12, -0.28]} rotation={[0.05, 0, -0.12]}>
        <cylinderGeometry args={[0.04, 0.055, 1.4, 16]} />
        <Chrome tint="#a8a8a8" />
      </mesh>

      {/* Muffler */}
      <mesh position={[-1.3, -0.02, 0.3]} rotation={[0, 0, -0.15]}>
        <cylinderGeometry args={[0.06, 0.06, 0.45, 16]} />
        <Chrome tint="#888" />
      </mesh>

      {/* Front forks */}
      <mesh position={[1.35, 0.38, 0]} rotation={[0, 0, -0.15]}>
        <cylinderGeometry args={[0.035, 0.035, 1.3, 14]} />
        <Chrome />
      </mesh>

      {/* Handlebars */}
      <mesh position={[1.52, 1.12, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 0.9, 14]} />
        <Chrome />
      </mesh>

      {/* Left grip */}
      <mesh position={[1.52, 1.12, -0.5]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.038, 0.038, 0.22, 14]} />
        <meshPhysicalMaterial color={accent} roughness={0.55} metalness={0.1} clearcoat={0.2} />
      </mesh>

      {/* Right grip */}
      <mesh position={[1.52, 1.12, 0.5]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.038, 0.038, 0.22, 14]} />
        <meshPhysicalMaterial color={accent} roughness={0.55} metalness={0.1} clearcoat={0.2} />
      </mesh>

      {/* Headlight */}
      <mesh position={[1.55, 0.95, 0]}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshPhysicalMaterial color="#fffbe6" roughness={0.1} metalness={0.05} clearcoat={1} />
      </mesh>

      {/* Tail light */}
      <mesh position={[-1.15, 0.52, 0]}>
        <boxGeometry args={[0.04, 0.08, 0.18]} />
        <meshStandardMaterial color="#ff1a1a" emissive="#ff1a1a" emissiveIntensity={1.5} />
      </mesh>

      {/* Brake disc front */}
      <mesh position={[1.5, -0.32, 0.32]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.22, 0.012, 8, 28]} />
        <Chrome tint="#999" />
      </mesh>

      {/* Brake disc rear */}
      <mesh position={[-1.4, -0.32, 0.32]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.22, 0.012, 8, 28]} />
        <Chrome tint="#999" />
      </mesh>

      {/* Kickstand */}
      <mesh position={[-0.2, -0.18, 0.42]} rotation={[0, 0, 0.35]}>
        <cylinderGeometry args={[0.015, 0.015, 0.45, 8]} />
        <Chrome />
      </mesh>
    </group>
  );
}

function PhysicalTank({ color, config }: { color: string; config: VehicleConfiguration }) {
  const m = getMatProps(config.material);
  return (
    <meshPhysicalMaterial
      color={color}
      roughness={Math.min(m.roughness, 0.25)}
      metalness={Math.max(m.metalness, 0.35)}
      clearcoat={0.85}
      clearcoatRoughness={0.08}
      envMapIntensity={1.5}
      sheen={0.15}
      sheenRoughness={0.4}
      sheenColor={color}
    >
      {config.userPhoto && <PhotoTex url={config.userPhoto} />}
    </meshPhysicalMaterial>
  );
}

/* ─── Car ─────────────────────────────────────────────── */

function Car({ config }: VehicleModelProps) {
  const main = getColor(config.mainColor, config.customMainColor, '#111827');
  const accent = getColor(config.accentColor, config.customAccentColor, '#c2413a');

  return (
    <group rotation={[0, -0.22, 0]}>
      {/* Body lower */}
      <mesh position={[0, 0.05, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.8, 0.5, 4.6]} />
        <Paint color="#2e4a58" metalness={0.48} />
      </mesh>

      {/* Body upper / cabin */}
      <mesh position={[0.15, 0.62, 0.1]} castShadow>
        <boxGeometry args={[2.4, 0.65, 2.8]} />
        <Paint color="#253f4e" metalness={0.42} />
      </mesh>

      {/* Windshield */}
      <mesh position={[-0.75, 0.82, 0.1]} rotation={[0, 0, 0.35]}>
        <boxGeometry args={[0.04, 0.52, 2.2]} />
        <Glass />
      </mesh>

      {/* Rear window */}
      <mesh position={[1.05, 0.82, 0.1]} rotation={[0, 0, -0.3]}>
        <boxGeometry args={[0.04, 0.42, 2.1]} />
        <Glass />
      </mesh>

      {/* Side windows */}
      <mesh position={[0.15, 0.82, 1.12]}>
        <boxGeometry args={[1.8, 0.38, 0.04]} />
        <Glass />
      </mesh>
      <mesh position={[0.15, 0.82, -1.12]}>
        <boxGeometry args={[1.8, 0.38, 0.04]} />
        <Glass />
      </mesh>

      {/* Wheels */}
      {[[-1.15, -0.38, -1.25], [-1.15, -0.38, 1.25], [1.3, -0.38, -1.25], [1.3, -0.38, 1.25]].map(([x, y, z], i) => (
        <group key={i} position={[x, y, z]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh>
            <torusGeometry args={[0.4, 0.13, 24, 40]} />
            <Rubber />
          </mesh>
          <mesh>
            <torusGeometry args={[0.24, 0.02, 10, 24]} />
            <Chrome />
          </mesh>
          {/* Hub */}
          <mesh>
            <cylinderGeometry args={[0.12, 0.12, 0.08, 20]} />
            <Chrome />
          </mesh>
          {/* Spoke pattern */}
          {Array.from({ length: 5 }, (_, i) => (i * Math.PI * 2) / 5).map((angle) => (
            <mesh key={angle} rotation={[0, 0, angle]}>
              <boxGeometry args={[0.025, 0.22, 0.02]} />
              <Chrome />
            </mesh>
          ))}
        </group>
      ))}

      {/* Wheel arches */}
      {[[-1.15, 0.05, -1.35], [-1.15, 0.05, 1.35], [1.3, 0.05, -1.35], [1.3, 0.05, 1.35]].map(([x, y, z], i) => (
        <mesh key={i} position={[x, y, z]}>
          <boxGeometry args={[0.55, 0.22, 0.1]} />
          <Paint color="#222e38" />
        </mesh>
      ))}

      {/* Seats */}
      <mesh position={[-0.15, 0.22, -0.6]}>
        <boxGeometry args={[0.72, 0.2, 0.9]} />
        <Upholstery color={main} config={config} photo={config.userPhoto} />
      </mesh>
      <mesh position={[-0.15, 0.22, 0.6]}>
        <boxGeometry args={[0.72, 0.2, 0.9]} />
        <Upholstery color={main} config={config} />
      </mesh>

      {/* Seat backrests */}
      <mesh position={[-0.52, 0.42, -0.6]} rotation={[0, 0, 0.1]}>
        <boxGeometry args={[0.08, 0.35, 0.85]} />
        <Upholstery color={main} config={config} />
      </mesh>
      <mesh position={[-0.52, 0.42, 0.6]} rotation={[0, 0, 0.1]}>
        <boxGeometry args={[0.08, 0.35, 0.85]} />
        <Upholstery color={main} config={config} />
      </mesh>

      <Stitching config={config} position={[-0.15, 0.33, 0]} scale={[0.5, 1, 1.2]} />

      {/* Steering wheel */}
      <mesh position={[-0.6, 0.55, -0.55]} rotation={[0.5, 0, 0]}>
        <torusGeometry args={[0.16, 0.018, 10, 28]} />
        <meshPhysicalMaterial color="#1a1a1a" roughness={0.45} metalness={0.15} clearcoat={0.3} />
      </mesh>
      <mesh position={[-0.6, 0.55, -0.55]} rotation={[0.5, 0, 0]}>
        <cylinderGeometry args={[0.012, 0.012, 0.3, 8]} />
        <Chrome />
      </mesh>

      {/* Dashboard */}
      <mesh position={[-0.65, 0.42, 0]}>
        <boxGeometry args={[0.22, 0.12, 1.8]} />
        <meshPhysicalMaterial color="#1a1e22" roughness={0.7} metalness={0.08} />
      </mesh>

      {/* Headlights */}
      <mesh position={[-1.42, 0.15, -0.7]}>
        <sphereGeometry args={[0.09, 14, 14]} />
        <meshPhysicalMaterial color="#fffbe6" roughness={0.05} metalness={0.02} clearcoat={1} />
      </mesh>
      <mesh position={[-1.42, 0.15, 0.7]}>
        <sphereGeometry args={[0.09, 14, 14]} />
        <meshPhysicalMaterial color="#fffbe6" roughness={0.05} metalness={0.02} clearcoat={1} />
      </mesh>

      {/* Headlight housing */}
      <mesh position={[-1.4, 0.15, -0.7]}>
        <cylinderGeometry args={[0.1, 0.1, 0.04, 16]} />
        <Chrome />
      </mesh>
      <mesh position={[-1.4, 0.15, 0.7]}>
        <cylinderGeometry args={[0.1, 0.1, 0.04, 16]} />
        <Chrome />
      </mesh>

      {/* Tail lights */}
      <mesh position={[1.42, 0.18, -0.85]}>
        <boxGeometry args={[0.04, 0.1, 0.22]} />
        <meshStandardMaterial color="#ff1a1a" emissive="#ff1a1a" emissiveIntensity={1.8} />
      </mesh>
      <mesh position={[1.42, 0.18, 0.85]}>
        <boxGeometry args={[0.04, 0.1, 0.22]} />
        <meshStandardMaterial color="#ff1a1a" emissive="#ff1a1a" emissiveIntensity={1.8} />
      </mesh>

      {/* Side mirrors */}
      <mesh position={[-0.55, 0.72, -1.3]}>
        <boxGeometry args={[0.1, 0.07, 0.06]} />
        <Paint color="#222e38" />
      </mesh>
      <mesh position={[-0.55, 0.72, 1.3]}>
        <boxGeometry args={[0.1, 0.07, 0.06]} />
        <Paint color="#222e38" />
      </mesh>

      {/* Door lines */}
      <mesh position={[-0.05, 0.35, -1.27]}>
        <boxGeometry args={[1.6, 0.38, 0.01]} />
        <meshPhysicalMaterial color="#1a2830" roughness={0.5} metalness={0.2} />
      </mesh>
      <mesh position={[-0.05, 0.35, 1.27]}>
        <boxGeometry args={[1.6, 0.38, 0.01]} />
        <meshPhysicalMaterial color="#1a2830" roughness={0.5} metalness={0.2} />
      </mesh>

      {/* Door handles */}
      <mesh position={[-0.05, 0.38, -1.3]}>
        <boxGeometry args={[0.14, 0.025, 0.015]} />
        <Chrome />
      </mesh>
      <mesh position={[-0.05, 0.38, 1.3]}>
        <boxGeometry args={[0.14, 0.025, 0.015]} />
        <Chrome />
      </mesh>

      {/* Side accent stripe */}
      <mesh position={[0, 0.12, -1.27]}>
        <boxGeometry args={[2.5, 0.03, 0.01]} />
        <meshPhysicalMaterial color={accent} roughness={0.3} metalness={0.15} clearcoat={0.3} />
      </mesh>
      <mesh position={[0, 0.12, 1.27]}>
        <boxGeometry args={[2.5, 0.03, 0.01]} />
        <meshPhysicalMaterial color={accent} roughness={0.3} metalness={0.15} clearcoat={0.3} />
      </mesh>

      {/* Antenna */}
      <mesh position={[0.8, 1.05, -0.8]}>
        <cylinderGeometry args={[0.008, 0.008, 0.4, 6]} />
        <Chrome />
      </mesh>
    </group>
  );
}

/* ─── Export ──────────────────────────────────────────── */

export function VehicleModel({ config }: VehicleModelProps) {
  if (config.vehicle === 'jet-ski') return <JetSki config={config} />;
  if (config.vehicle === 'yacht') return <Yacht config={config} />;
  if (config.vehicle === 'ship') return <Ship config={config} />;
  if (config.vehicle === 'bike') return <Bike config={config} />;
  return <Car config={config} />;
}
