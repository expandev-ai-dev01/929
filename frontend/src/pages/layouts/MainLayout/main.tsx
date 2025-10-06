import { Outlet } from 'react-router-dom';
import type { MainLayoutProps } from './types';

/**
 * @component MainLayout
 * @summary Main application layout wrapper.
 * @domain core
 * @type layout-component
 * @category layout
 *
 * @description
 * Provides the main structure for the application including
 * header, main content area, and footer.
 */
export const MainLayout = (props: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Sistema de Calculadora</h1>
        </div>
      </header>

      <main className="flex-1 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600">
            © 2024 Sistema de Calculadora. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};
