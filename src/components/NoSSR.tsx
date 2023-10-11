import dynamic from "next/dynamic";

// const isSSREnabled = () => typeof window === 'undefined';

const NoSSRWrapper = (props: any) => <>{props.children}</>;

export default dynamic(() => Promise.resolve(NoSSRWrapper), {
  ssr: false,
});
