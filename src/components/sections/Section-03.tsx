import clsx from "clsx";
import { useInView } from "react-intersection-observer";
import { useHeaderStore } from "../../store/use-header-store";

const Section03 = () => {
  const { setHeaderState } = useHeaderStore();

  const { ref: headerStateRef } = useInView({
    initialInView: false,
    rootMargin: "-100px 0px 0px 0px",
    onChange: (inView) => {
      if (!inView) setHeaderState("light");
      else setHeaderState("dark");
    },
  });

  return (
    <section
      ref={headerStateRef}
      className={clsx(`w-full bg-gray-400 h-[30dvb] `)}
    ></section>
  );
};

export default Section03;
