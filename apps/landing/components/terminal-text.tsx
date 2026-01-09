"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface TerminalTextProps {
  lines: string[];
  className?: string;
  typingSpeed?: number;
  delayBetweenLines?: number;
  startDelay?: number;
  onComplete?: () => void;
}

export function TerminalText({
  lines,
  className = "",
  typingSpeed = 50,
  delayBetweenLines = 300,
  startDelay = 0,
  onComplete,
}: TerminalTextProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const [started, setStarted] = useState(false);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Start delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setStarted(true);
      setIsTyping(true);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [startDelay]);

  // Typing effect
  useEffect(() => {
    if (!started || !isTyping || currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex];
    if (!currentLine) return;

    if (currentText.length < currentLine.length) {
      const timeout = setTimeout(() => {
        setCurrentText(currentLine.slice(0, currentText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      // Line complete
      setIsTyping(false);
      setCompletedLines((prev) => [...prev, currentLine]);
      setCurrentText("");

      if (currentLineIndex < lines.length - 1) {
        const timeout = setTimeout(() => {
          setCurrentLineIndex((prev) => prev + 1);
          setIsTyping(true);
        }, delayBetweenLines);
        return () => clearTimeout(timeout);
      } else {
        onComplete?.();
      }
    }
  }, [
    started,
    isTyping,
    currentText,
    currentLineIndex,
    lines,
    typingSpeed,
    delayBetweenLines,
    onComplete,
  ]);

  return (
    <div className={`font-mono ${className}`}>
      {/* Completed lines */}
      {completedLines.map((line, index) => (
        <div key={index} className="whitespace-pre-wrap">
          {line}
        </div>
      ))}

      {/* Current typing line */}
      {isTyping && currentLineIndex < lines.length && (
        <div className="whitespace-pre-wrap">
          {currentText}
          <span
            className={`inline-block w-2 h-5 bg-current ml-0.5 align-middle ${
              showCursor ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      )}

      {/* Cursor after completion */}
      {!isTyping && currentLineIndex >= lines.length && (
        <span
          className={`inline-block w-2 h-5 bg-current ml-0.5 align-middle ${
            showCursor ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}

interface TypewriterLineProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  delay?: number;
  showCursorAfterComplete?: boolean;
  onComplete?: () => void;
}

export function TypewriterLine({
  text,
  className = "",
  typingSpeed = 50,
  delay = 0,
  showCursorAfterComplete = false,
  onComplete,
}: TypewriterLineProps) {
  const [displayText, setDisplayText] = useState("");
  const [started, setStarted] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Start delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  // Typing effect
  useEffect(() => {
    if (!started) return;

    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [started, displayText, text, typingSpeed, onComplete, isComplete]);

  if (!started) return null;

  const shouldShowCursor = !isComplete || showCursorAfterComplete;

  return (
    <span className={`font-mono ${className}`}>
      {displayText}
      {shouldShowCursor && (
        <span
          className={`inline-block w-2 h-5 bg-current ml-0.5 align-middle transition-opacity ${
            showCursor ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </span>
  );
}
