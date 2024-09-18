import React, { useState } from "react";
import { MdOutlineSaveAlt } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const PlaylistBtn = () => {
  const [showPlaylists, setShowPlaylists] = useState(true);
  const [showCreatePlaylistForm, setShowCreatePlaylistForm] = useState(false);
  return (
    <div>
      <button
        onClick={() => setShowPlaylists((prev) => !prev)}
        className=" relative border border-white/10 py-1.5 px-4 rounded-md bg-slate-200 inline-flex items-center gap-2"
      >
        <MdOutlineSaveAlt color="black" />
        <span className="text-sm text-black hidden sm:inline font-medium">Save</span>
        <AnimatePresence>
          {showPlaylists && (
            <motion.div
              initial={{ opacity: 0, x: 5, y: 3 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 5, y: 3 }}
              className="absolute -top-[calc(100%+1rem)] right-0 border border-white/10 rounded-md px-4 bg-white/20 backdrop-blur-lg max-w-max p-2"
            >
              <div className="flex flex-col gap-2">
                <button>
                  <span className="text-nowrap">Create new playlist</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};

export default PlaylistBtn;
