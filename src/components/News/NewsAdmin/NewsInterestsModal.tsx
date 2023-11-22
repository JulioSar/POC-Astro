import { useEffect, useState } from "react";
import { Modal } from "flowbite-react";
import SelectNew from "./ModalScenarios/SelectNew";
import NewsModal from "./ModalScenarios/NewsModal";

interface NewsInterestsModalProps {
  infoProps: {
    clickId: string;
    setClickId: (value: string) => void;
    sectionActive: string;
    isNewItem: boolean;
  };
  modalProps: {
    openModal: string | undefined;
    setOpenModal: (value: string | undefined) => void;
  };
}

export default function NewsInterestsModal({
  infoProps,
  modalProps,
}: NewsInterestsModalProps) {
  const infoId = infoProps.clickId;

  const [newItemOption, setNewItemOption] = useState<boolean>(
    infoProps.isNewItem
  );
  const [sectionActive, setSectionActive] = useState<string>(
    infoProps.sectionActive
  );

  const optionsSelect = {
    setNewItemOption,
    setSectionActive,
  };

  function handleModalClose() {
    modalProps.setOpenModal(undefined);
    infoProps.setClickId("");
  }
  return (
    <Modal
      dismissible
      show={modalProps.openModal === "size"}
      size={"7xl"}
      onClose={handleModalClose}
    >
      <section className=" flex flex-col min-h-[35rem]">
        <Modal.Header className=" border-b-0">
          {newItemOption && ``}
        </Modal.Header>

        <Modal.Body className="flex flex-col justify-center align-middle ">
          {newItemOption ? (
            <SelectNew optionsSelect={optionsSelect} />
          ) : sectionActive === "news" ? (
            <NewsModal id={infoId} />
          ) : (
            <h1>Hello</h1>
          )}
        </Modal.Body>
      </section>
    </Modal>
  );
}
