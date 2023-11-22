import { Combobox } from "@/components/ui/combobox";

interface NewItemOptions {
  setNewItemOption: (value: boolean) => void;
  setSectionActive: (value: string) => void;
}

export default function SelectNew({
  optionsSelect,
}: {
  optionsSelect: NewItemOptions;
}) {
  const options = [
    {
      value: "news",
      label: "News",
    },
    {
      value: "interest",
      label: "Interest",
    },
  ];

  const handleSelection = (value: string) => {
    optionsSelect.setNewItemOption(false);
    optionsSelect.setSectionActive(value);
  };
  return (
    <>
      <section className="flex justify-center align-middle py-10">
        <h3 className="">Choose which item you would like to create</h3>
      </section>
      <section className="flex flex-col justify-center align-middle gap-6">
        <article className="flex justify-center align-middle">
          <Combobox
            options={options}
            setAction={handleSelection}
            selectedOption=""
          />
        </article>
      </section>
    </>
  );
}
