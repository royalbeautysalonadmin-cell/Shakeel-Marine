'use client';

import { Component, Suspense, useEffect, useRef, useState, type ReactNode } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import type { CameraPreset, VehicleConfiguration } from '@/data/configurator';
import { VehicleModel } from '@/components/configurator/VehicleModels';
import { getRenderQuality } from '@/components/configurator/performance';

interface ModelViewerProps {
  config: VehicleConfiguration;
  cameraPreset: CameraPreset;
}

const cameraPositions: Record<CameraPreset, [number, number, number]> = {
  perspective: [7, 4.2, 7],
  front: [0, 2.2, 10],
  side: [10, 2.2, 0],
  rear: [0, 2.2, -10],
  top: [0, 10, 0.1],
};

function CameraRig({ preset, controlsRef }: { preset: CameraPreset; controlsRef: React.RefObject<OrbitControlsImpl | null> }) {
  const { camera } = useThree();

  useEffect(() => {
    const [x, y, z] = cameraPositions[preset];
    camera.position.set(x, y, z);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
    controlsRef.current?.target.set(0, 0, 0);
    controlsRef.current?.update();
  }, [camera, controlsRef, preset]);

  return null;
}

function ViewerGround() {
  return (
    <ContactShadows
      position={[0, -1.07, 0]}
      opacity={0.55}
      scale={18}
      blur={2.2}
      far={6}
      color="#02131c"
    />
  );
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ViewerErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error('Configurator preview error:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-full min-h-[420px] items-center justify-center p-8 text-center" role="status">
          <div className="max-w-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand">Preview unavailable</p>
            <h3 className="mt-3 font-heading text-xl font-bold text-white">We&apos;re having trouble loading the 3D preview.</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/55">You can still choose your design options and send them to Shakeel Marine.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export function ModelViewer({ config, cameraPreset }: ModelViewerProps) {
  const controlsRef = useRef<OrbitControlsImpl | null>(null);
  const [progress, setProgress] = useState(12);
  const quality = getRenderQuality();

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 100) {
          window.clearInterval(timer);
          return 100;
        }
        return Math.min(current + 11, 100);
      });
    }, 75);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative h-full min-h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-[#071b27]" role="img" aria-label={`${config.vehicle} 3D configurator preview`}>
      <ViewerErrorBoundary>
        <Canvas
          camera={{ position: cameraPositions.perspective, fov: 38, near: 0.1, far: 100 }}
          dpr={quality.pixelRatio}
          frameloop="demand"
          gl={{ antialias: quality.antialias, powerPreference: 'high-performance', toneMapping: 4, toneMappingExposure: 1.1 }}
          shadows={quality.tier !== 'low'}
        >
          <color attach="background" args={['#071b27']} />
          <fog attach="fog" args={['#071b27', 14, 32]} />

          {/* Lighting */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[6, 10, 6]} intensity={3.8} color="#fff8e9" castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
          <directionalLight position={[-5, 6, -4]} intensity={2.0} color="#68c8e0" />
          <pointLight position={[0, 3, 4]} intensity={1.5} color="#ffd9a0" distance={12} decay={2} />
          <pointLight position={[0, 2, -4]} intensity={0.8} color="#60b0c8" distance={10} decay={2} />

          <Suspense fallback={null}>
            <CameraRig preset={cameraPreset} controlsRef={controlsRef} />
            <VehicleModel config={config} />
            <ViewerGround />
            <Environment preset="city" environmentIntensity={0.8} backgroundBlurriness={1} />
          </Suspense>

          <OrbitControls
            ref={controlsRef}
            makeDefault
            enableDamping
            dampingFactor={0.08}
            enablePan={false}
            minDistance={3.5}
            maxDistance={18}
            rotateSpeed={0.65}
            zoomSpeed={0.8}
            minPolarAngle={0.3}
            maxPolarAngle={Math.PI / 2 - 0.05}
          />
        </Canvas>
      </ViewerErrorBoundary>

      {progress < 100 && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#071b27]/85 p-8 text-center backdrop-blur-[2px]" aria-live="polite">
          <div className="w-full max-w-xs">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-white/15 border-t-ocean" />
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-ocean">Preparing your 3D experience...</p>
            <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-ocean transition-[width] duration-100" style={{ width: `${progress}%` }} />
            </div>
            <p className="mt-2 text-right text-xs text-white/45">{progress}%</p>
          </div>
        </div>
      )}

      <div className="pointer-events-none absolute bottom-4 left-4 rounded-full border border-white/10 bg-navy-deep/75 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/50 backdrop-blur-sm">
        Drag to rotate • Scroll to zoom
      </div>
      <div className="pointer-events-none absolute right-4 top-4 rounded-full border border-white/10 bg-navy-deep/75 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-ocean backdrop-blur-sm">
        {quality.tier} quality
      </div>
    </div>
  );
}
