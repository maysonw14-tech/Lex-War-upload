import React from 'react';

// --- Ambient Cosmic Dust ---
export const CosmicDust: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
                <div 
                    key={i}
                    className="absolute bg-white rounded-full opacity-20 animate-float"
                    style={{
                        width: Math.random() * 3 + 1 + 'px',
                        height: Math.random() * 3 + 1 + 'px',
                        top: Math.random() * 100 + '%',
                        left: Math.random() * 100 + '%',
                        animationDuration: Math.random() * 10 + 10 + 's',
                        animationDelay: Math.random() * 5 + 's'
                    }}
                />
            ))}
        </div>
    );
}