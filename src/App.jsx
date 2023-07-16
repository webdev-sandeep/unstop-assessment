import Sidebar from "./components/Sidebar";
import Assessment from "./pages/Assessment";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const onSave = () => {
    setIsOpen(false);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  const onCloseSidebar = () => {
    setIsOpenSidebar(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const openSidebar = () => {
    setIsOpenSidebar(true);
  };

  return (
    <>
      {isOpen && <Modal isOpen={isOpen} onSave={onSave} onClose={onClose} />}
      <div className="grid md:grid-cols-sidebar h-full bg-slate-50">
        <div>
          <Sidebar
            onCloseSidebar={onCloseSidebar}
            isOpenSidebar={isOpenSidebar}
          />
        </div>
        <div className="bg-white h-min mx-3">
          <Assessment openModal={openModal} openSidebar={openSidebar} />
        </div>
      </div>
    </>
  );
}

export default App;
