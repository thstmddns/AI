import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { authApi, piecesApi } from "../../api/api";

import NavBarDark from "../../components/NavBarDark";

const Piece = () => {
  const { pieceSeq } = useParams();
  const [piece, setPiece] = useState();
  const [cinema, setCinema] = useState(false);

  useEffect(() => {
    const fetchPieceDetail = async () => {
      try {
        const { data } = await piecesApi.getPieceDetail(pieceSeq);
        setPiece(data);
        console.log("data:", data);
      } catch (error) {
        console.error("what");
      }
    };
    fetchPieceDetail();
  }, [pieceSeq]);

  const setBookmark = () => {
    authApi
      .setBookmark(pieceSeq)
      .then((res) => {
        console.log("북마크완료");
        const fetchPieceDetail = async () => {
          try {
            const { data } = await piecesApi.getPieceDetail(pieceSeq);
            setPiece(data);
            console.log("data:", data);
          } catch (error) {
            console.error("what");
          }
        };
        fetchPieceDetail();
      })
      .catch((err) => console.error("에러뭐임:", err));
  };

  const cancelBookmark = () => {
    authApi
      .deleteBookmark(pieceSeq)
      .then((res) => {
        console.log("북마크해제완료");
        const fetchPieceDetail = async () => {
          try {
            const { data } = await piecesApi.getPieceDetail(pieceSeq);
            setPiece(data);
            console.log("data:", data);
          } catch (error) {
            console.error("what");
          }
        };
        fetchPieceDetail();
      })
      .catch((err) => console.error("에러뭐임:", err));
  };

  return (
    <React.Fragment>
      {!cinema && <NavBarDark />}
      <section
        className="text-gray-600 body-font relative bg-gray-800"
        // style={{ marginTop: "71px" }}
        style={{ marginTop: cinema ? "0" : "7vh" }}
      >
        {/* 블러 배경 */}
        {!cinema && piece && (
          <div
            className="mx-auto flex justify-center items-center bg-cover bg-center opacity-30 blur"
            style={{
              backgroundImage: `url('http://j7d201.p.ssafy.io/api/my-file/read/${piece.pieceImg}')`,
              // height: "1009px",
              height: "93vh",
              // height: "92.95vh",
              width: "100vw",
            }}
            data-aos="fade-in"
          ></div>
        )}

        {/* 명화 그림, 정보 */}
        {!cinema && piece && piece.pieceType === "M" && (
          <div
            className="mx-auto flex justify-center items-center absolute top-0 left-0"
            style={{
              // backgroundImage: `url('http://j7d201.p.ssafy.io/api/my-file/read/${piece.pieceImg}')`,
              // height: "1009px",
              height: "93vh",
              // height: "92.95vh",
              width: "100vw",
            }}
          >
            <div className="flex">
              {/* 이미지 */}
              <img
                alt="gallery"
                className="object-contain rounded drop-shadow-md mr-8 cursor-pointer hover:opacity-80 transition"
                src={`http://j7d201.p.ssafy.io/api/my-file/read/${piece.pieceImg}`}
                style={{ maxWidth: "73vw", maxHeight: "90vh" }}
                onClick={() => setCinema(true)}
                data-aos="zoom-out"
              />

              {/* 설명 */}
              <div
                className="flex flex-col justify-between backdrop-blur-sm p-4"
                // style={{ width: "23vw", maxHeight: "90vh" }}
                data-aos="fade-left"
              >
                {/* 내용 */}
                <div className="flex flex-col">
                  <div
                    className="text-white mb-2 font-bold text-3xl"
                    style={{ lineHeight: "1" }}
                  >
                    {piece.pieceTitleKr}
                  </div>
                  <div className="text-white mb-4 font-bold text-xl">
                    {piece.pieceArtistKr}
                  </div>
                  <div className="text-white text-lg">
                    {piece.pieceCentury} C &ndash; {piece.pieceYear}
                  </div>
                  <div className="text-white text-lg">{piece.pieceGenre}</div>
                  <div className="text-white text-lg">{piece.pieceStyle}</div>
                  <div className="flex mb-4">
                    <div className="text-white text-lg font-bold bg-gray-900 rounded-lg drop-shadow-md px-2 py-1">
                      # {piece.pieceScent}
                    </div>
                  </div>
                  {/* <div className="text-white text-lg">
                    태그: {piece.pieceTag} ..
                  </div> */}
                </div>

                {/* 버튼 */}
                <div className="flex">
                  {piece.pieceBookmarkYn === "Y" && (
                    <button
                      className="flex text-white bg-amber-700 border-0 py-3 px-6 focus:outline-none hover:bg-amber-500 active:bg-amber-600 focus:ring focus:ring-amber-300 rounded-lg transition mr-2"
                      onClick={cancelBookmark}
                    >
                      북마크 해제 {piece.pieceBookmarkCount}
                    </button>
                  )}
                  {piece.pieceBookmarkYn === "N" && (
                    <button
                      className="flex text-white bg-amber-700 border-0 py-3 px-6 focus:outline-none hover:bg-amber-500 active:bg-amber-600 focus:ring focus:ring-amber-300 rounded-lg transition mr-2"
                      onClick={setBookmark}
                    >
                      북마크 {piece.pieceBookmarkCount}
                    </button>
                  )}
                  {piece.piecePrice > 0 && (
                    <button className="flex text-white bg-sky-700 border-0 py-3 px-6 focus:outline-none hover:bg-sky-500 active:bg-sky-600 focus:ring focus:ring-sky-300 rounded-lg transition">
                      작품 결제
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 유저 아트 그림, 정보 */}
        {!cinema && piece && piece.pieceType === "A" && (
          <div
            className="mx-auto flex justify-center items-center absolute top-0 left-0"
            style={{
              // backgroundImage: `url('http://j7d201.p.ssafy.io/api/my-file/read/${piece.pieceImg}')`,
              // height: "1009px",
              height: "93vh",
              // height: "92.95vh",
              width: "100vw",
            }}
          >
            <div className="flex">
              {/* 이미지 */}
              <img
                alt="gallery"
                className="object-contain rounded drop-shadow-md mr-8 cursor-pointer hover:opacity-80 transition"
                src={`http://j7d201.p.ssafy.io/api/my-file/read/${piece.pieceImg}`}
                style={{ maxWidth: "73vw", maxHeight: "90vh" }}
                onClick={() => setCinema(true)}
                data-aos="zoom-out"
              />

              {/* 설명 */}
              <div
                className="flex flex-col justify-between backdrop-blur-sm p-4"
                // style={{ width: "23vw", maxHeight: "90vh" }}
                data-aos="fade-left"
              >
                {/* 내용 */}
                <div className="flex flex-col">
                  <div
                    className="text-white mb-2 font-bold text-3xl"
                    style={{ lineHeight: "1" }}
                  >
                    {piece.pieceTitleKr}
                  </div>
                  <div className="text-white mb-4 font-bold text-xl">
                    {piece.pieceArtistKr}
                  </div>
                  <div className="text-white text-lg">{piece.pieceDesc}</div>
                  {piece.piecePrice > 0 && (
                    <div className="text-white text-lg">
                      &#8361; {piece.piecePrice}
                    </div>
                  )}
                  <div className="flex flex-wrap text-white text-lg mb-2">
                    {piece.pieceTag.split(",").map((tag) => (
                      <div
                        key={Math.random().toString()}
                        className="text-white px-2 py-1 bg-gray-100 drop-shadow-md rounded-lg text-gray-800 mr-2"
                      >
                        # {tag}
                      </div>
                    ))}
                  </div>
                  <div className="flex mb-4">
                    <div className="text-white text-lg font-bold bg-gray-900 rounded-lg drop-shadow-md px-2 py-1">
                      # {piece.pieceScent}
                    </div>
                  </div>
                  {/* <div className="text-white text-lg">
                    태그: {piece.pieceTag} ..
                  </div> */}
                </div>

                {/* 버튼 */}
                <div className="flex">
                  {piece.pieceBookmarkYn === "Y" && (
                    <button
                      className="flex text-white bg-amber-700 border-0 py-3 px-6 focus:outline-none hover:bg-amber-500 active:bg-amber-600 focus:ring focus:ring-amber-300 rounded-lg transition mr-2"
                      onClick={cancelBookmark}
                    >
                      북마크 해제 {piece.pieceBookmarkCount}
                    </button>
                  )}
                  {piece.pieceBookmarkYn === "N" && (
                    <button
                      className="flex text-white bg-amber-700 border-0 py-3 px-6 focus:outline-none hover:bg-amber-500 active:bg-amber-600 focus:ring focus:ring-amber-300 rounded-lg transition mr-2"
                      onClick={setBookmark}
                    >
                      북마크 {piece.pieceBookmarkCount}
                    </button>
                  )}
                  {piece.piecePrice > 0 && (
                    <button className="flex text-white bg-sky-700 border-0 py-3 px-6 focus:outline-none hover:bg-sky-500 active:bg-sky-600 focus:ring focus:ring-sky-300 rounded-lg transition">
                      작품 결제
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 시네마 모드 블러 배경 */}
        {cinema && piece && (
          <div
            className="mx-auto flex justify-center items-center bg-cover bg-center opacity-30 blur"
            style={{
              backgroundImage: `url('http://j7d201.p.ssafy.io/api/my-file/read/${piece.pieceImg}')`,
              // height: "1009px",
              height: "100vh",
              // height: "92.95vh",
              width: "100vw",
            }}
            // data-aos="fade-in"
          ></div>
        )}

        {/* 시네마 모드 그림 */}
        {cinema && piece && (
          <div
            className="mx-auto flex justify-center items-center absolute top-0 left-0 cursor-pointer"
            style={{
              // backgroundImage: `url('http://j7d201.p.ssafy.io/api/my-file/read/${piece.pieceImg}')`,
              // height: "1009px",
              height: "100vh",
              // height: "92.95vh",
              width: "100vw",
            }}
            onClick={() => setCinema(false)}
          >
            <div className="flex">
              {/* 이미지 */}
              <img
                alt="gallery"
                className="object-contain rounded drop-shadow-md mr-8 cursor-pointer transition"
                src={`http://j7d201.p.ssafy.io/api/my-file/read/${piece.pieceImg}`}
                style={{ width: "100vw", height: "100vh" }}
                onClick={() => setCinema(false)}
                // data-aos="zoom-out"
                data-aos="fade-in"
              />
            </div>
          </div>
        )}
      </section>
    </React.Fragment>
  );
};

export default Piece;

// {piece && (
//   <div
//     key={Math.random().toString()}
//     className="shadow-md rounded mb-2 drop-shadow-md overflow-hidden relative cursor-pointer"
//   >
//     {/* 그림 */}
//     <div
//       className="absolute inset-0 bg-cover bg-center z-0"
//       style={{
//         backgroundImage: `url('http://j7d201.p.ssafy.io/api/my-file/read/${piece.pieceImg}')`,
//       }}
//     ></div>

//     {/* 설명 */}
//     <div className="opacity-0 hover:opacity-90 hover:bg-gray-900 ease-in-out duration-300 absolute inset-0 z-10 flex flex-col justify-center items-center">
//       <div className="text-1xl text-white font-semibold mb-2">
//         {piece.pieceArtist}
//       </div>
//       <div className="text-1xl text-white font-semibold">
//         {piece.pieceTitle}
//       </div>
//     </div>
//     <img
//       alt="gallery"
//       className="w-full h-full object-cover object-center rounded transition ease-in-out duration-300"
//       src={`http://j7d201.p.ssafy.io/api/my-file/read/${piece.pieceImg}`}
//     />
//   </div>
// )}