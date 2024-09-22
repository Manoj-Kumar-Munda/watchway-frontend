import React, { useState } from "react";
import { MdOutlineSaveAlt } from "react-icons/md";
import Modal from "../Modals/Modal";
import CreatePlaylistModal from "../Modals/CreatePlaylistModal";
import PlaylistBox from "./PlaylistBox";
import { AnimatePresence, motion } from "framer-motion";

const PlaylistBtn = () => {
  const [showPlaylists, setShowPlaylists] = useState(false);

  return (
    <>
      <div>
        <button
          onClick={() => setShowPlaylists((prev) => !prev)}
          className="  border border-white/10 py-1.5 px-4 rounded-md bg-slate-200 inline-flex items-center gap-2"
        >
          <MdOutlineSaveAlt color="black" />
          <span className="text-sm text-black hidden sm:inline font-medium">
            Save
          </span>
        </button>
      </div>

      <Modal className="max-w-screen-sm">
        <CreatePlaylistModal />
      </Modal>

      {showPlaylists && (
        <AnimatePresence>
          <motion.div
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
            exit={{ y: 5, opacity: 0 }}
            className="absolute bottom-full right-0 border border-white/10 rounded-md px-4 bg-white/20 backdrop-blur-lg max-w-max p-2"
          >
            <PlaylistBox />
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default PlaylistBtn;
