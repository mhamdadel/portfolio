import "./LoadingComponent.css";

export default function LoadingComponent() {
  return (
    <div>
      <div className="fakeMenu">
        <div className="fakeButtons fakeClose"></div>
        <div className="fakeButtons fakeMinimize"></div>
        <div className="fakeButtons fakeZoom"></div>
      </div>
      <div className="fakeScreen">
        <p className="line1">
          $ load --portfolio\<span className="cursor1">_</span>
        </p>
        <p className="line2">
          --user "Muhammed Adel"<span className="cursor2">_</span>
        </p>
        <p className="line3">
          Loading...<span className="cursor3">_</span>
        </p>
        <p className="line4">
          {">"} <span className="cursor4">_</span>
        </p>
      </div>
    </div>
  );
}
