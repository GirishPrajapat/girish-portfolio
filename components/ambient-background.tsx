"use client";

export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        background: "#0E0E0D",
        overflow: "hidden",
      }}
    >
      {/* Orb 1 — drifts left to right, top half */}
      <div style={{
        position: "absolute",
        width: "700px",
        height: "700px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)",
        top: "5%",
        left: "-20%",
        animation: "driftRight 20s ease-in-out infinite",
        willChange: "transform",
      }} />

      {/* Orb 2 — drifts right to left, middle */}
      <div style={{
        position: "absolute",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)",
        top: "35%",
        right: "-15%",
        animation: "driftLeft 25s ease-in-out infinite",
        animationDelay: "-8s",
        willChange: "transform",
      }} />

      {/* Orb 3 — drifts bottom-left to top-right */}
      <div style={{
        position: "absolute",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)",
        bottom: "-10%",
        left: "10%",
        animation: "driftDiagUp 30s ease-in-out infinite",
        animationDelay: "-15s",
        willChange: "transform",
      }} />

      {/* Orb 4 — drifts top-right to bottom-left */}
      <div style={{
        position: "absolute",
        width: "450px",
        height: "450px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)",
        top: "-5%",
        right: "5%",
        animation: "driftDiagDown 35s ease-in-out infinite",
        animationDelay: "-5s",
        willChange: "transform",
      }} />

      {/* Orb 5 — center slow breathing pulse */}
      <div style={{
        position: "absolute",
        width: "900px",
        height: "900px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,212,255,0.03) 0%, transparent 60%)",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        animation: "pulse 18s ease-in-out infinite",
        animationDelay: "-9s",
        willChange: "transform, opacity",
      }} />

      <style>{`
        @keyframes driftRight {
          0%   { transform: translateX(0px) translateY(0px) scale(1); opacity: 0.4; }
          30%  { opacity: 1; }
          50%  { transform: translateX(55vw) translateY(80px) scale(1.1); opacity: 0.8; }
          70%  { opacity: 1; }
          100% { transform: translateX(0px) translateY(0px) scale(1); opacity: 0.4; }
        }
        @keyframes driftLeft {
          0%   { transform: translateX(0px) translateY(0px) scale(1); opacity: 0.4; }
          50%  { transform: translateX(-50vw) translateY(-60px) scale(1.08); opacity: 0.9; }
          100% { transform: translateX(0px) translateY(0px) scale(1); opacity: 0.4; }
        }
        @keyframes driftDiagUp {
          0%   { transform: translate(0px, 0px) scale(1); opacity: 0.3; }
          50%  { transform: translate(35vw, -40vh) scale(1.12); opacity: 0.8; }
          100% { transform: translate(0px, 0px) scale(1); opacity: 0.3; }
        }
        @keyframes driftDiagDown {
          0%   { transform: translate(0px, 0px) scale(0.95); opacity: 0.3; }
          50%  { transform: translate(-30vw, 35vh) scale(1.1); opacity: 0.7; }
          100% { transform: translate(0px, 0px) scale(0.95); opacity: 0.3; }
        }
        @keyframes pulse {
          0%   { transform: translate(-50%, -50%) scale(0.9); opacity: 0.5; }
          50%  { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.5; }
        }
        @media (prefers-reduced-motion: reduce) {
          [aria-hidden="true"] * { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
