

export default function Home() {
  return (
    <main>
      {/* Desktop Component */}
      <div className="hidden md:block">
        <DesktopComponent />
      </div>

      {/* Mobile Component */}
      <div className="block md:hidden">
        <MobileComponent />
      </div>
    </main>
  );
}
