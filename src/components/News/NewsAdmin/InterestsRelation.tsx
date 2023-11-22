import { AddedCheck, PlusIcon } from "@/lib/icons";
import { interests } from "@/lib/mockData";
import { useEffect, useState } from "react";

export default function InterestsRelation({
  setListInterests,
}: {
  setListInterests: (value: string[]) => void;
}) {
  const [interestCategory, setInterestCategory] = useState<string>(
    "Geographic Juristictions"
  );
  const [interestNames, setInterestNames] = useState<string[]>();
  const [interestsClicked, setInterestsClicked] = useState<string[]>();

  function uniqueFilter(value: any, index: any, self: any) {
    return self.indexOf(value) === index;
  }
  const categories = interests.map((item) =>
    item.category.parent === null ? item.category.name : item.category.parent
  );

  useEffect(() => {
    const interestsNameFilter = interests.filter(
      (item) =>
        item.category.name === interestCategory ||
        item.category.parent === interestCategory
    );
    const interestsNamesMap = interestsNameFilter.map((item) => item.name);

    const uniqueNames = interestsNamesMap.filter(uniqueFilter);
    setInterestNames(uniqueNames);
  }, [interestCategory]);

  const filterCategories = categories.filter(uniqueFilter);

  const handleInterestClick = (interestClicked: string) => {
    const updatedInterests = [...(interestsClicked ?? [])];

    const index = updatedInterests.indexOf(interestClicked);

    if (index !== -1) {
      updatedInterests.splice(index, 1);
    } else {
      updatedInterests.push(interestClicked);
    }

    setInterestsClicked(updatedInterests);
    setListInterests(updatedInterests);
  };

  const isItemSelected = (item: string) => {
    return interestsClicked?.includes(item);
  };

  const itemSelectedStyle = "bg-[#E87722] border-[#E87722] text-white";

  const itemUnselectedStyle =
    "text-[#8D98AA] border-[#8D98AA] hover:bg-[#E87722] hover:text-white hover:border-[#E87222] ";

  return (
    <>
      <div className="flex flex-row gap-6 mt-10">
        {filterCategories.map((item) => (
          <button
            key={item}
            type="button"
            className={`text-sm underline underline-offset-8  ${
              item === interestCategory
                ? "text-[#E87722] decortation-[#E87722]"
                : " text-[#717B8C] decoration-[#E0E4EC "
            }`}
            onClick={() => setInterestCategory(item)}
          >
            {item}
          </button>
        ))}
        {/* <button
          type="button"
          className="text-[#717B8C] text-sm underline underline-offset-8 decoration-[#E0E4EC]"
          onClick={() => setInterestCategory("Marketing Contact Peferences")}
        >
          Marketing Contact Peferences
        </button> */}
      </div>
      <section className="flex flex-row flex-wrap gap-3 mt-10">
        {interestNames?.map((item) => (
          <button
            type="button"
            key={item}
            value={item}
            className={`h-8 w-auto rounded-lg border-2 group 
              group transition duration-300 px-3 flex flex-row  ${
                isItemSelected(item) ? itemSelectedStyle : itemUnselectedStyle
              }`}
            onClick={() => handleInterestClick(item)}
          >
            <section className="flex flex-row gap-2 items-center align-middle ">
              <span>
                {isItemSelected(item) ? (
                  <AddedCheck />
                ) : (
                  <PlusIcon className="group-hover:fill-white" />
                )}
              </span>
              <span>{item}</span>
            </section>
          </button>
        ))}
      </section>
    </>
  );
}
