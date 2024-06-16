import "./ErrorNotFoundedComponent.css";
import TypedLineComponent from "../TypedLineComponent/TypedLineComponent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoadingComponent() {
  const navigate = useNavigate();

  useEffect (() => {
    setTimeout (() => {
      navigate("/");
    }, 7000)
  });

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
          typedText={`$ curl -X GET "${window.location.href}"`}
          animationDelay={0}
          animationDuration={0}
          infiniteCursor={false}
        />
        <br />
        <TypedLineComponent
          textColor="#E09690"
          typedText="Error 404: This page doesn't exist..."
          animationDelay={1}
          animationDuration={0}
          infiniteCursor={false}
        />
        <br />
        <TypedLineComponent
          textColor="#ffffff"
          typedText={`$ curl -X GET "${window.location.host}/"`}
          animationDelay={1.5}
          animationDuration={0}
          infiniteCursor={true}
        />
        <br />
        <TypedLineComponent
          textColor="#E09690"
          typedText="you will redirect to the about me page in 5 seconds..."
          animationDelay={2}
          animationDuration={0}
          infiniteCursor={false}
        />
      </div>
    </div>
  );
}
