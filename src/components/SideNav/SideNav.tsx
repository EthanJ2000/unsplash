import "./SideNav.css";

import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Topic from "../../models/Topic";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { getTopics } from "../../api/UnsplashRequests";
import { setSelectedTopic } from "../../store/dashboard/dashboardActions";

const SideNav = () => {
  const [topics, setTopics] = useState<Topic[] | null>(null);
  const selectedTopic = useAppSelector((state) => state.dashboard.selectedTopic);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    onCloseClicked();
  }, [selectedTopic]);

  const getData = async () => {
    setTopics([]);
    const data: Topic[] = await getTopics();
    if (data && data.length > 0) {
      setTopics(data);
      !selectedTopic && dispatch(setSelectedTopic(data[0].slug));
    }
  };

  const renderTopics = () => {
    if (topics && topics.length > 0) {
      return topics.map((topic: Topic) => (
        <p
          key={topic.id}
          className={`topic ${selectedTopic === topic.slug && "selected"}`}
          onClick={() => dispatch(setSelectedTopic(topic.slug))}
        >
          {topic.title}
        </p>
      ));
    }
  };

  const onCloseClicked = () => {
    const sideNav = document.getElementById("side-nav");
    if (sideNav && window.innerWidth <= 480) {
      sideNav.style.width = "0vw";
      sideNav.style.overflow = "hidden";
    }
  };

  return (
    <div id="side-nav" className="sidenav-container">
      <FontAwesomeIcon
        className="side-nav-close-button"
        color="#207937"
        icon={faClose}
        onClick={onCloseClicked}
      />
      <p className="sidenav-heading">Explore</p>
      {renderTopics()}
    </div>
  );
};

export default SideNav;
