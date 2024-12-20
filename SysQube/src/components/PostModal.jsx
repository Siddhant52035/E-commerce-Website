import React from "react";
import Modal from "react-modal";

const PostModal = ({ isOpen, closeModal }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    contentLabel="Post for Free Modal"
    className="top-1/2 left-1/2 right-auto bottom-auto margin-right-[-50%] transform translate-x-[-50%] translate-y-[-50%] w-[500px] p-[20px] "
    overlayClassName=""
  >
    <h2 className="text-2xl font-semibold">Post for Free</h2>
    <form>
      <div>
        <label className="block mt-4">Title:</label>
        <input
          type="text"
          name="title"
          className="w-full border-2 border-gray-300 rounded p-2"
        />
      </div>
      <div>
        <label className="block mt-4">Description:</label>
        <textarea
          name="description"
          className="w-full border-2 border-gray-300 rounded p-2"
          rows={4}
        />
      </div>
      <button
        type="submit"
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Submit
      </button>
      <button
        type="button"
        className="mt-4 ml-4 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        onClick={closeModal}
      >
        Close
      </button>
    </form>
  </Modal>
);

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "700px",
    height: "500px",
    padding: "20px",
    zindex: "82",
  },
};

export default PostModal;
