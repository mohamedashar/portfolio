"use client";
import "./ElectricBorder.css";

export default function ElectricBorder({ children }) {
  return (
    <div className="electric-wrap">
      <div className="electric-border" />
      <div className="electric-inner">{children}</div>
    </div>
  );
}
