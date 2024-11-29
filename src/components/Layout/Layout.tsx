import { memo } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = memo(({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative before:bg-main before:absolute before:inset-0 before:z-[-1] before:bg-no-repeat before:bg-cover before:opacity-80 before:mix-blend-color-burn after:bg-overlay after:bg-center after:bg-no-repeat after:bg-cover after:z-[-2] after:inset-0 after:absolute">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
});

Layout.displayName = 'Layout';

export default Layout;
