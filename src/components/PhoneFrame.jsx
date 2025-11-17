import React from "react";

export default function PhoneFrame({
  width = 280,
  height = 580,
  children,
  className = "",
  onTouchStart,
  onTouchEnd,
  onMouseEnter,
  onMouseLeave,
  // nouveaux réglages optionnels
  screenInset = 10,
  screenRadius = "2.2rem",
  bezelRadius = "2.5rem",
  outerRadius = "2.7rem",
  screenBg = "white",
  shadow = "inset 0 0 15px rgba(0,0,0,0.3)",
}) {
  return (
    <div
      className={className}
      style={{ 
        width, 
        height, 
        margin: '0 auto',
        filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.12))",
        zIndex: 10,
        position: 'relative'
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Phone outer frame with 3D effect */}
      <div
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom right, #374151, #111827)',
          padding: '3px',
          borderRadius: outerRadius,
          zIndex: 1
        }}
      >
        {/* Inner bezel with metallic effect */}
        <div
          style={{
            position: 'absolute',
            top: '1px',
            left: '1px',
            right: '1px',
            bottom: '1px',
            background: 'linear-gradient(to bottom right, #4b5563, #374151, #1f2937)',
            borderRadius: bezelRadius,
            zIndex: 2
          }}
        >
          {/* Screen content */}
          <div
            style={{
              position: 'absolute',
              top: screenInset,
              left: screenInset,
              right: screenInset,
              bottom: screenInset,
              borderRadius: screenRadius,
              background: screenBg,
              boxShadow: shadow,
              zIndex: 0,
              overflow: 'hidden',
            }}
          >
            {children}
          </div>
        </div>

        {/* Notch area with camera and sensors */}
        <div style={{ 
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '120px',
          height: '25px',
          zIndex: 5
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: '#111827',
            borderBottomLeftRadius: '1.2rem',
            borderBottomRightRadius: '1.2rem',
          }}></div>
          <div style={{
            position: 'absolute',
            right: '32px',
            top: '10px',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#1f2937',
            border: '1px solid #374151',
          }}></div>
          <div style={{
            position: 'absolute',
            left: '24px',
            top: '12px',
            width: '16px',
            height: '4px',
            borderRadius: '9999px',
            background: '#1f2937',
          }}></div>
        </div>

        {/* Side buttons */}
        <div style={{
          position: 'absolute',
          left: '-2px',
          top: '100px',
          width: '4px',
          height: '25px',
          background: 'linear-gradient(to right, #4b5563, #374151)',
          borderTopLeftRadius: '4px',
          borderBottomLeftRadius: '4px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          zIndex: 3
        }}></div>
        <div style={{
          position: 'absolute',
          left: '-2px',
          top: '135px',
          width: '4px',
          height: '50px',
          background: 'linear-gradient(to right, #4b5563, #374151)',
          borderTopLeftRadius: '4px',
          borderBottomLeftRadius: '4px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          zIndex: 3
        }}></div>
        <div style={{
          position: 'absolute',
          right: '-2px',
          top: '120px',
          width: '4px',
          height: '35px',
          background: 'linear-gradient(to left, #4b5563, #374151)',
          borderTopRightRadius: '4px',
          borderBottomRightRadius: '4px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          zIndex: 3
        }}></div>

        {/* Subtle reflections */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: outerRadius,
            background: "linear-gradient(45deg, transparent, rgba(255,255,255,0.06), transparent)",
            zIndex: 4,
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  );
}
