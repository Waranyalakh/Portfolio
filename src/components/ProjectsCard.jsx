import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";

const imageModules = import.meta.glob("../assets/project/*.png", {
  eager: true,
});
const projectImages = Object.entries(imageModules).map(([path, module]) => {
  const fileName = path.split("/").pop();
  const alt = fileName.replace(/\.[^/.]+$/, "");
  return { src: module.default, alt };
});

const ProjectsCard = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="card bg-gradient-to-br from-base-100 to-base-200 shadow-2xl border border-primary hover:shadow-3xl transition-all duration-300">
      <div className="card-body p-2">
        <div className="flex items-center justify-center mb-6">
          <div className="badge badge-primary badge-lg px-6 py-3">
            <h2 className="text-lg font-bold text-primary-content">ผลงาน</h2>
          </div>
        </div>

        <div className="divider divider-primary"></div>

        <div className="bg-base-200 rounded-2xl p-6 shadow-inner mb-6">
          <p className="text-base text-base-content leading-relaxed text-center">
            เว็บ E-commerce <br />
            เป็นโปรเจคที่ได้ทำในช่วงการฝึกงาน ได้ทำเว็ยไซต์ E-commerce
            โดยใช้ Vue.js เป็นหลักในการพัฒนา มีการเชื่อมต่อกับฐานข้อมูล โดยใช้ ASP.NET
            Core และ SQL Server เพื่อจัดการข้อมูลสินค้าและผู้ใช้
          </p>
        </div>

        <div className=" bg-base-300 shadow-2xl">
          <div className="bg-base-200 rounded-b-2xl overflow-hidden">
            <div className="carousel-container">
              <style jsx>{`
                .carousel-container .carousel .carousel-status {
                  display: none !important;
                }
                .carousel-container .carousel .control-dots {
                  bottom: 10px !important;
                }
                .carousel-container .carousel .control-dots .dot {
                  background: oklch(var(--p)) !important;
                  opacity: 0.5 !important;
                }
                .carousel-container .carousel .control-dots .dot.selected {
                  opacity: 1 !important;
                }
                .carousel-container .carousel .control-prev,
                .carousel-container .carousel .control-next {
                  background: oklch(var(--p)) !important;
                  border-radius: 50% !important;
                  width: 40px !important;
                  height: 40px !important;
                  top: 50% !important;
                  transform: translateY(-50%) !important;
                  opacity: 0.8 !important;
                }
                .carousel-container .carousel .control-prev:hover,
                .carousel-container .carousel .control-next:hover {
                  opacity: 1 !important;
                }
              `}</style>
              <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                interval={3000}
                stopOnHover
                emulateTouch
              >
                {projectImages.map((img, index) => (
                  <div
                    key={index}
                    className="bg-base-200 cursor-pointer"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="mx-auto max-h-72 object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>

        {/* Modal for image preview */}
        {selectedImage && (
          <div
            className="modal modal-open"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="modal-box max-w-4xl w-full h-full max-h-[90vh] p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Preview</h3>
                <button
                  className="btn btn-sm btn-circle btn-ghost"
                  onClick={() => setSelectedImage(null)}
                >
                  ✕
                </button>
              </div>
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="modal-backdrop bg-black bg-opacity-50"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsCard;
