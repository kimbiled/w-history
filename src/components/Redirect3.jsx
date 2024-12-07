import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const VideoRedirectPage = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    // Запускаем видео, если оно есть
    if (videoRef.current) {
      videoRef.current.play();
    }

    // Устанавливаем таймер для перенаправления
    const timer = setTimeout(() => {
      navigate("/math2"); // Перенаправление на другую страницу
    }, 3000);

    // Очистка таймера при размонтировании
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Видео из папки public */}
      <video
        ref={videoRef}
        className="w-full h-full"
        src="/over.mp4" // Путь к видеофайлу в папке public
        muted
        autoPlay
      />
      <p className="text-white mt-4">Redirecting to the results page...</p>
    </div>
  );
};

export default VideoRedirectPage;
