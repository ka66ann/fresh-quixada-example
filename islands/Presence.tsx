import { useState, useEffect } from "preact/hooks";
import { prepare } from "../realtime.tsx";

export default function Presence() {
  const [count, setCount] = useState(0);
  useEffect( () =>
  prepare(setCount)
  , [])
  return (
    <div class="flex gap-2 w-full">
      <p class="flex-grow-1 font-bold text-xl">{count} usuário(s).</p> 
    </div>
  );
}
