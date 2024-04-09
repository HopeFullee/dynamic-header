import clsx from "clsx";
import { useInView } from "react-intersection-observer";
import { useHeaderStore } from "../../store/use-header-store";

interface Props {
  isFirstSection: boolean;
}

const Section01 = ({ isFirstSection }: Props) => {
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
      className={clsx(`bg-gray-600 w-full h-[101dvb]`)}
    ></section>
  );
};

export default Section01;
