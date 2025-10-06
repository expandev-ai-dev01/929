import { AppProviders } from './providers';
import { AppRouter } from './router';

/**
 * @component App
 * @summary Root application component that orchestrates providers and routing.
 * @type root-component
 * @category core
 *
 * @description
 * Main application component that wraps the entire app with necessary providers
 * and initializes the routing system.
 */
export const App = () => {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  );
};
