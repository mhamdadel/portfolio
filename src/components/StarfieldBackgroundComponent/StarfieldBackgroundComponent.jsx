import Starfield from "react-starfield";

export default function StarfieldBackgroundComponent() {
  return (
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
  );
}
