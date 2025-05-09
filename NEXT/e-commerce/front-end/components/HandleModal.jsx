"use client";

import { useDispatch, useSelector } from "react-redux";
import AuthModal from "./AuthModal";
import { closeAuthModal } from "@/redux/slices/authSlice";
import AuthForm from "./AuthForm";

function HandleModal() {
  const { isModalOpen } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeAuthModal());
  };

  return (
    <div>
      <AuthModal isOpen={isModalOpen} onClose={handleClose}>
        <AuthForm />
      </AuthModal>
    </div>
  );
}

export default HandleModal;
