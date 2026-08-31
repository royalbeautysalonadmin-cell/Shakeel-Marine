import { useRef, useMemo } from 'react';
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

function getMaterialProps(id: string) {
  const mat = materialOptions.find((m) => m.id === id) ?? materialOptions[0];
  return { roughness: mat.roughness, metalness: mat.metalness };
}

function getPattern(id: string) {
  return designOptions.find((design) => design.id === id)?.pattern ?? 'plain';
}

function PhotoTexture({ url }: { url: string }) {
  const texture = useMemo(() => {
    const tex = new THREE.TextureLoader().load(url);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    return tex;
  }, [url]);
  return <primitive attach="map" object={texture} />;
}

function PhysicalSurface({ color, config, photoUrl }: { color: string; config: VehicleConfiguration; photoUrl?: string | null }) {
  const mat = getMaterialProps(config.material);
  return (
    <meshPhysicalMaterial
      color={color}
      roughness={mat.roughness}
      metalness={mat.metalness}
      clearcoat={0.15}
      clearcoatRoughness={0.4}
      sheen={0.2}
      sheenRoughness={0.5}
      sheenColor={color}
    >
      {photoUrl && <PhotoTexture url={photoUrl} />}
    </meshPhysicalMaterial>
  );
}

function BodyShell({ color, metalness = 0.32 }: { color: string; metalness?: number }) {
  return (
    <meshPhysicalMaterial
      color={color}
      roughness={0.22}
      metalness={metalness}
      clearcoat={0.8}
      clearcoatRoughness={0.12}
      envMapIntensity={1.2}
    />
  );
}

function GlassSurface() {
  return (
    <meshPhysicalMaterial
      color="#7ec8d8"
      roughness={0.05}
      metalness={0.1}
      transmission={0.6}
      thickness={0.5}
      clearcoat={1}
      clearcoatRoughness={0.05}
      ior={1.52}
      envMapIntensity={1.5}
    />
  );
}

function ChromeSurface({ color = '#c0c8cc' }: { color?: string }) {
  return (
    <meshPhysicalMaterial
      color={color}
      roughness={0.08}
      metalness={0.95}
      clearcoat={0.5}
      clearcoatRoughness={0.1}
      envMapIntensity={2}
    />
  );
}

function RubberSurface() {
  return (
    <meshPhysicalMaterial
      color="#111820"
      roughness={0.88}
      metalness={0.02}
      clearcoat={0.05}
    />
  );
}

function AccentDetails({ config, position = [0, 0, 0] as [number, number, number], scale = [1, 1, 1] as [number, number, number] }: { config: VehicleConfiguration; position?: [number, number, number]; scale?: [number, number, number] }) {
  const accent = getColor(config.accentColor, config.customAccentColor, '#c2413a');
  const stitching = getColor(config.stitchingColor, config.customStitchingColor, '#f5f7f8');
  const pattern = getPattern(config.design);

  if (pattern === 'stripe') {
    return (
      <group position={position} scale={scale}>
        <mesh position={[-0.38, 0.03, 0]} rotation={[0, 0, -0.22]}>
          <boxGeometry args={[0.08, 0.04, 1.35]} />
          <meshPhysicalMaterial color={accent} roughness={0.35} metalness={0.12} clearcoat={0.3} clearcoatRoughness={0.2} />
        </mesh>
        <mesh position={[0, 0.035, 0]} rotation={[0, 0, -0.22]}>
          <boxGeometry args={[0.08, 0.04, 1.35]} />
          <meshPhysicalMaterial color={stitching} roughness={0.55} metalness={0.05} />
        </mesh>
        <mesh position={[0.38, 0.03, 0]} rotation={[0, 0, -0.22]}>
          <boxGeometry args={[0.08, 0.04, 1.35]} />
          <meshPhysicalMaterial color={accent} roughness={0.35} metalness={0.12} clearcoat={0.3} clearcoatRoughness={0.2} />
        </mesh>
      </group>
    );
  }

  if (pattern === 'diamond') {
    return (
      <group position={position} scale={scale}>
        {[-0.6, -0.2, 0.2, 0.6].map((x) => (
          <mesh key={x} position={[x, 0.035, 0]} rotation={[0, 0, Math.PI / 4]}>
            <boxGeometry args={[0.07, 0.04, 1.15]} />
            <meshPhysicalMaterial color={stitching} roughness={0.5} metalness={0.03} clearcoat={0.15} />
          </mesh>
        ))}
      </group>
    );
  }

  if (pattern === 'ribbed') {
    return (
      <group position={position} scale={scale}>
        {[-0.6, -0.3, 0, 0.3, 0.6].map((z) => (
          <mesh key={z} position={[0, 0.04, z]}>
            <boxGeometry args={[1.15, 0.05, 0.035]} />
            <meshPhysicalMaterial color={stitching} roughness={0.6} metalness={0.02} clearcoat={0.1} />
          </mesh>
        ))}
      </group>
    );
  }

  if (pattern === 'carbon') {
    return (
      <group position={position} scale={scale}>
        {[-0.45, -0.15, 0.15, 0.45].map((x) => (
          <mesh key={x} position={[x, 0.035, 0]} rotation={[0, 0, -Math.PI / 4]}>
            <boxGeometry args={[0.035, 0.04, 1.25]} />
            <meshPhysicalMaterial color={accent} roughness={0.25} metalness={0.35} clearcoat={0.5} clearcoatRoughness={0.15} />
          </mesh>
        ))}
      </group>
    );
  }

  return (
    <mesh position={position} scale={scale}>
      <boxGeometry args={[1.25, 0.035, 0.035]} />
      <meshPhysicalMaterial color={stitching} roughness={0.55} metalness={0.03} />
    </mesh>
  );
}

function JetSkiModel({ config }: VehicleModelProps) {
  const main = getColor(config.mainColor, config.customMainColor, '#111827');
  const accent = getColor(config.accentColor, config.customAccentColor, '#c2413a');
  const seatActive = config.product === 'jet-ski-seat';
  const matActive = config.product === 'super-jet-floor-mat-kit';
  const seatColor = seatActive ? main : '#242c32';
  const matColor = matActive ? main : '#193542';

  const jetSkiRef = useRef<THREE.Group>(null);

  return (
    <group ref={jetSkiRef} scale={[1, 1, 1]}>
      {/* Hull */}
      <mesh position={[0, -0.38, 0]} scale={[2.25, 0.42, 3.35]} castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 32]} />
        <BodyShell color="#dbe5e7" />
      </mesh>
      {/* Top deck */}
      <mesh position={[0, 0.02, 0.28]} scale={[2.02, 0.2, 2.92]} castShadow>
        <sphereGeometry args={[1, 64, 24]} />
        <meshPhysicalMaterial color="#153344" roughness={0.38} metalness={0.22} clearcoat={0.6} clearcoatRoughness={0.15} envMapIntensity={1.1} />
      </mesh>
      {/* Floor mat area */}
      <mesh position={[0, 0.2, 0.75]} scale={[1.55, 0.14, 1.6]} receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <PhysicalSurface color={matColor} config={config} photoUrl={matActive ? config.userPhoto : null} />
      </mesh>
      {/* Side footwell L */}
      <mesh position={[-1.63, 0.22, 0.62]} scale={[0.22, 0.13, 1.75]}>
        <boxGeometry args={[1, 1, 1]} />
        <PhysicalSurface color={matColor} config={config} photoUrl={matActive ? config.userPhoto : null} />
      </mesh>
      {/* Side footwell R */}
      <mesh position={[1.63, 0.22, 0.62]} scale={[0.22, 0.13, 1.75]}>
        <boxGeometry args={[1, 1, 1]} />
        <PhysicalSurface color={matColor} config={config} photoUrl={matActive ? config.userPhoto : null} />
      </mesh>
      {/* Seat */}
      <mesh position={[0, 0.47, -0.9]} scale={[0.76, 0.23, 1.45]} castShadow>
        <capsuleGeometry args={[0.58, 1.35, 16, 32]} />
        <PhysicalSurface color={seatColor} config={config} photoUrl={seatActive ? config.userPhoto : null} />
      </mesh>
      <AccentDetails config={config} position={[0, 0.72, -0.9]} scale={[0.62, 1, 0.88]} />
      {/* Handlebar housing */}
      <mesh position={[0, 0.76, 0.56]} scale={[0.68, 0.48, 0.72]} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial color="#202a30" roughness={0.28} metalness={0.28} clearcoat={0.7} clearcoatRoughness={0.12} />
      </mesh>
      {/* Handlebar bar */}
      <mesh position={[0, 1.26, 0.56]} rotation={[0.1, 0, 0]}>
        <boxGeometry args={[0.1, 0.1, 1.9]} />
        <ChromeSurface />
      </mesh>
      {/* Grips */}
      <mesh position={[-0.95, 1.25, 0.56]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.08, 0.08, 0.72, 24]} />
        <meshPhysicalMaterial color={accent} roughness={0.55} metalness={0.12} clearcoat={0.2} />
      </mesh>
      <mesh position={[0.95, 1.25, 0.56]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.08, 0.08, 0.72, 24]} />
        <meshPhysicalMaterial color={accent} roughness={0.55} metalness={0.12} clearcoat={0.2} />
      </mesh>
      {/* Mirror bar */}
      <mesh position={[0, 1.02, 0.56]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.06, 0.06, 2.15, 20]} />
        <ChromeSurface />
      </mesh>
      {/* Mirrors */}
      <mesh position={[-1.08, 1.15, 0.56]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshPhysicalMaterial color="#1a1a1a" roughness={0.05} metalness={0.9} clearcoat={1} clearcoatRoughness={0.05} envMapIntensity={2.5} />
      </mesh>
      <mesh position={[1.08, 1.15, 0.56]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshPhysicalMaterial color="#1a1a1a" roughness={0.05} metalness={0.9} clearcoat={1} clearcoatRoughness={0.05} envMapIntensity={2.5} />
      </mesh>
      {/* Seat accent stitching */}
      {seatActive && <AccentDetails config={config} position={[0, 0.72, -0.9]} scale={[0.62, 1, 0.88]} />}
      {/* Mat accent stitching */}
      {matActive && <AccentDetails config={config} position={[0, 0.36, 0.72]} scale={[1.1, 1, 1.55]} />}
    </group>
  );
}

function YachtModel({ config }: VehicleModelProps) {
  const main = getColor(config.mainColor, config.customMainColor, '#111827');
  const accent = getColor(config.accentColor, config.customAccentColor, '#c2413a');
  const seatsActive = config.product === 'yacht-seats';
  const coverActive = config.product === 'yacht-covers';

  return (
    <group rotation={[0, -0.18, 0]}>
      {/* Hull */}
      <mesh position={[0, -0.52, 0]} scale={[3.4, 0.58, 1.5]} castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 32]} />
        <BodyShell color="#e5ebec" metalness={0.25} />
      </mesh>
      {/* Deck stripe */}
      <mesh position={[0, -0.02, 0]} scale={[3.08, 0.16, 1.25]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial color="#173448" roughness={0.42} metalness={0.22} clearcoat={0.5} clearcoatRoughness={0.18} />
      </mesh>
      {/* Cabin */}
      <mesh position={[0.78, 0.58, 0]} scale={[1.55, 0.78, 1.05]} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial color="#d8e5e7" roughness={0.3} metalness={0.18} clearcoat={0.4} clearcoatRoughness={0.2} />
      </mesh>
      {/* Windows */}
      <mesh position={[0.78, 0.6, 0]} scale={[1.24, 0.45, 1.08]}>
        <boxGeometry args={[1, 1, 1]} />
        <GlassSurface />
      </mesh>
      {/* Seating area */}
      <mesh position={[-1.03, 0.46, 0]} scale={[1.06, 0.18, 1.03]}>
        <boxGeometry args={[1, 1, 1]} />
        <PhysicalSurface color={seatsActive ? main : '#263944'} config={config} photoUrl={seatsActive ? config.userPhoto : null} />
      </mesh>
      {/* Chairs */}
      {[[-1.67, 0.46, 0.25], [-1.67, 0.46, -0.25]].map(([x, y, z]) => (
        <mesh key={`${x}-${z}`} position={[x, y, z]} scale={[0.28, 0.18, 0.35]}>
          <boxGeometry args={[1, 1, 1]} />
          <PhysicalSurface color={seatsActive ? accent : '#263944'} config={config} />
        </mesh>
      ))}
      {/* Cover/canopy */}
      {coverActive && (
        <mesh position={[0.15, 1.45, 0]} scale={[2.4, 0.08, 1.2]} rotation={[0, 0, -0.08]}>
          <boxGeometry args={[1, 1, 1]} />
          <PhysicalSurface color={main} config={config} photoUrl={config.userPhoto} />
        </mesh>
      )}
      {/* Canopy poles */}
      <mesh position={[0.15, 1.07, -0.86]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 2.2, 16]} />
        <ChromeSurface color={coverActive ? accent : '#bbc8cb'} />
      </mesh>
      {seatsActive && <AccentDetails config={config} position={[-1.03, 0.58, 0]} scale={[0.8, 1, 0.8]} />}
    </group>
  );
}

function ShipModel({ config }: VehicleModelProps) {
  const main = getColor(config.mainColor, config.customMainColor, '#111827');
  const accent = getColor(config.accentColor, config.customAccentColor, '#c2413a');
  const seatsActive = config.product === 'ship-seats';
  const coverActive = config.product === 'ship-covers';

  return (
    <group rotation={[0, -0.2, 0]}>
      {/* Hull */}
      <mesh position={[0, -0.65, 0]} scale={[4.4, 0.7, 1.6]} castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 32]} />
        <BodyShell color="#193448" metalness={0.28} />
      </mesh>
      {/* Deck */}
      <mesh position={[0, 0, 0]} scale={[4.05, 0.2, 1.28]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial color="#dbe4e6" roughness={0.28} metalness={0.24} clearcoat={0.3} clearcoatRoughness={0.2} />
      </mesh>
      {/* Bridge */}
      <mesh position={[1.2, 0.72, 0]} scale={[1.25, 1.3, 1.1]} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial color="#23495b" roughness={0.42} metalness={0.26} clearcoat={0.35} clearcoatRoughness={0.2} />
      </mesh>
      {/* Bridge windows */}
      <mesh position={[1.2, 0.78, 0]} scale={[0.92, 0.62, 1.12]}>
        <boxGeometry args={[1, 1, 1]} />
        <GlassSurface />
      </mesh>
      {/* Seating rows */}
      {[-1.2, -0.45, 0.3].map((x) => (
        <mesh key={x} position={[x, 0.35, 0]} scale={[0.55, 0.22, 0.92]}>
          <boxGeometry args={[1, 1, 1]} />
          <PhysicalSurface color={seatsActive ? main : '#364b54'} config={config} photoUrl={seatsActive ? config.userPhoto : null} />
        </mesh>
      ))}
      {/* Cover */}
      {coverActive && (
        <mesh position={[-0.55, 1.12, 0]} scale={[2.75, 0.08, 1.22]} rotation={[0, 0, 0.05]}>
          <boxGeometry args={[1, 1, 1]} />
          <PhysicalSurface color={main} config={config} photoUrl={config.userPhoto} />
        </mesh>
      )}
      {/* Mast / antenna */}
      <mesh position={[-2.75, 0.22, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.06, 0.06, 0.95, 16]} />
        <ChromeSurface color={accent} />
      </mesh>
      {seatsActive && <AccentDetails config={config} position={[-1.2, 0.49, 0]} scale={[0.45, 1, 0.78]} />}
    </group>
  );
}

function BikeModel({ config }: VehicleModelProps) {
  const main = getColor(config.mainColor, config.customMainColor, '#111827');
  const accent = getColor(config.accentColor, config.customAccentColor, '#c2413a');

  return (
    <group rotation={[0, -0.35, 0]} scale={[1, 1, 1]}>
      {/* Wheels */}
      <mesh position={[-1.25, -0.35, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.7, 0.14, 24, 48]} />
        <RubberSurface />
      </mesh>
      <mesh position={[1.25, -0.35, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.7, 0.14, 24, 48]} />
        <RubberSurface />
      </mesh>
      {/* Wheel rims */}
      <mesh position={[-1.25, -0.35, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.42, 0.03, 12, 32]} />
        <ChromeSurface />
      </mesh>
      <mesh position={[1.25, -0.35, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.42, 0.03, 12, 32]} />
        <ChromeSurface />
      </mesh>
      {/* Frame */}
      <mesh position={[0, 0.15, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.12, 0.12, 2.65, 20]} />
        <ChromeSurface color="#9daeb3" />
      </mesh>
      {/* Engine block */}
      <mesh position={[0, 0.42, 0]} scale={[1.15, 0.45, 0.5]} rotation={[0, 0, -0.15]} castShadow>
        <sphereGeometry args={[1, 32, 20]} />
        <meshPhysicalMaterial color="#263f4a" roughness={0.28} metalness={0.5} clearcoat={0.3} clearcoatRoughness={0.2} />
      </mesh>
      {/* Fuel tank */}
      <mesh position={[0.05, 0.73, 0]} scale={[0.92, 0.16, 0.42]}>
        <boxGeometry args={[1, 1, 1]} />
        <PhysicalSurface color={main} config={config} photoUrl={config.userPhoto} />
      </mesh>
      {/* Exhaust */}
      <mesh position={[-0.63, 0.76, 0]} rotation={[0, 0, -0.12]}>
        <boxGeometry args={[0.65, 0.12, 0.38]} />
        <meshPhysicalMaterial color={accent} roughness={0.4} metalness={0.18} clearcoat={0.25} />
      </mesh>
      {/* Fork */}
      <mesh position={[1.1, 0.84, 0]} rotation={[0, 0, 0.65]}>
        <cylinderGeometry args={[0.07, 0.07, 1.35, 18]} />
        <ChromeSurface color="#aebdc0" />
      </mesh>
      {/* Handlebars */}
      <mesh position={[1.42, 1.18, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.07, 0.07, 1.3, 18]} />
        <ChromeSurface color="#9daeb3" />
      </mesh>
      {/* Seat */}
      <mesh position={[0, 1.08, 0]} scale={[0.95, 0.14, 0.38]}>
        <boxGeometry args={[1, 1, 1]} />
        <PhysicalSurface color={main} config={config} photoUrl={config.userPhoto} />
      </mesh>
      <AccentDetails config={config} position={[0, 1.17, 0]} scale={[0.66, 1, 0.7]} />
    </group>
  );
}

function CarModel({ config }: VehicleModelProps) {
  const main = getColor(config.mainColor, config.customMainColor, '#111827');
  const accent = getColor(config.accentColor, config.customAccentColor, '#c2413a');

  return (
    <group rotation={[0, -0.25, 0]}>
      {/* Body */}
      <mesh position={[0, 0, 0]} scale={[2.8, 0.55, 1.45]} castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <BodyShell color="#304b58" metalness={0.45} />
      </mesh>
      {/* Roof / cabin */}
      <mesh position={[0.25, 0.68, 0]} scale={[1.7, 0.72, 1.25]} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <BodyShell color="#244351" metalness={0.38} />
      </mesh>
      {/* Windows */}
      <mesh position={[-0.48, 0.73, 0]} scale={[0.65, 0.46, 1.27]}>
        <boxGeometry args={[1, 1, 1]} />
        <GlassSurface />
      </mesh>
      <mesh position={[0.58, 0.73, 0]} scale={[0.65, 0.46, 1.27]}>
        <boxGeometry args={[1, 1, 1]} />
        <GlassSurface />
      </mesh>
      {/* Wheels */}
      {[-1.7, 1.7].flatMap((x) => [-0.82, 0.82].map((z) => [x, -0.35, z] as [number, number, number])).map(([x, y, z]) => (
        <group key={`${x}-${z}`} position={[x, y, z]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh>
            <torusGeometry args={[0.42, 0.12, 24, 40]} />
            <RubberSurface />
          </mesh>
          <mesh>
            <torusGeometry args={[0.25, 0.025, 12, 24]} />
            <ChromeSurface />
          </mesh>
        </group>
      ))}
      {/* Seat L */}
      <mesh position={[-0.48, 0.1, 0]} scale={[0.82, 0.22, 1.08]}>
        <boxGeometry args={[1, 1, 1]} />
        <PhysicalSurface color={main} config={config} photoUrl={config.userPhoto} />
      </mesh>
      {/* Seat R */}
      <mesh position={[0.56, 0.1, 0]} scale={[0.82, 0.22, 1.08]}>
        <boxGeometry args={[1, 1, 1]} />
        <PhysicalSurface color={main} config={config} photoUrl={config.userPhoto} />
      </mesh>
      {/* Steering wheel */}
      <mesh position={[0, 0.58, -1.38]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.22, 0.025, 12, 32]} />
        <meshPhysicalMaterial color="#1a1a1a" roughness={0.5} metalness={0.2} clearcoat={0.3} />
      </mesh>
      {/* Steering column */}
      <mesh position={[0, 0.48, -1.25]} rotation={[0.5, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.4, 12]} />
        <ChromeSurface />
      </mesh>
      <AccentDetails config={config} position={[-0.48, 0.23, 0]} scale={[0.68, 1, 0.78]} />
    </group>
  );
}

export function VehicleModel({ config }: VehicleModelProps) {
  if (config.vehicle === 'jet-ski') return <JetSkiModel config={config} />;
  if (config.vehicle === 'yacht') return <YachtModel config={config} />;
  if (config.vehicle === 'ship') return <ShipModel config={config} />;
  if (config.vehicle === 'bike') return <BikeModel config={config} />;
  return <CarModel config={config} />;
}
