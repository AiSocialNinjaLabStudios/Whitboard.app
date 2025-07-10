import React, { useRef, useEffect } from 'react';
import { fabric } from 'fabric';

const Whiteboard = () => {
  const canvasRef = useRef(null);
  let canvas = useRef(null);

  useEffect(() => {
    canvas.current = new fabric.Canvas(canvasRef.current, {
      isDrawingMode: true,
      height: 800,
      width: 1200,
    });

    // Example: Add a rectangle on canvas load
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 50,
      height: 50
    });
    canvas.current.add(rect);

    return () => {
      canvas.current.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Whiteboard;
