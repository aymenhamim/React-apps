import StoreProvider from "@/store/StoreProvider";

function layout({ children }) {
  return (
    <div>
      <StoreProvider>{children}</StoreProvider>
    </div>
  );
}

export default layout;
