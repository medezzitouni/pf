type Props = {
  sideBar: boolean;
  handleSideBar: () => void;
};

function Side({ sideBar, handleSideBar}: Props) {
  return (
    <aside
      className={`
        ${sideBar ? "" : "hidden"}
      dark:bg-slate-700 dark:text-white absolute top-0 left-0 h-screen w-3/4 z-10
      `}
    >
      <i
        className="fa fa-times float-right pr-3 pt-3 text-xl cursor-pointer"
        onClick={handleSideBar}
      ></i>
      aside
    </aside>
  );
}

export default Side;
