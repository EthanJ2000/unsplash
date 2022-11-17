import "./PreviewModal.css";

import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { faClose, faDownload, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TopicPhoto from "../../models/TopicPhoto";
import { getPhoto } from "../../api/UnsplashRequests";
import { setSelectedImage } from "../../store/dashboard/dashboardActions";
import { useParams } from "react-router";

const PreviewModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedImage, setSelectedImage] = useState<TopicPhoto | null>(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    id && getSelectedImage();
  }, [id]);

  const getSelectedImage = async () => {
    const data = await getPhoto(id!);
    console.log(data);
    if (data) setSelectedImage(data);
  };
  return (
    <>
      <div className="modal-background" />
      <div className="preview-modal">
        {/* <TransformWrapper initialScale={1}>
          <TransformComponent wrapperClass="preview-image">
            <img src={selectedImage?.links.download} alt={selectedImage?.links.download} />
          </TransformComponent>
        </TransformWrapper> */}
        <TransformWrapper initialScale={1} initialPositionX={0} initialPositionY={0}>
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <>
              <div className="tools">
                <button onClick={() => zoomIn()}>+</button>
                <button onClick={() => zoomOut()}>-</button>
                <button onClick={() => resetTransform()}>Reset</button>
              </div>
              <TransformComponent>
                <img src={selectedImage?.links.download} alt={selectedImage?.links.download} />
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
        <div className="preview-content">
          <FontAwesomeIcon
            className="close-button"
            color="grey"
            icon={faClose}
            onClick={() => navigate("/")}
          />

          <div className="preview-user">
            {selectedImage?.user.profile_image.medium && (
              <img className="profile-picture" src={selectedImage?.user.profile_image.medium} />
            )}
            {selectedImage?.user.first_name && selectedImage?.user.last_name && (
              <p className="username">{`${selectedImage?.user.first_name} ${selectedImage?.user.last_name}`}</p>
            )}

            {selectedImage?.user.social.portfolio_url && (
              <a
                target="_blank"
                href={selectedImage?.user.social.portfolio_url}
                className="portfolio"
              >
                {selectedImage?.user.social.portfolio_url}
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewModal;
