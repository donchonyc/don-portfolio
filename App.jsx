<<<<<<< HEAD
import { useState, useEffect } from "react";

export default function App() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <h1>{isClient ? "This is never prerendered" : "Prerendered"}</h1>;
}
=======
import { useState, useEffect } from "react";

export default function App() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <h1>{isClient ? "This is never prerendered" : "Prerendered"}</h1>;
}
>>>>>>> c402b1926e9d01f898852b725ce2a2137a4e50bb
