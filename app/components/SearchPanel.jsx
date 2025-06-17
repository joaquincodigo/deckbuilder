import { useEffect, useRef, useState } from "react";
import { useMotionValue, motion } from "framer-motion";

export default function SearchPanel({ constraintRef }) {
  const y = useMotionValue(0);
  const [ready, setReady] = useState(false);

  const styles = {
    container: "absolute left-0 w-full",
    handle: "bg-blue-800 text-white h-22 w-full cursor-row-resize",
    panel: "absolute bg-blue-200 w-full h-[calc(var(--vh)_*_100)]",
  };

  useEffect(() => {
    let frame1 = requestAnimationFrame(() => {
      let frame2 = requestAnimationFrame(() => {
        setReady(true);
      });
    });

    return () => {
      cancelAnimationFrame(frame1);
    };
  }, []);

  return (
    <div className={styles.container}>
      {ready && (
        <>
          <motion.div
            drag="y"
            style={{ y }}
            dragConstraints={constraintRef}
            className={styles.handle}
          >
            <p>Soy un agarradera</p>
          </motion.div>

          <motion.div style={{ y }} className={styles.panel}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quae
              asperiores rem dolore dolorem? Dicta, earum vel! Ad ex sed
              consequatur soluta at! Voluptatem eligendi eum, architecto placeat
              perspiciatis quidem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
              minima rem odit illum sit. Architecto labore blanditiis asperiores
              cupiditate reiciendis adipisci doloribus ducimus ab debitis, id
              repellat, autem error voluptatibus!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              officia minima totam vitae in id, ex consequuntur! Laudantium
              corporis maxime ab, quasi sint esse ducimus in, eligendi eum iusto
              officia.
            </p>
          </motion.div>
        </>
      )}
    </div>
  );
}
