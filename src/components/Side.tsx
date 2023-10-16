type Props = {
  sideBar: boolean;
  handleSideBar: (val?: boolean) => () => void;
};

function Side({ sideBar, handleSideBar }: Props) {
  return (
    <aside
      className={`
        ${sideBar ? "transition ease-in-out delay-150 translate-x-0" : "transition ease-in-out delay-150 -translate-x-full"}
      bg-slate-200 dark:bg-slate-400 dark:text-white fixed top-0 left-0 h-[100vh] w-3/4 z-10
      transition-transform
      `}
    >
      <i
        className="fa fa-times float-right pr-3 pt-3 text-xl cursor-pointer"
        onClick={handleSideBar()}
      ></i>
      
    </aside>
  );
}

export default Side;
