import type { VehicleConfiguration } from '@/data/configurator';
import { colorOptions, designOptions, materialOptions } from '@/data/configurator';

interface VehicleModelProps {
  config: VehicleConfiguration;
}

function getColor(id: string, customColor: string, fallback: string) {
  if (id === 'custom') return customColor;
  return colorOptions.find((color) => color.id === id)?.hex ?? fallback;
}

function getMaterial(id: string) {
  return materialOptions.find((material) => material.id === id) ?? materialOptions[0];
}

function getPattern(id: string) {
  return designOptions.find((design) => design.id === id)?.pattern ?? 'plain';
}

function Surface({ color, config }: { color: string; config: VehicleConfiguration }) {
  const material = getMaterial(config.material);
  return <meshStandardMaterial color={color} roughness={material.roughness} metalness={material.metalness} />;
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
          <meshStandardMaterial color={accent} roughness={0.45} metalness={0.1} />
        </mesh>
        <mesh position={[0, 0.035, 0]} rotation={[0, 0, -0.22]}>
          <boxGeometry args={[0.08, 0.04, 1.35]} />
          <meshStandardMaterial color={stitching} roughness={0.55} metalness={0.05} />
        </mesh>
        <mesh position={[0.38, 0.03, 0]} rotation={[0, 0, -0.22]}>
          <boxGeometry args={[0.08, 0.04, 1.35]} />
          <meshStandardMaterial color={accent} roughness={0.45} metalness={0.1} />
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
            <meshStandardMaterial color={stitching} roughness={0.62} metalness={0.02} />
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
            <meshStandardMaterial color={stitching} roughness={0.68} metalness={0.02} />
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
            <meshStandardMaterial color={accent} roughness={0.3} metalness={0.25} />
          </mesh>
        ))}
      </group>
    );
  }

  return (
    <mesh position={position} scale={scale}>
      <boxGeometry args={[1.25, 0.035, 0.035]} />
      <meshStandardMaterial color={stitching} roughness={0.6} metalness={0.02} />
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

  return (
    <group scale={[1, 1, 1]}>
      <mesh position={[0, -0.38, 0]} scale={[2.25, 0.42, 3.35]} castShadow receiveShadow>
        <sphereGeometry args={[1, 32, 16]} />
        <meshStandardMaterial color="#dbe5e7" roughness={0.26} metalness={0.32} />
      </mesh>
      <mesh position={[0, 0.02, 0.28]} scale={[2.02, 0.2, 2.92]} castShadow>
        <sphereGeometry args={[1, 32, 12]} />
        <meshStandardMaterial color="#153344" roughness={0.44} metalness={0.18} />
      </mesh>
      <mesh position={[0, 0.2, 0.75]} scale={[1.55, 0.14, 1.6]} receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <Surface color={matColor} config={config} />
      </mesh>
      <mesh position={[-1.63, 0.22, 0.62]} scale={[0.22, 0.13, 1.75]}>
        <boxGeometry args={[1, 1, 1]} />
        <Surface color={matColor} config={config} />
      </mesh>
      <mesh position={[1.63, 0.22, 0.62]} scale={[0.22, 0.13, 1.75]}>
        <boxGeometry args={[1, 1, 1]} />
        <Surface color={matColor} config={config} />
      </mesh>
      <mesh position={[0, 0.47, -0.9]} scale={[0.76, 0.23, 1.45]} castShadow>
        <capsuleGeometry args={[0.58, 1.35, 8, 20]} />
        <Surface color={seatColor} config={config} />
      </mesh>
      <AccentDetails config={config} position={[0, 0.72, -0.9]} scale={[0.62, 1, 0.88]} />
      <mesh position={[0, 0.76, 0.56]} scale={[0.68, 0.48, 0.72]} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#202a30" roughness={0.32} metalness={0.22} />
      </mesh>
      <mesh position={[0, 1.26, 0.56]} rotation={[0.1, 0, 0]}>
        <boxGeometry args={[0.1, 0.1, 1.9]} />
        <meshStandardMaterial color="#9baeb5" roughness={0.28} metalness={0.65} />
      </mesh>
      <mesh position={[-0.95, 1.25, 0.56]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.08, 0.08, 0.72, 16]} />
        <meshStandardMaterial color={accent} roughness={0.5} metalness={0.12} />
      </mesh>
      <mesh position={[0.95, 1.25, 0.56]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.08, 0.08, 0.72, 16]} />
        <meshStandardMaterial color={accent} roughness={0.5} metalness={0.12} />
      </mesh>
      <mesh position={[0, 1.02, 0.56]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.06, 0.06, 2.15, 16]} />
        <meshStandardMaterial color="#aebdc1" roughness={0.3} metalness={0.7} />
      </mesh>
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
      <mesh position={[0, -0.52, 0]} scale={[3.4, 0.58, 1.5]} castShadow receiveShadow>
        <sphereGeometry args={[1, 32, 16]} />
        <meshStandardMaterial color="#e5ebec" roughness={0.28} metalness={0.25} />
      </mesh>
      <mesh position={[0, -0.02, 0]} scale={[3.08, 0.16, 1.25]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#173448" roughness={0.5} metalness={0.2} />
      </mesh>
      <mesh position={[0.78, 0.58, 0]} scale={[1.55, 0.78, 1.05]} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#d8e5e7" roughness={0.35} metalness={0.16} />
      </mesh>
      <mesh position={[0.78, 0.6, 0]} scale={[1.24, 0.45, 1.08]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#79b7c6" roughness={0.2} metalness={0.4} />
      </mesh>
      <mesh position={[-1.03, 0.46, 0]} scale={[1.06, 0.18, 1.03]}>
        <boxGeometry args={[1, 1, 1]} />
        <Surface color={seatsActive ? main : '#263944'} config={config} />
      </mesh>
      {[[-1.67, 0.46, 0.25], [-1.67, 0.46, -0.25]].map(([x, y, z]) => (
        <mesh key={`${x}-${z}`} position={[x, y, z]} scale={[0.28, 0.18, 0.35]}>
          <boxGeometry args={[1, 1, 1]} />
          <Surface color={seatsActive ? accent : '#263944'} config={config} />
        </mesh>
      ))}
      {coverActive && (
        <mesh position={[0.15, 1.45, 0]} scale={[2.4, 0.08, 1.2]} rotation={[0, 0, -0.08]}>
          <boxGeometry args={[1, 1, 1]} />
          <Surface color={main} config={config} />
        </mesh>
      )}
      <mesh position={[0.15, 1.07, -0.86]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 2.2, 12]} />
        <meshStandardMaterial color={coverActive ? accent : '#bbc8cb'} roughness={0.42} metalness={0.45} />
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
      <mesh position={[0, -0.65, 0]} scale={[4.4, 0.7, 1.6]} castShadow receiveShadow>
        <sphereGeometry args={[1, 32, 16]} />
        <meshStandardMaterial color="#193448" roughness={0.44} metalness={0.28} />
      </mesh>
      <mesh position={[0, 0, 0]} scale={[4.05, 0.2, 1.28]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#dbe4e6" roughness={0.33} metalness={0.22} />
      </mesh>
      <mesh position={[1.2, 0.72, 0]} scale={[1.25, 1.3, 1.1]} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#23495b" roughness={0.48} metalness={0.24} />
      </mesh>
      <mesh position={[1.2, 0.78, 0]} scale={[0.92, 0.62, 1.12]}>
        <meshStandardMaterial color="#83b9c4" roughness={0.22} metalness={0.4} />
        <boxGeometry args={[1, 1, 1]} />
      </mesh>
      {[-1.2, -0.45, 0.3].map((x) => (
        <mesh key={x} position={[x, 0.35, 0]} scale={[0.55, 0.22, 0.92]}>
          <boxGeometry args={[1, 1, 1]} />
          <Surface color={seatsActive ? main : '#364b54'} config={config} />
        </mesh>
      ))}
      {coverActive && (
        <mesh position={[-0.55, 1.12, 0]} scale={[2.75, 0.08, 1.22]} rotation={[0, 0, 0.05]}>
          <boxGeometry args={[1, 1, 1]} />
          <Surface color={main} config={config} />
        </mesh>
      )}
      <mesh position={[-2.75, 0.22, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.06, 0.06, 0.95, 12]} />
        <meshStandardMaterial color={accent} roughness={0.44} metalness={0.28} />
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
      <mesh position={[-1.25, -0.35, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.7, 0.14, 12, 24]} />
        <meshStandardMaterial color="#111820" roughness={0.55} metalness={0.35} />
      </mesh>
      <mesh position={[1.25, -0.35, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.7, 0.14, 12, 24]} />
        <meshStandardMaterial color="#111820" roughness={0.55} metalness={0.35} />
      </mesh>
      <mesh position={[0, 0.15, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.12, 0.12, 2.65, 16]} />
        <meshStandardMaterial color="#9daeb3" roughness={0.28} metalness={0.7} />
      </mesh>
      <mesh position={[0, 0.42, 0]} scale={[1.15, 0.45, 0.5]} rotation={[0, 0, -0.15]} castShadow>
        <sphereGeometry args={[1, 24, 12]} />
        <meshStandardMaterial color="#263f4a" roughness={0.32} metalness={0.42} />
      </mesh>
      <mesh position={[0.05, 0.73, 0]} scale={[0.92, 0.16, 0.42]}>
        <boxGeometry args={[1, 1, 1]} />
        <Surface color={main} config={config} />
      </mesh>
      <mesh position={[-0.63, 0.76, 0]} rotation={[0, 0, -0.12]}>
        <boxGeometry args={[0.65, 0.12, 0.38]} />
        <meshStandardMaterial color={accent} roughness={0.45} metalness={0.14} />
      </mesh>
      <mesh position={[1.1, 0.84, 0]} rotation={[0, 0, 0.65]}>
        <cylinderGeometry args={[0.07, 0.07, 1.35, 14]} />
        <meshStandardMaterial color="#aebdc0" roughness={0.3} metalness={0.7} />
      </mesh>
      <mesh position={[1.42, 1.18, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.07, 0.07, 1.3, 14]} />
        <meshStandardMaterial color="#9daeb3" roughness={0.3} metalness={0.65} />
      </mesh>
      <mesh position={[0, 1.08, 0]} scale={[0.95, 0.14, 0.38]}>
        <boxGeometry args={[1, 1, 1]} />
        <Surface color={main} config={config} />
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
      <mesh position={[0, 0, 0]} scale={[2.8, 0.55, 1.45]} castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#304b58" roughness={0.32} metalness={0.38} />
      </mesh>
      <mesh position={[0.25, 0.68, 0]} scale={[1.7, 0.72, 1.25]} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#244351" roughness={0.4} metalness={0.3} />
      </mesh>
      <mesh position={[-0.48, 0.73, 0]} scale={[0.65, 0.46, 1.27]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#8bbbc4" roughness={0.2} metalness={0.35} />
      </mesh>
      <mesh position={[0.58, 0.73, 0]} scale={[0.65, 0.46, 1.27]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#8bbbc4" roughness={0.2} metalness={0.35} />
      </mesh>
      {[-1.7, 1.7].flatMap((x) => [-0.82, 0.82].map((z) => [x, -0.35, z] as [number, number, number])).map(([x, y, z]) => (
        <mesh key={`${x}-${z}`} position={[x, y, z]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.42, 0.12, 12, 20]} />
          <meshStandardMaterial color="#111820" roughness={0.58} metalness={0.3} />
        </mesh>
      ))}
      <mesh position={[-0.48, 0.1, 0]} scale={[0.82, 0.22, 1.08]}>
        <boxGeometry args={[1, 1, 1]} />
        <Surface color={main} config={config} />
      </mesh>
      <mesh position={[0.56, 0.1, 0]} scale={[0.82, 0.22, 1.08]}>
        <boxGeometry args={[1, 1, 1]} />
        <Surface color={main} config={config} />
      </mesh>
      <mesh position={[0, 0.58, -1.38]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.07, 0.07, 1.4, 14]} />
        <meshStandardMaterial color={accent} roughness={0.45} metalness={0.14} />
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
