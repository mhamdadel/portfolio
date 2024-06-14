import "./LoadingComponent.css";
import TypedLineComponent from "../../components/TypedLineComponent/TypedLineComponent";

export default function LoadingComponent() {
  return (
    <div className="fixed z-50 top-0 left-0 w-full">
      <div className="fakeMenu">
        <div className="fakeButtons fakeClose"></div>
        <div className="fakeButtons fakeMinimize"></div>
        <div className="fakeButtons fakeZoom"></div>
      </div>
      <div className="fakeScreen">
        <TypedLineComponent
          textColor="#9CD9F0"
          typedText='$ load --portfolio --user "Muhammed Adel"'
          animationDelay={0}
          animationDuration={0}
          infiniteCursor={false}
        />
        <br />
        <TypedLineComponent
          textColor="#E09690"
          typedText="Loading..."
          animationDelay={1}
          animationDuration={0}
          infiniteCursor={false}
        />
        <br />
        <TypedLineComponent
          textColor="#ffffff"
          typedText=">"
          animationDelay={1.5}
          animationDuration={0}
          infiniteCursor={true}
        />
      </div>
    </div>
  );
}
