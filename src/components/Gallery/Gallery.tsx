import "./Gallery.css";
import "react-lazy-load-image-component/src/effects/opacity.css";

import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useEffect, useState } from "react";

import GalleryNavigator from "./GalleryNavigator/GalleryNavigator";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ReactLoading from "react-loading";
import TopicPhoto from "../../models/TopicPhoto";
import { getTopicPhotos } from "../../api/UnsplashRequests";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const selectedTopic = useAppSelector((state) => state.dashboard.selectedTopic);
  const [images, setImages] = useState<TopicPhoto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, [selectedTopic]);

  const getData = async () => {
    setImages([]);
    setLoading(true);
    const data: TopicPhoto[] = await getTopicPhotos(selectedTopic!);
    setImages(data);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const renderImages = (startIndex: number, endIndex: number) => {
    if (images && images?.length > 0) {
      return images
        .slice(startIndex, endIndex)
        .map((image: TopicPhoto) => (
          <LazyLoadImage
            key={image.id}
            alt={image.alt_description}
            src={image.links.download}
            effect="opacity"
            height={300}
            width={300}
            wrapperClassName="topic-image"
            onClick={() => navigate(`/image/${image.id}`)}
          />
        ));
    }
  };

  return (
    <>
      <GalleryNavigator>
        <div id="gallery" className="gallery-container">
          {loading && (
            <ReactLoading className="spinner" type="spin" color="#207937" height="3%" width="3%" />
          )}
          {images && images.length > 0 ? (
            <>
              <div className="gallery-row">{renderImages(0, Math.ceil(images?.length / 2))}</div>
              <div className="gallery-row">{renderImages(images.length / 2, images?.length)}</div>
            </>
          ) : !loading ? (
            <p className="nothing">Nothing to see here</p>
          ) : null}
        </div>
      </GalleryNavigator>
    </>
  );
};

export default Gallery;
