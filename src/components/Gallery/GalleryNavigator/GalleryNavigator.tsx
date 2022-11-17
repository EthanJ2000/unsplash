import "./GalleryNavigator.css";

import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { useEffect } from "react";

interface GalleryProps {
  children: JSX.Element;
}
const GalleryNavigator = ({ children }: GalleryProps) => {
  const DISTANCE = 280;
  const SPEED = 5;
  const STEPS = 10;
  const selectedImage = useAppSelector((state) => state.dashboard.selectedImage);
  const leftPaddle = document.getElementById("left-paddle");
  const rightPaddle = document.getElementById("right-paddle");

  useEffect(() => {
    if (leftPaddle && rightPaddle) {
      if (selectedImage) {
        leftPaddle.style.visibility = "hidden";
        rightPaddle!.style.visibility = "hidden";
      } else {
        leftPaddle.style.visibility = "visible";
        rightPaddle.style.visibility = "visible";
      }
    }
  }, [selectedImage]);

  const scroll = (direction: string, speed: number, distance: number, step: number) => {
    const gallery = document.getElementById("gallery");
    const sideNav = document.getElementById("side-nav");
    var distanceToRight = document.getElementById("gallery")?.getBoundingClientRect().right;

    if (gallery) {
      let scrollAmount = 0;
      const slideTimer = window.setInterval(function () {
        if (direction == "left") {
          gallery.scrollLeft -= step;
        } else {
          gallery.scrollLeft += step;
        }
        scrollAmount += step;
        if (leftPaddle && sideNav) {
          if (gallery.scrollLeft === 0) {
            leftPaddle.style.display = "none";
            sideNav.style.width = "15vw";
            gallery.style.width = "80vw";
            sideNav.style.overflow = "visible";
          } else if (distanceToRight && distanceToRight < 2000) {
            leftPaddle.style.display = "flex";
            sideNav.style.width = "0vw";
            sideNav.style.overflow = "hidden";
            gallery.style.width = "90vw";
          }
        }
        if (scrollAmount >= distance) {
          window.clearInterval(slideTimer);
        }
      }, speed);
    }
  };

  return (
    <div className="gallery-navigator-container">
      <div
        id="left-paddle"
        className="left-paddle"
        onClick={() => scroll("left", SPEED, DISTANCE, STEPS)}
      >
        <FontAwesomeIcon size="2x" color="grey" icon={faCaretLeft} />
      </div>
      {children}
      <div
        id="right-paddle"
        className="right-paddle"
        onClick={() => scroll("right", SPEED, DISTANCE, STEPS)}
      >
        <FontAwesomeIcon size="2x" color="grey" icon={faCaretRight} />
      </div>
    </div>
  );
};

export default GalleryNavigator;
