
import "./DJStudio.css";

/*
 * DJStudio
 *
 * a decorative pixel-inspired scene for the homepage!
 * i shall replace the temporary artwork with a more
 * detailed pixel-art illustration later :)
 */

function DJStudio() {
  return (
    <section className="dj-studio" aria-label="Cosy DJ studio">
      {/* window showing the night sky */}
      <div className="studio-window">
        <span className="studio-moon">☾</span>
        <div className="studio-skyline" />
      </div>

      {/* decorations */}
      <span className="studio-sparkle sparkle-one">✦</span>
      <span className="studio-sparkle sparkle-two">✧</span>

      {/* our resident dj cat */}
      <div className="studio-cat" aria-label="Black cat">
        🐈‍⬛
      </div>

      {/* dj equipment */}
      <div className="studio-desk">
        <div className="studio-record">♪</div>
        <div className="studio-mixer">▥</div>
        <div className="studio-record">♪</div>
      </div>

      <div className="studio-caption">
        ♫ currently in da studio ♫
      </div>
    </section>
    
  );
}
<DJStudio />

export default DJStudio;
