import NavList from "../components/navigation/NavList";

export default function RootLayout({ children }) {
  return (
    <div className="gradient leading-relaxed tracking-wide flex flex-col">
      <NavList />

      <div className="container mx-auto w-screen">
        <div className="text-center px-3 lg:px-0">
          <h1 className="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight">
            React Router Playground
          </h1>
          {children}
        </div>
      </div>
    </div>
  );
}
