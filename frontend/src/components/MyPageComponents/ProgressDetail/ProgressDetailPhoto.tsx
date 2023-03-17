import React, { useState } from "react"
import ProgressDetailPhotoCard from "./ProgressDetailPhotoCard"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import IconButton from "components/UI/IconButton"

interface SceneImage {
  id: number
  image: string
}

interface Scene {
  id: number
  sceneTitle: string
  imageList: SceneImage[]
}

interface Photo {
  talePhoto: Scene[]
}

function ProgressDetailPhoto({ talePhoto }: Photo) {
  const [currentPage, setCurrentPage] = useState(0)
  const pageSize = 3
  const totalPages = Math.ceil(talePhoto.length / pageSize)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div>
      <div className=" font-bold">학습 앨범</div>
      <div className="flex justify-between mt-4">
        <IconButton
          icon={<FaChevronLeft />}
          disabled={currentPage === 0}
          onClick={() => handlePageChange(currentPage - 1)}
          colorClass={``}
        />
        <div className={`grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8`}>
          {talePhoto
            .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
            .map((photo: Scene) => (
              // <div className={`overflow-hidden relative w-32`}>
              <div className=" relative">
                <div className=" bg-white w-48 h-48 rotate-12 shadow-lg"></div>
                <div className="absolute top-0 left-0 w-48 h-48 p-5 shadow-lg overflow-hidden transform hover:rotate-3 hover:-translate-x-1 hover:-translate-y-1 duration-200 bg-white">
                  <ProgressDetailPhotoCard key={photo.id} photoCard={photo} />
                </div>
              </div>
            ))}
        </div>
        <IconButton
          icon={<FaChevronRight />}
          disabled={currentPage === totalPages - 1}
          onClick={() => handlePageChange(currentPage + 1)}
          colorClass={``}
        />
      </div>
    </div>
  )
}

export default ProgressDetailPhoto