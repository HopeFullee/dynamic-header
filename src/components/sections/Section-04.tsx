import clsx from "clsx";
import { useInView } from "react-intersection-observer";
import { useHeaderStore } from "../../store/use-header-store";

const Section04 = () => {
  const { setHeaderState } = useHeaderStore();

  const { ref: headerStateRef } = useInView({
    initialInView: false,
    rootMargin: "-100px 0px 0px 0px",
    onChange: (inView) => {
      if (inView) setHeaderState("dark");
    },
  });

  return (
    <section
      ref={headerStateRef}
      className={clsx(`w-full bg-gray-300 h-[101dvb] `)}
    ></section>
  );
};

export default Section04;
