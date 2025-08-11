import { NAV_LINKS } from "@/constants/common";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { BoxAlign } from "./BoxAlign";

// bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 max-lg:h-66 max-lg:border-t dark:[--pattern-fg:var(--color-white)]/10
const Header = () => {
  const icons = {
    Github: faGithub,
    Linkedin: faLinkedin,
  };

  function isSorted(nums: number[]) {
    console.log("nums", nums);
    for (let i = 0; i <= nums.length; i++) {
      console.log("nums[i]", nums[i], nums[i + 1]);

      if(nums[i] > nums[i + 1]) return false;
      // if(nums[i] <= nums[i+1])
    }
    return true;
  }

  console.log("isSorted([1, 2, 3, 4, 5]);", isSorted([1, 2, 1, 4, 5]));

  return (
    <BoxAlign className="mt-4">
      <header className="max-w-[800px] mx-auto">
        <BoxAlign brX className="flex justify-between w-full p-4">
          <h1 className="text-2xl font-bold">[AS]</h1>
          <div className="flex gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                className="w-8 h-8 flex items-center justify-center"
                key={link.href}
                href={link.href}
              >
                <FontAwesomeIcon
                  icon={icons[link.icon as keyof typeof icons]}
                  className="hover:text-[#8c49e7] text-[30px]"
                />
              </Link>
            ))}
          </div>
        </BoxAlign>
      </header>
    </BoxAlign>
  );
};

export default Header;
