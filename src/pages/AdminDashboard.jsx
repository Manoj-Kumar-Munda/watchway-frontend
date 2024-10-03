import React from "react";
import { BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modals/Modal";
import UploadVideoModal from "../components/Modals/UploadVideoModal";
import { openModal } from "../store/slices/modalsSlice";
import ToggleBtn from "../components/Dashboard/ToggleBtn";
import DashboardRow from "../components/Dashboard/DashboardRow";
import Table from "../components/Dashboard/Table";
import Metrics from "../components/Dashboard/Metrics";

const AdminDashboard = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  console.log(user);

  return (
    <div className="relative  mt-4 px-2">
      <Modal modalId={"upload"} className="max-w-screen-sm z-50">
        <UploadVideoModal />
      </Modal>
      <div className="relative flex justify-between items-center flex-wrap">
        <div className="">
          <h1 className=" text-3xl font-bold">Welcome {user?.fullName}</h1>
          <p className="font-Roboto capitalize">
            Seamless video management elevated results
          </p>
        </div>

        <button
          onClick={() => dispatch(openModal("upload"))}
          className="bg-themered-500 inline-flex gap-1 items-center px-3 py-2 rounded-xl"
        >
          <BiPlus color="#fff" />
          <span className="font-Roboto text-white text-sm font-semibold">
            Upload
          </span>
        </button>
      </div>

      <Metrics />
      
      <Table />
    </div>
  );
};

export default AdminDashboard;
