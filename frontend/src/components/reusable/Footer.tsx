import '../../styles/components/reusable/Footer.css'
import { useEffect, useRef, useState } from 'react';

export default function Footer() {
    const footerRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        }
    }, [])

    return (
        <>
            <div className={`fixed-footer-text ${visible ? 'visible' : ''}`}>
                <p>© 2025 Tu Nombre</p>
            </div>

            <footer ref={footerRef} className="footer-bg" />
        </>
    );
}