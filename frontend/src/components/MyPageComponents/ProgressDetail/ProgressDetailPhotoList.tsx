import Modal from "components/UI/Modal"
import React, { useState, PropsWithChildren } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import IconButton from "components/UI/IconButton"
import { ProgressScene, ProgressImage } from "hooks/queries/queries"

interface Props {
  photoCard: ProgressScene
}

const PHOTOS_PER_PAGE = 3

function ProgressDetailPhotoCard({ photoCard }: PropsWithChildren<Props>) {
  const [isModal, setIsModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)

  const totalPages = photoCard.imageList
    ? Math.ceil(photoCard.imageList.length / PHOTOS_PER_PAGE)
    : 1

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleImageClick = (image: string) => {
    setIsModal(true)
  }

  // absolute top-0 left-0 h-full p-5 shadow-lg overflow-hidden transform hover:rotate-3 hover:-translate-x-1 hover:-translate-y-1 duration-200 cursor-pointe bg-white"

  return (
    <>
      <div className="relative h-full mr-5 ml-5">
        <div className="bg-white h-full rotate-12 shadow-lg z-0"></div>
        <div
          className={`overflow-hidden relative w-[80%] rounded bg-white drop-shadow-md z-3`}
          onClick={() => handleImageClick(photoCard.imageList[0].image)}
        >
          <img
            src={photoCard.imageList && photoCard.imageList[0].image}
            alt="씬 대표 이미지"
            className={`absolute top-0 left-0 w-full h-full object-cover`}
          />
          {photoCard.sceneTitle}
        </div>
      </div>

      {isModal && (
        <Modal closeModal={() => setIsModal(false)}>
          <div className="flex justify-between mt-4">
            <IconButton
              icon={<FaChevronLeft />}
              disabled={currentPage === 0}
              onClick={() => handlePageChange(currentPage - 1)}
            />
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`}
            >
              {photoCard.imageList
                .slice(
                  currentPage * PHOTOS_PER_PAGE,
                  (currentPage + 1) * PHOTOS_PER_PAGE,
                )
                .map((image: ProgressImage) => (
                  <div
                    className={`overflow-hidden relative w-[400px]`}
                    style={{ paddingBottom: "100.33%" }}
                  >
                    <img
                      key={image.id}
                      src={image.image}
                      alt="modalImage"
                      className={`absolute top-0 left-0 w-full h-full object-cover`}
                    />
                  </div>
                ))}
            </div>

            <IconButton
              icon={<FaChevronRight />}
              disabled={currentPage === totalPages - 1}
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </div>
          <div className="text-gray-600">
            Page {currentPage + 1} of {totalPages}
          </div>
        </Modal>
      )}
    </>
  )
}

export default ProgressDetailPhotoCard