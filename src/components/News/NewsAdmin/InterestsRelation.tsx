import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { interests } from "@/lib/mockData";
import { useEffect, useState } from "react";

export default function InterestsRelation() {
  const [interestCategory, setInterestCategory] = useState<string>(
    "Geographic Juristictions"
  );
  const [interestNames, setInterestNames] = useState<string[]>();

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

  return (
    <>
      <div className="flex flex-row gap-6 mt-10">
        {filterCategories.map((item) => (
          <button
            key={item}
            className="text-[#717B8C] text-sm underline underline-offset-8 decoration-[#E0E4EC] "
            onClick={() => setInterestCategory(item)}
          >
            {item}
          </button>
        ))}
        <button
          className="text-[#717B8C] text-sm underline underline-offset-8 decoration-[#E0E4EC]"
          onClick={() => setInterestCategory("Marketing Contact Peferences")}
        >
          Marketing Contact Peferences
        </button>
      </div>
      <section className="flex flex-row flex-wrap gap-3 mt-10">
        {interestNames?.map((item) => (
          <ToggleGroup type="single">
            <ToggleGroupItem
              value="a"
              className="bg-[#E87722] text-white h-6 border-0 rounded-md w-auto"
            >
              {item}
            </ToggleGroupItem>
          </ToggleGroup>
        ))}
      </section>
    </>
  );
}
