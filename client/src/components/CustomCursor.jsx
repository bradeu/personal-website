import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouse  = { x: -100, y: -100 };
    let cursor = { x: -100, y: -100 };
    let raf;
    let hovering = false;

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onEnter = () => { hovering = true;  ring.classList.add("cursor-ring--hover"); };
    const onLeave = () => { hovering = false; ring.classList.remove("cursor-ring--hover"); };

    const interactives = () => document.querySelectorAll("a, button, [role='button'], input, textarea, label");

    const attachListeners = () => {
      interactives().forEach(el => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    const loop = () => {
      // dot snaps instantly
      dot.style.transform  = `translate(${mouse.x - 3}px, ${mouse.y - 3}px)`;

      // ring lerps behind
      cursor.x += (mouse.x - cursor.x) * 0.12;
      cursor.y += (mouse.y - cursor.y) * 0.12;
      ring.style.transform = `translate(${cursor.x - 20}px, ${cursor.y - 20}px)`;

      raf = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMove);
    attachListeners();
    raf = requestAnimationFrame(loop);

    // re-attach on DOM changes (SPA navigation)
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      observer.disconnect();
      interactives().forEach(el => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
