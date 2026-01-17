"use client";

import { useEffect } from "react";

export default function DisableInspect() {
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable F12 (Developer Tools)
      if (e.key === "F12") {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+Shift+I (Developer Tools)
      if (e.ctrlKey && e.shiftKey && e.key === "I") {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === "J") {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+Shift+C (Inspect Element)
      if (e.ctrlKey && e.shiftKey && e.key === "C") {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+U (View Source)
      if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+S (Save Page)
      if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+P (Print)
      if (e.ctrlKey && e.key === "p") {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+Shift+P (Command Palette in DevTools)
      if (e.ctrlKey && e.shiftKey && e.key === "P") {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+Shift+K (Console in Firefox)
      if (e.ctrlKey && e.shiftKey && e.key === "K") {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+` (Console toggle)
      if (e.ctrlKey && e.key === "`") {
        e.preventDefault();
        return false;
      }
    };

    // Disable text selection
    const handleSelectStart = (e: Event) => {
      e.preventDefault();
      return false;
    };

    // Disable drag
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    // Detect DevTools opening
    let devtools = { open: false, orientation: null as string | null };
    const detectDevTools = () => {
      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      
      if (
        !(widthThreshold && heightThreshold) &&
        ((window.outerHeight - window.innerHeight > threshold) ||
          window.outerWidth - window.innerWidth > threshold)
      ) {
        if (!devtools.open) {
          devtools.open = true;
          // Redirect or show warning
          document.body.innerHTML = "";
          document.body.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: center; height: 100vh; background: #000; color: #fff; font-family: Arial, sans-serif; text-align: center; padding: 20px;">
              <div>
                <h1 style="font-size: 2rem; margin-bottom: 1rem;">Access Denied</h1>
                <p style="font-size: 1.2rem;">Developer tools are not allowed on this website.</p>
              </div>
            </div>
          `;
        }
      } else {
        devtools.open = false;
      }
    };

    // Add event listeners
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("selectstart", handleSelectStart);
    document.addEventListener("dragstart", handleDragStart);
    
    // Check for DevTools periodically
    const devToolsInterval = setInterval(detectDevTools, 500);

    // Disable common console methods
    const noop = () => {};
    const originalConsole = {
      log: console.log,
      warn: console.warn,
      error: console.error,
      info: console.info,
      debug: console.debug,
    };

    // Override console methods
    console.log = noop;
    console.warn = noop;
    console.error = noop;
    console.info = noop;
    console.debug = noop;

    // Add CSS to disable text selection globally
    const style = document.createElement("style");
    style.textContent = `
      * {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
        -webkit-touch-callout: none !important;
        -webkit-tap-highlight-color: transparent !important;
      }
      
      input, textarea {
        -webkit-user-select: text !important;
        -moz-user-select: text !important;
        -ms-user-select: text !important;
        user-select: text !important;
      }
    `;
    document.head.appendChild(style);

    // Cleanup function
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("selectstart", handleSelectStart);
      document.removeEventListener("dragstart", handleDragStart);
      clearInterval(devToolsInterval);
      
      // Restore console methods
      console.log = originalConsole.log;
      console.warn = originalConsole.warn;
      console.error = originalConsole.error;
      console.info = originalConsole.info;
      console.debug = originalConsole.debug;
      
      // Remove style
      document.head.removeChild(style);
    };
  }, []);

  return null;
}
