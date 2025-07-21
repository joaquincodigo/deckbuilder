import { style } from "motion/react-client";

/*
RIP:
 Having this object as fixed doesnt work because switching causes glitchy behavior.
 You have to add it into the body of the screen and then do a wrapper for what the old body was. This new wrapper should have the paddings.
*/

export default function EdgeIndicator() {
  const styles = {
    body: "flex flex-row items-center h-screen fixed right-0 top-0 w-6 bg-blue-400",
    text: "transform -rotate-90 origin-top-left bg-green-400",
  };

  return (
    <div className={styles.body}>
      <div className={styles.text}>EdgeIndicator</div>
    </div>
  );
}
