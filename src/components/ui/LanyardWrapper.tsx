"use client";

import dynamic from "next/dynamic";

const Lanyard = dynamic(() => import("@/components/ui/Lanyard"), {
  ssr: false,
  loading: () => null,
});

interface LanyardWrapperProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
}

export function LanyardWrapper({
  position = [0, 0, 20],
  gravity = [0, -40, 0],
}: LanyardWrapperProps) {
  return <Lanyard position={position} gravity={gravity} />;
}
