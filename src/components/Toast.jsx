import React, { useState, useEffect } from 'react';

/**
 * A beautiful, themed Toast notification.
 * To use this globally, we'll dispatch custom events.
 */
export default function Toast() {
    const [toast, setToast] = useState(null);

    useEffect(() => {
        const handleShowToast = (event) => {
            const { message, type = 'success', duration = 3000 } = event.detail;
            setToast({ message, type, duration });

            setTimeout(() => {
                setToast(null);
            }, duration);
        };

        window.addEventListener('show-toast', handleShowToast);
        return () => window.removeEventListener('show-toast', handleShowToast);
    }, []);

    if (!toast) return null;

    return (
        <div className={`toast toast-${toast.type}`}>
            <div className="toast-content">
                <span className="toast-icon">
                    {toast.type === 'success' ? '🌸' : '✨'}
                </span>
                <p>{toast.message}</p>
            </div>
            <div className="toast-progress" style={{ animationDuration: `${toast.duration}ms` }}></div>
        </div>
    );
}

// Helper function to trigger toast from anywhere
export const showToast = (message, type = 'success', duration = 3000) => {
    window.dispatchEvent(new CustomEvent('show-toast', {
        detail: { message, type, duration }
    }));
};
