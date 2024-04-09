import clsx from "clsx";
import { useInView } from "react-intersection-observer";
import { useHeaderStore } from "../../store/use-header-store";

const Section02 = () => {
  const { setHeaderState } = useHeaderStore();

  const { ref: headerStateRef } = useInView({
    initialInView: false,
    rootMargin: "-100px 0px 0px 0px",
    onChange: (inView) => {
      console.log(inView);
      if (!inView) setHeaderState("dark");
      else setHeaderState("light");
    },
  });

  return (
    <section
      ref={headerStateRef}
      className={clsx(`w-full bg-gray-500 h-[30dvb]`)}
    ></section>
  );
};

export default Section02;
