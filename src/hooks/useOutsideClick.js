import { useRef } from "react";

export function useOutsideClick(fn) {
  const ref = useRef();
  function handleOutsideClick(e) {
    if (e.target === ref.current.parentElement) {
      fn();
    }
  }

  return { ref, handleOutsideClick };
}
