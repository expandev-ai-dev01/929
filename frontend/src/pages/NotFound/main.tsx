import { useNavigate } from 'react-router-dom';
import { Button } from '@/core/components/Button';
import type { NotFoundPageProps } from './types';

/**
 * @page NotFoundPage
 * @summary 404 error page for non-existent routes.
 * @domain core
 * @type error-page
 * @category public
 *
 * @routing
 * - Path: *
 * - Params: none
 * - Query: none
 * - Guards: none
 */
export const NotFoundPage = (props: NotFoundPageProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-9xl font-bold text-primary-600">404</h1>
        <h2 className="mb-4 text-3xl font-semibold text-gray-900">Página não encontrada</h2>
        <p className="mb-8 text-lg text-gray-600">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Button onClick={() => navigate('/')} size="large">
          Voltar para a página inicial
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
